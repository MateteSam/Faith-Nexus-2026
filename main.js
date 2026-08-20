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
    const video = document.getElementById('heroPortalVideo') || document.getElementById('heroVideo');
    const playBtn = document.getElementById('portalPlayBtn') || document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('portalMuteBtn') || document.getElementById('muteToggleBtn');

    if (!video) return;

    const playSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    const pauseSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    const soundOnSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`;
    const soundOffSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.innerHTML = `${pauseSvg} Pause`;
            } else {
                video.pause();
                playBtn.innerHTML = `${playSvg} Play`;
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

            alert(`Welcome to Faith Nexus, ${name}!\n\nYour interest [${pass ? pass.toUpperCase() : 'DELEGATE'}] has been recorded. A confirmation will be sent to ${email}.`);
            modal.classList.remove('active');
            form.reset();
        });
    }
}

/* 10. CW100 NOMINATION MODAL */
window.openNominationModal = function() {
    let modal = document.getElementById('nominationModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'nominationModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-box">
                <button class="modal-close-btn" onclick="document.getElementById('nominationModal').classList.remove('active')">&times;</button>
                <span class="pdf-subtitle rust">Content World 100 &middot; CW100</span>
                <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; color: #111111; margin-bottom: 0.5rem;">Nominate a Kingdom Voice</h3>
                <p style="font-size: 0.9rem; color: #666666; margin-bottom: 1.5rem;">
                    Nominate a visionary Christian leader, creator, innovator, or educator impacting Africa & the global diaspora.
                </p>

                <form id="cw100NominationForm" style="display: flex; flex-direction: column; gap: 1rem;">
                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #333333; margin-bottom: 4px;">Nominee Full Name *</label>
                        <input type="text" id="nomineeName" required placeholder="e.g. Grace Adebayo" style="width: 100%; padding: 10px 14px; border: 1px solid #DDD; border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
                    </div>

                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #333333; margin-bottom: 4px;">Pillar / Sector *</label>
                        <select id="nomineeSector" required style="width: 100%; padding: 10px 14px; border: 1px solid #DDD; border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
                            <option value="Media & Communication">Media & Communication</option>
                            <option value="Technology & Innovation">Technology & Innovation (AI, FinTech)</option>
                            <option value="Faith & Spiritual Life">Faith & Spiritual Life</option>
                            <option value="Economy & Enterprise">Economy & Enterprise / Capital</option>
                            <option value="Education & Discipleship">Education & Discipleship</option>
                            <option value="Governance & Public Life">Governance & Public Life</option>
                            <option value="Arts & Culture">Arts & Culture</option>
                        </select>
                    </div>

                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #333333; margin-bottom: 4px;">Country / Region *</label>
                        <input type="text" id="nomineeRegion" required placeholder="e.g. South Africa, UK, Kenya, BVI, Nigeria" style="width: 100%; padding: 10px 14px; border: 1px solid #DDD; border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
                    </div>

                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #333333; margin-bottom: 4px;">Why are you nominating this voice? *</label>
                        <textarea id="nomineeReason" required rows="3" placeholder="Briefly describe their impact, initiatives, or reach..." style="width: 100%; padding: 10px 14px; border: 1px solid #DDD; border-radius: 6px; font-family: inherit; font-size: 0.9rem;"></textarea>
                    </div>

                    <button type="submit" class="btn-pdf-black" style="padding: 12px; margin-top: 0.5rem; width: 100%;">
                        Submit CW100 Nomination
                    </button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('#cw100NominationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const nominee = document.getElementById('nomineeName').value;
            alert(`Thank you!\n\nYour CW100 nomination for [${nominee}] has been submitted for review by the WCCCS Advisory Committee.`);
            modal.classList.remove('active');
            e.target.reset();
        });
    }

    modal.classList.add('active');
};

/* 11. FAITH NEXUS CONCIERGE (SMART FAQ & TRAVEL ASSISTANT) */
function initConcierge() {
    if (document.getElementById('conciergeBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'conciergeBtn';
    btn.className = 'concierge-float-btn';
    btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        <span>Nexus Concierge</span>
    `;

    const panel = document.createElement('div');
    panel.id = 'conciergePanel';
    panel.className = 'concierge-panel';
    panel.innerHTML = `
        <div class="concierge-header">
            <div>
                <div style="font-weight: 800; font-size: 1rem; color: #111111;">Faith Nexus Concierge</div>
                <div style="font-size: 0.75rem; color: #777777;">Quick Answers & Summit Support</div>
            </div>
            <button onclick="document.getElementById('conciergePanel').classList.remove('open')" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">&times;</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="concierge-faq-item" onclick="alert('🇿🇦 VISA ADVISORY:\nDelegates requiring entry visas for South Africa will receive an official Invitation & Accreditation Letter upon registering interest.')">
                <strong>🛂 South Africa Visa Guidance</strong>
            </div>

            <div class="concierge-faq-item" onclick="alert('🏨 ACCOMMODATION:\nPartner hotels in Sandton & Rosebank, Johannesburg with exclusive Faith Nexus summit rates will be published with registration.')">
                <strong>🏨 Summit Hotels & Lodging</strong>
            </div>

            <div class="concierge-faq-item" onclick="alert('🚀 SOFT LAUNCH:\nJoin the hybrid soft launch on 29 October 2026 in Johannesburg ahead of the main summit in April 2027.')">
                <strong>✨ Soft Launch: 29 Oct 2026</strong>
            </div>

            <div class="concierge-faq-item" onclick="alert('🏆 CW100 NOMINATIONS:\nNominations are officially open for Christian leaders impacting Africa, UK, Europe, BVI, and Asia.')">
                <strong>🏆 CW100 (Content World 100)</strong>
            </div>
        </div>

        <div style="border-top: 1px solid var(--fn-border-subtle); padding-top: 10px; display: flex; gap: 8px;">
            <a href="/contact.html" class="btn-pdf-black" style="flex: 1; text-align: center; font-size: 0.78rem; padding: 8px;">
                Contact Desk
            </a>
            <a href="/registration.html" class="btn-pdf-outline-dark" style="flex: 1; text-align: center; font-size: 0.78rem; padding: 8px;">
                Register
            </a>
        </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    btn.addEventListener('click', () => {
        panel.classList.toggle('open');
    });
}

/* 13. INTERACTIVE SECTOR HUB (FIND YOUR PLACE) */
function initSectorHub() {
    const pills = document.querySelectorAll('.sector-pill-btn');
    const badgeEl = document.getElementById('sectorBadge');
    const titleEl = document.getElementById('sectorTitle');
    const descEl = document.getElementById('sectorDesc');
    const tagsEl = document.getElementById('sectorTags');

    if (!pills.length || !titleEl) return;

    const sectorData = {
        media: {
            badge: "Pillar 02 &middot; Storytelling & Broadcast",
            title: "Broadcasting, Cinema & Christian IP",
            desc: "Uniting Africa's foremost filmmakers, digital storytellers, television executives, and streaming platforms to pioneer sovereign distribution models and global Christian media.",
            tags: ["Distribution Networks", "Film Pitches", "Studio Masterclasses", "Streaming Tech"]
        },
        tech: {
            badge: "Pillar 03 &middot; Frontier Innovation & AI",
            title: "Artificial Intelligence, Cloud & FinTech",
            desc: "Gathering Christian CTOs, software architects, AI researchers, and tech founders building sovereign digital infrastructure, church management systems, and ethical AI tools for the continent.",
            tags: ["Ethical AI", "Fintech & Capital", "Cloud Architecture", "Product Showcases"]
        },
        faith: {
            badge: "Pillar 01 &middot; Foundations & Covenant",
            title: "Apostolic Alignment & Ministry Leadership",
            desc: "Bringing senior bishops, apostles, ministry executives, and church networks together for deep theological reflection, cross-continental fellowship, and strategic collaboration.",
            tags: ["Covenant Alignment", "Apostolic Networks", "Church Growth", "Global Missions"]
        },
        enterprise: {
            badge: "Pillar 06 &middot; Capital & Marketplace",
            title: "Kingdom Capital, Venture & Enterprise",
            desc: "Connecting Christian entrepreneurs, angel investors, family offices, and wealth stewards to mobilize capital for high-impact African and global Kingdom ventures.",
            tags: ["Venture Capital", "Angel Syndicates", "Marketplace Impact", "Enterprise Growth"]
        },
        governance: {
            badge: "Pillar 04 &middot; Public Life & Policy",
            title: "Public Leadership, Law & Civic Influence",
            desc: "Equipping Christian jurists, public servants, diplomats, and policy shapers to advance integrity, justice, and nation-building across Africa.",
            tags: ["Public Policy", "Judicial Integrity", "Civic Strategy", "Diplomatic Relations"]
        },
        youth: {
            badge: "Pillar 07 &middot; Arts, Culture & Next-Gen",
            title: "Youth Renaissance & Cultural Transformation",
            desc: "Empowering the next generation of creative artists, worship pioneers, digital native influencers, and young entrepreneurs to carry Kingdom influence into tomorrow.",
            tags: ["Emerging Voices", "Creative Labs", "Mentorship Circles", "Digital Ministry"]
        }
    };

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const key = pill.getAttribute('data-sector');
            const data = sectorData[key];

            if (data) {
                const card = document.getElementById('dynamicSectorCard');
                if (card) {
                    card.style.opacity = '0.5';
                    card.style.transform = 'translateY(6px)';
                    setTimeout(() => {
                        badgeEl.innerHTML = data.badge;
                        titleEl.textContent = data.title;
                        descEl.textContent = data.desc;
                        tagsEl.innerHTML = data.tags.map(t => `<span class="sector-mini-tag">${t}</span>`).join('');
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 150);
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initConcierge();
    initSectorHub();
});



