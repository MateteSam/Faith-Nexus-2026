import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';

const workspace = process.cwd();
const outputDir = path.join(workspace, 'public', 'optimized');

const images = [
  { src: 'public/magazine/page_1.jpg', name: 'magazine_page_1', widths: [480, 800, 1200] },
  { src: 'public/images/partnership-south-africa.jpg', name: 'partnership_hero', widths: [768, 1200, 2000] },
  { src: 'public/images/Faith Nexus Seven Pillars Icons.png', name: 'seven_pillars', widths: [480, 800, 1200] },
  { src: 'public/images/background2.png', name: 'background2', widths: [768, 1200, 2000] }
];

async function ensureOut() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (e) {}
}

async function processImage(item) {
  const absSrc = path.join(workspace, item.src);
  try {
    await fs.access(absSrc);
  } catch (e) {
    console.warn('Missing source:', absSrc);
    return;
  }

  for (const w of item.widths) {
    const webpOut = path.join(outputDir, `${item.name}-${w}.webp`);
    const avifOut = path.join(outputDir, `${item.name}-${w}.avif`);
    try {
      await sharp(absSrc).resize({ width: w }).webp({ quality: 80 }).toFile(webpOut);
      await sharp(absSrc).resize({ width: w }).avif({ quality: 55 }).toFile(avifOut);
      console.log('Wrote', webpOut, avifOut);
    } catch (err) {
      console.error('Failed to process', absSrc, w, err.message);
    }
  }
}

(async () => {
  await ensureOut();
  for (const img of images) {
    await processImage(img);
  }
  console.log('Done');
})();
