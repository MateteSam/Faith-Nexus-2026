/**
 * FAITH NEXUS 2026 - CINEMATIC INTERACTIVE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initHeroVideo();
    initCountdown();
    initPillarsModal();
    initCreatorsFilter();
    initScheduleTabs();
    initRegistrationModal();
});

/* 1. COSMIC PARTICLES CANVAS */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.floor((width * height) / 17000);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.65 + 0.2,
            color: Math.random() > 0.5 ? '#00F0FF' : '#00FF87'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}

/* 2. NAVBAR SCROLL & MOBILE TOGGLE */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            if (!isFlex) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '90px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(3, 6, 17, 0.96)';
                navLinks.style.padding = '2.5rem';
                navLinks.style.borderBottom = '1px solid rgba(0, 240, 255, 0.3)';
            }
        });
    }
}

/* 3. HERO VIDEO CONTROLS */
function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const playBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteToggleBtn');

    if (!video) return;

    const playSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    const pauseSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    const soundOnSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`;
    const soundOffSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.innerHTML = `${pauseSvg} Pause Film`;
            } else {
                video.pause();
                playBtn.innerHTML = `${playSvg} Play Film`;
            }
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteBtn.innerHTML = video.muted ? `${soundOffSvg} Unmute` : `${soundOnSvg} Mute`;
        });
    }
}

/* 4. LIVE SUMMIT COUNTDOWN */
function initCountdown() {
    const targetDate = new Date('2026-10-24T09:00:00+02:00').getTime();

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    if (!daysEl) return;

    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
            daysEl.innerText = '00';
            hoursEl.innerText = '00';
            minsEl.innerText = '00';
            secsEl.innerText = '00';
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.innerText = d.toString().padStart(2, '0');
        hoursEl.innerText = h.toString().padStart(2, '0');
        minsEl.innerText = m.toString().padStart(2, '0');
        secsEl.innerText = s.toString().padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/* 5. 7 PILLARS INTERACTIVE MODAL */
function initPillarsModal() {
    const pillarCards = document.querySelectorAll('.pillar-card');
    const modal = document.getElementById('pillarModal');
    const closeBtn = document.getElementById('closePillarModal');

    if (!modal) return;

    pillarCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title') || 'Kingdom Pillar';
            const desc = card.getAttribute('data-desc') || '';
            const details = card.getAttribute('data-details') || '';

            document.getElementById('modalPillarTitle').innerText = title;
            document.getElementById('modalPillarDesc').innerText = desc;
            document.getElementById('modalPillarDetails').innerText = details;

            modal.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

/* 6. FAITH NEXUS 100 FILTERING */
function initCreatorsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const creatorCards = document.querySelectorAll('.creator-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            creatorCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (filter === 'all' || cat === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* 7. SUMMIT SCHEDULE TRACK SWITCHING */
function initScheduleTabs() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const timelines = document.querySelectorAll('.timeline-day');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const day = tab.getAttribute('data-day');

            timelines.forEach(tl => {
                if (tl.getAttribute('id') === `schedule-${day}`) {
                    tl.style.display = 'flex';
                } else {
                    tl.style.display = 'none';
                }
            });
        });
    });
}

/* 8. REGISTRATION & VIP PASS MODAL */
function initRegistrationModal() {
    const triggers = document.querySelectorAll('.open-register-modal');
    const modal = document.getElementById('registerModal');
    const closeBtn = document.getElementById('closeRegisterModal');
    const form = document.getElementById('registrationForm');

    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const passType = btn.getAttribute('data-pass');
            if (passType) {
                const passSelect = document.getElementById('passTypeSelect');
                if (passSelect) passSelect.value = passType;
            }
            modal.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const pass = document.getElementById('passTypeSelect').value;

            alert(`Welcome to Faith Nexus 2026, ${name}!\n\nYour pass [${pass.toUpperCase()}] has been reserved. A confirmation delegate badge will be sent to ${email}.`);
            modal.classList.remove('active');
            form.reset();
        });
    }
}
