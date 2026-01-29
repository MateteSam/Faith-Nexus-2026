// Responsive image loading helper
// Provides picture elements with WebP + fallback for optimal loading

export function createResponsiveImage(imageName, alt, className = '', sizes = '100vw') {
    const baseName = imageName.replace(/\.(png|jpg|jpeg)$/, '');

    return `
<picture>
    <source 
        srcset="/optimized/${baseName}-mobile.webp 640w,
                /optimized/${baseName}-tablet.webp 1024w,
                /optimized/${baseName}.webp 1920w"
        sizes="${sizes}"
        type="image/webp">
    <source 
        srcset="/optimized/${baseName}.jpg 1920w"
        sizes="${sizes}"
        type="image/jpeg">
    <img 
        src="/optimized/${baseName}.jpg" 
        alt="${alt}" 
        class="${className}"
        loading="lazy"
        decoding="async">
</picture>`.trim();
}

// Single size responsive image
export function createSingleResponsiveImage(imageName, alt, className = '', width = '', height = '') {
    const baseName = imageName.replace(/\.(png|jpg|jpeg)$/, '');
    const ext = imageName.match(/\.(png|jpg|jpeg)$/)[0];

    const widthAttr = width ? `width="${width}"` : '';
    const heightAttr = height ? `height="${height}"` : '';

    return `
<picture>
    <source srcset="/optimized/${baseName}.webp" type="image/webp">
    <img 
        src="/optimized/${baseName}${ext}" 
        alt="${alt}" 
        class="${className}"
        ${widthAttr}
        ${heightAttr}
        loading="lazy"
        decoding="async">
</picture>`.trim();
}

// For use in JavaScript
window.ResponsiveImage = {
    create: createResponsiveImage,
    createSingle: createSingleResponsiveImage
};
