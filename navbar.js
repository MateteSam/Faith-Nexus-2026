export function renderNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-content">
            <a href="/" class="logo">
                <img src="/logo.png" alt="Faith Nexus Logo">
            </a>
            
            <!-- Mobile Toggle -->
            <button class="mobile-toggle" aria-label="Toggle Menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <div class="nav-links">
                <a href="/">Home</a>
                
                <div class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">Vision <span class="caret">▾</span></a>
                    <div class="dropdown-content">
                        <a href="/about.html">About</a>
                        <a href="/covenant.html">Covenant</a>
                        <a href="/faithnexus100.html">FN100</a>
                        <a href="/partners.html">Partners</a>
                    </div>
                </div>

                <div class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">The Summit <span class="caret">▾</span></a>
                    <div class="dropdown-content">
                        <a href="/summit.html">Programme</a>
                        <a href="/speakers.html">Speakers</a>
                        <a href="/hospitality.html">Travel & Hospitality</a>
                        <a href="/faq.html">FAQ</a>
                        <a href="/contact.html">Contact</a>
                    </div>
                </div>

                <div class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">Opportunities <span class="caret">▾</span></a>
                    <div class="dropdown-content">
                        <a href="/creators.html">Creators</a>
                        <a href="/exhibition.html">Exhibition</a>
                        <a href="/pitches.html">Pitches</a>
                        <a href="/media.html">Media & Resources</a>
                    </div>
                </div>

                <a href="/virtual.html">Virtual Activation</a>
                <a href="/registration.html" class="btn btn-primary" style="padding: 8px 16px; margin-left: 20px;">Tickets</a>
            </div>
        </div>
    `;

    document.body.prepend(nav);

    // Mobile Menu Logic
    const toggle = nav.querySelector('.mobile-toggle');
    const links = nav.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('mobile-active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when a link is clicked
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                links.classList.remove('mobile-active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}
