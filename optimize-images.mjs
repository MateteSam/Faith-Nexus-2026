import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const OPTIMIZED_DIR = './public/optimized';

// Image optimization settings
const QUALITY = {
    webp: 80,
    jpeg: 75,
    png: 80
};

const SIZES = {
    mobile: 640,
    tablet: 1024,
    desktop: 1920
};

async function ensureDir(dir) {
    try {
        await mkdir(dir, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

async function optimizeImage(filePath, fileName) {
    const ext = extname(fileName).toLowerCase();
    const name = basename(fileName, ext);

    // Skip if already in optimized folder
    if (filePath.includes('optimized')) return;

    console.log(`Optimizing: ${fileName}...`);

    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Generate WebP version (best compression)
        await image
            .webp({ quality: QUALITY.webp })
            .toFile(join(OPTIMIZED_DIR, `${name}.webp`));

        // Generate responsive sizes for large images
        if (metadata.width > 800) {
            // Mobile version
            await sharp(filePath)
                .resize(SIZES.mobile, null, { withoutEnlargement: true })
                .webp({ quality: QUALITY.webp })
                .toFile(join(OPTIMIZED_DIR, `${name}-mobile.webp`));

            // Tablet version
            await sharp(filePath)
                .resize(SIZES.tablet, null, { withoutEnlargement: true })
                .webp({ quality: QUALITY.webp })
                .toFile(join(OPTIMIZED_DIR, `${name}-tablet.webp`));
        }

        // Optimize original format as fallback
        if (ext === '.jpg' || ext === '.jpeg') {
            await sharp(filePath)
                .jpeg({ quality: QUALITY.jpeg, progressive: true })
                .toFile(join(OPTIMIZED_DIR, `${name}.jpg`));
        } else if (ext === '.png') {
            await sharp(filePath)
                .png({ quality: QUALITY.png, compressionLevel: 9 })
                .toFile(join(OPTIMIZED_DIR, fileName));
        }

        console.log(`✓ Optimized: ${fileName}`);
    } catch (err) {
        console.error(`✗ Error optimizing ${fileName}:`, err.message);
    }
}

async function processDirectory(dir) {
    await ensureDir(OPTIMIZED_DIR);

    const files = await readdir(dir);
    let processed = 0;

    for (const file of files) {
        const filePath = join(dir, file);
        const stats = await stat(filePath);

        if (stats.isDirectory()) {
            // Skip directories
            continue;
        }

        const ext = extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            await optimizeImage(filePath, file);
            processed++;
        }
    }

    console.log(`\n✓ Processed ${processed} images`);
    console.log(`Optimized images saved to: ${OPTIMIZED_DIR}`);
}

// Run the optimization
processDirectory(PUBLIC_DIR).catch(console.error);
