export function renderNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-content">
            <a href="/" class="logo">
                <img src="/logo.png" alt="Faith Nexus Logo">
            </a>
            <div class="nav-links">
                <a href="/">Home</a>
                <a href="/about.html">About</a>
                <a href="/creators.html">Creators</a>
                <a href="/covenant.html">Covenant</a>
                <a href="/exhibition.html">Exhibition</a>
                <a href="/pitches.html">Pitches</a>
                <a href="/partners.html">Partners</a>
                <a href="/faithnexus100.html">FN100</a>
                
                <div class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">Summit Info <span class="caret">▾</span></a>
                    <div class="dropdown-content">
                        <a href="/hospitality.html">Travel & Hospitality</a>
                        <a href="/speakers.html">Speakers</a>
                        <a href="/media.html">Media & Resources</a>
                        <a href="/faq.html">FAQ</a>
                        <a href="/contact.html">Contact</a>
                    </div>
                </div>

                <a href="/summit.html">Programme</a>
                <a href="/virtual.html">Virtual Activation</a>
                <div class="theme-toggle" id="theme-toggle" style="cursor: pointer; margin-left: 20px; font-size: 1.2rem;">
                    🌙
                </div>
                <a href="/registration.html" class="btn btn-primary" style="padding: 8px 16px; margin-left: 20px;">Tickets</a>
            </div>
        </div>
    `;

    document.body.prepend(nav);

    // Theme Toggle Logic
    const toggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        toggle.innerText = theme === 'light' ? '🔆' : '🌙';
    };

    setTheme(savedTheme);

    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}
