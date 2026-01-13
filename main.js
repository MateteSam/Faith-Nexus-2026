import { renderNavbar } from './navbar.js';
import { renderFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject shared components
    renderNavbar();
    renderFooter();

    // Stats animation if on home page
    const stats = document.querySelectorAll('.number');
    if (stats.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    }

    // Handle query parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tab') === 'play') {
        const playSection = document.getElementById('play-section');
        if (playSection) {
            playSection.classList.add('active');
            playSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Initialize Countdowns
    startCountdown('virtual-timer', '2026-03-27T00:00:00');
    startCountdown('summit-timer', '2026-10-20T00:00:00');

    // Global Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-luxury, .medallion-card, .benefit-card, .challenge-card').forEach(el => revealObserver.observe(el));
});

function startCountdown(elementId, targetDate) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const target = new Date(targetDate).getTime();

    const update = () => {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff < 0) return;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        container.querySelector('.days').innerText = d.toString().padStart(2, '0');
        container.querySelector('.hours').innerText = h.toString().padStart(2, '0');
        container.querySelector('.minutes').innerText = m.toString().padStart(2, '0');
        container.querySelector('.seconds').innerText = s.toString().padStart(2, '0');
    };

    setInterval(update, 1000);
    update();
}

function animateNumbers(el) {
    const target = parseInt(el.innerText.replace(/[^0-9]/g, ''));
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.innerText = target.toLocaleString() + (el.innerText.includes('+') ? '+' : (el.innerText.includes('K') ? 'K' : (el.innerText.includes('M') ? 'M' : '')));
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(current).toLocaleString() + (el.innerText.includes('+') ? '+' : (el.innerText.includes('K') ? 'K' : (el.innerText.includes('M') ? 'M' : '')));
        }
    }, 20);
}
