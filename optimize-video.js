// Progressive video loading for better mobile performance
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-video');

    if (!heroVideo) return;

    // Check if user is on a slow connection or mobile data
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g');
    const isMobile = window.innerWidth < 768;

    // Only load video on fast connections
    if (isSlowConnection || (isMobile && connection && connection.saveData)) {
        // Don't load video, use poster image only
        heroVideo.removeAttribute('autoplay');
        heroVideo.removeAttribute('src');
        heroVideo.querySelector('source')?.remove();
        console.log('Video disabled for slow connection/data saver mode');
        return;
    }

    // Use Intersection Observer to load video only when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load and play video
                if (heroVideo.hasAttribute('preload') && heroVideo.getAttribute('preload') === 'none') {
                    heroVideo.setAttribute('preload', 'auto');
                    heroVideo.load();
                }
                observer.unobserve(heroVideo);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(heroVideo);
});
