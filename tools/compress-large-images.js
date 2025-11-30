import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const workspace = process.cwd();
const publicDir = path.join(workspace, 'public');

async function* walk(dir) {
  for await (const d of await fs.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

function shouldProcess(filePath, stat) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return false;
  // only process files larger than 100 KB
  return stat.size > 100 * 1024;
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  const tmp = path.join(dir, base + '.tmp');

  try {
    if (ext === '.png') {
      await sharp(filePath)
        .png({ compressionLevel: 9, quality: 80 })
        .toFile(tmp);
    } else {
      // jpg/jpeg
      await sharp(filePath)
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(tmp);
    }

    // replace original
    await fs.rename(tmp, filePath);
    console.log('Compressed:', filePath);
  } catch (err) {
    console.error('Failed to compress', filePath, err.message);
    try { await fs.rm(tmp); } catch (e) {}
  }
}

(async () => {
  console.log('Scanning', publicDir);
  const toProcess = [];
  try {
    for await (const f of walk(publicDir)) {
      try {
        const stat = await fs.stat(f);
        if (shouldProcess(f, stat)) toProcess.push({ f, size: stat.size });
      } catch (e) {}
    }
  } catch (e) {
    console.error('Failed to scan public directory', e.message);
    process.exitCode = 1;
    return;
  }

  // sort by size desc
  toProcess.sort((a,b) => b.size - a.size);
  console.log('Found', toProcess.length, 'large images to compress');

  for (const item of toProcess) {
    await processFile(item.f);
  }

  console.log('Done');
})();
