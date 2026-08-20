export function renderNavbar() {
    // Top Announcement Bar (PDF Page 1 Style)
    if (!document.querySelector('.announcement-bar')) {
        const topBar = document.createElement('div');
        topBar.className = 'announcement-bar';
        topBar.innerHTML = `
            <span>Faith Nexus 2027 Soft Launch &middot; 29 October 2026 &middot; Johannesburg &nbsp;&rarr;</span>
            <a href="/virtual.html" class="announcement-link">Explore</a>
        `;
        document.body.prepend(topBar);
    }

    // Main Navigation
    if (!document.querySelector('.navbar')) {
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        nav.innerHTML = `
            <div class="container navbar-container">
                <a href="/" class="nav-brand">
                    FAITH NEXUS
                </a>

                <ul class="nav-links">
                    <li><a href="/about.html" class="nav-link">About</a></li>
                    <li><a href="/summit.html" class="nav-link">Programme</a></li>
                    
                    <li class="nav-dropdown">
                        <a href="/covenant.html" class="nav-link dropdown-trigger">Experiences <span class="caret">▾</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/covenant.html">Covenant Conversations</a></li>
                            <li><a href="/creators.html">Creators</a></li>
                            <li><a href="/exhibition.html">Industry Exhibition</a></li>
                            <li><a href="/summit.html#workshops">Workshops & Masterclasses</a></li>
                        </ul>
                    </li>

                    <li><a href="/faithnexus100.html" class="nav-link">FN100</a></li>

                    <li class="nav-dropdown">
                        <a href="/registration.html" class="nav-link dropdown-trigger">Get Involved <span class="caret">▾</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/registration.html">Attend</a></li>
                            <li><a href="/partners.html">Partner</a></li>
                            <li><a href="/exhibition.html">Exhibit</a></li>
                            <li><a href="/media.html">Media</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="/registration.html" class="btn-pdf-black">
                            Register Interest
                        </a>
                    </li>
                </ul>

                <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;

        const topBar = document.querySelector('.announcement-bar');
        if (topBar) {
            topBar.after(nav);
        } else {
            document.body.prepend(nav);
        }

        // Mobile Menu Toggle
        const toggle = nav.querySelector('.mobile-nav-toggle');
        const links = nav.querySelector('.nav-links');

        if (toggle && links) {
            toggle.addEventListener('click', () => {
                links.classList.toggle('mobile-active');
            });
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
}


