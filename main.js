import { renderNavbar } from './navbar.js';
import { renderFooter } from './footer.js';

const BYPASS_KEY = 'fn_dev_access';
const BYPASS_CODE = 'nexus2026';

function applyUnderConstructionGate() {
    if (localStorage.getItem(BYPASS_KEY) === BYPASS_CODE) return false;
    
    document.body.innerHTML = `
        <div style="position: fixed; inset: 0; z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #050a14, #0a1628); color: white; font-family: 'Outfit', sans-serif; text-align: center; padding: 20px; overflow: hidden;">
            
            <!-- Animated Background Grid -->
            <div style="position: absolute; inset: 0; opacity: 0.03; pointer-events: none; background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px);"></div>
            
            <!-- Content -->
            <div style="position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center;">
                
                <!-- Creative Logo & Mascot -->
                <div style="position: relative; width: 200px; height: 200px; margin-bottom: 2rem;">
                    <!-- Globe Logo with a glowing pulse effect -->
                    <img src="/nexus-globe-v3.png" style="width: 100%; height: 100%; object-fit: contain; animation: glowPulse 4s infinite ease-in-out;" alt="Faith Nexus Globe" />
                    
                    <!-- Mascot playfully floating next to it -->
                    <div style="position: absolute; bottom: -30px; right: -60px; animation: floatMascot 4s infinite ease-in-out; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));">
                        <img src="/bird-mascot.png" style="width: 140px; height: auto; transform: scaleX(-1);" alt="Faith Nexus Mascot" />
                    </div>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <h1 style="font-size: 4rem; font-weight: 800; margin: 0; letter-spacing: -1px; line-height: 1.1;">
                        Faith<span style="color: #fbbf24;">Nexus</span>
                    </h1>
                    <div style="margin-top: 15px; display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 999px; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.3); box-shadow: 0 0 20px rgba(251,191,36,0.1);">
                        <div style="width: 10px; height: 10px; border-radius: 50%; background: #fbbf24; animation: blink 1.5s infinite;"></div>
                        <span style="font-size: 0.85rem; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #fbbf24;">Site Under Construction</span>
                    </div>
                </div>
                
                <div class="uprising-container">
                    <h2 class="uprising-text" data-text="THE DIGITAL UPRISING">THE DIGITAL UPRISING</h2>
                </div>
                <p style="color: rgba(255,255,255,0.6); font-size: 1.1rem; max-width: 550px; margin-bottom: 3rem; line-height: 1.6;">
                    The global platform for Christian creators and storytellers is getting a major upgrade. Hold tight!
                </p>
                
                <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; width: 100%; max-width: 400px;">
                    <button id="dev-access-btn" style="background: none; border: none; color: rgba(255,255,255,0.2); font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold; cursor: pointer; transition: color 0.2s;">Developer Access</button>
                    <div id="dev-input" style="display: none; margin-top: 1.5rem; align-items: center; justify-content: center; gap: 10px;">
                        <input type="password" id="dev-code" placeholder="Enter bypass code" style="height: 44px; padding: 0 20px; border-radius: 999px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; outline: none; font-size: 14px; width: 200px; transition: border-color 0.2s;">
                        <button id="dev-submit" style="height: 44px; padding: 0 24px; border-radius: 999px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border: none; color: #000; font-weight: 800; font-size: 14px; cursor: pointer; box-shadow: 0 4px 15px rgba(245,158,11,0.3); transition: transform 0.2s;">Unlock</button>
                    </div>
                </div>
            </div>
        </div>
        <style>
            @keyframes glowPulse { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px rgba(251,191,36,0.3)); } 50% { transform: scale(1.03); filter: drop-shadow(0 0 40px rgba(251,191,36,0.6)); } }
            @keyframes floatMascot { 0%, 100% { transform: translateY(0) rotate(-5deg); } 50% { transform: translateY(-15px) rotate(5deg); } }
            @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
            
            .uprising-container { margin-bottom: 1.5rem; position: relative; }
            .uprising-text {
                font-size: 2.2rem;
                font-weight: 900;
                margin: 0;
                text-transform: uppercase;
                letter-spacing: 4px;
                color: transparent;
                background: linear-gradient(90deg, #fbbf24, #f59e0b, #ffffff, #fbbf24);
                background-size: 300% 100%;
                -webkit-background-clip: text;
                background-clip: text;
                animation: gradientSweep 4s ease-in-out infinite, glitch 3s infinite alternate;
                position: relative;
                -webkit-text-stroke: 1px rgba(251, 191, 36, 0.3);
            }
            .uprising-text::before {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                color: #fbbf24;
                z-index: -1;
                filter: blur(12px);
                animation: pulseTextGlow 2s infinite alternate;
            }
            @keyframes gradientSweep { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
            @keyframes pulseTextGlow { 0% { opacity: 0.4; filter: blur(8px); } 100% { opacity: 0.8; filter: blur(16px); } }
            @keyframes glitch {
                0%, 100% { transform: skew(0deg); letter-spacing: 4px; }
                10% { transform: skew(-3deg); letter-spacing: 6px; }
                20% { transform: skew(3deg); letter-spacing: 4px; }
                80% { transform: skew(0deg); letter-spacing: 4px; }
            }

            #dev-access-btn:hover { color: rgba(255,255,255,0.6) !important; }
            #dev-submit:hover { transform: translateY(-2px); }
            #dev-code:focus { border-color: rgba(251,191,36,0.5) !important; }
        </style>
    `;

    document.getElementById('dev-access-btn').addEventListener('click', () => {
        const el = document.getElementById('dev-input');
        el.style.display = el.style.display === 'none' ? 'flex' : 'none';
        if(el.style.display === 'flex') document.getElementById('dev-code').focus();
    });

    document.getElementById('dev-submit').addEventListener('click', () => {
        const code = document.getElementById('dev-code').value;
        if (code.toLowerCase().trim() === BYPASS_CODE) {
            localStorage.setItem(BYPASS_KEY, BYPASS_CODE);
            window.location.reload();
        } else {
            const input = document.getElementById('dev-code');
            input.style.border = '1px solid #ef4444';
            setTimeout(() => input.style.border = '1px solid rgba(255,255,255,0.1)', 500);
        }
    });

    document.getElementById('dev-code').addEventListener('keydown', (e) => {
        if(e.key === 'Enter') document.getElementById('dev-submit').click();
    });

    document.body.style.overflow = 'hidden';
    return true; // Gate is active
}

function initApp() {
    if (applyUnderConstructionGate()) return;
    
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

    // Initialize Countdowns
    startCountdown('virtual-timer', '2026-06-10T00:00:00');
    startCountdown('summit-timer', '2026-10-20T00:00:00');

    // Global Scroll Reveal
    initGlobalReveal();
}

function initGlobalReveal() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-luxury, .reveal-stagger').forEach(el => revealObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();

    // Setup SPA-like View Transitions
    setupViewTransitions();
});

function setupViewTransitions() {
    document.body.addEventListener('click', async (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        // Ensure same origin, not a target="_blank", and not a # anchor
        if (link.host === window.location.host && !link.hasAttribute('target') && !link.href.includes('#')) {
            e.preventDefault();
            const targetUrl = link.href;

            if (!document.startViewTransition) {
                window.location.href = targetUrl;
                return;
            }

            try {
                const response = await fetch(targetUrl);
                if (!response.ok) throw new Error('Fetch failed');
                const htmlTemplate = await response.text();

                document.startViewTransition(() => {
                    const newDocument = new DOMParser().parseFromString(htmlTemplate, 'text/html');
                    document.title = newDocument.title;
                    document.body.innerHTML = newDocument.body.innerHTML;
                    
                    window.history.pushState(null, '', targetUrl);
                    window.scrollTo(0, 0);

                    // Re-initialize scripts & DOM components
                    initApp();
                });
            } catch (err) {
                console.error("View Transition Failed:", err);
                window.location.href = targetUrl;
            }
        }
    });

    window.addEventListener('popstate', async () => {
        window.location.reload(); // Simple fallback for back button
    });
}

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

        const daysEl = container.querySelector('.days');
        if(daysEl) daysEl.innerText = d.toString().padStart(2, '0');
        
        const hoursEl = container.querySelector('.hours');
        if(hoursEl) hoursEl.innerText = h.toString().padStart(2, '0');
        
        const minEl = container.querySelector('.minutes');
        if(minEl) minEl.innerText = m.toString().padStart(2, '0');
        
        const secEl = container.querySelector('.seconds');
        if(secEl) secEl.innerText = s.toString().padStart(2, '0');
    };

    setInterval(update, 1000);
    update();
}

function animateNumbers(el) {
    const target = parseInt(el.innerText.replace(/[^0-9]/g, ''));
    if(isNaN(target)) return;
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
