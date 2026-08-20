export function renderFooter() {
    if (document.querySelector('footer.pdf-footer')) return;

    const footer = document.createElement('footer');
    footer.className = 'pdf-footer';
    footer.innerHTML = `
        <div class="container">
            <div class="pdf-footer-grid">
                <div class="footer-col-brand">
                    <img src="/fn-logo-full.png" alt="Faith Nexus" class="footer-logo-img" style="height: 42px; margin-bottom: 1rem;">
                    <p class="footer-tagline">Kingdom Voices. Global Reach.</p>
                    <p class="footer-subtext">
                        Africa’s convergence platform for Faith, Media, Technology, Leadership and Culture.
                    </p>
                    <p class="footer-event-date">
                        14–16 April 2027 &middot; Johannesburg, South Africa
                    </p>
                </div>

                <div class="footer-col">
                    <h4 class="footer-heading">Explore</h4>
                    <ul class="footer-links">
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/summit.html">Programme</a></li>
                        <li><a href="/covenant.html">Experiences</a></li>
                        <li><a href="/covenant.html">Covenant Conversations</a></li>
                        <li><a href="/creators.html">Creators</a></li>
                        <li><a href="/faithnexus100.html">FN100</a></li>
                        <li><a href="/about.html#leadership">Leadership</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-heading">Get Involved</h4>
                    <ul class="footer-links">
                        <li><a href="/registration.html">Register</a></li>
                        <li><a href="/partners.html">Partner</a></li>
                        <li><a href="/exhibition.html">Exhibit</a></li>
                        <li><a href="/media.html">Media</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-heading">Information</h4>
                    <ul class="footer-links">
                        <li><a href="/virtual.html">Soft Launch</a></li>
                        <li><a href="/faq.html">FAQ</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="pdf-footer-bottom">
                <div class="footer-convened">
                    Convened by <strong>World Christian Content Creators Summit &mdash; WCCCS</strong> (<a href="https://www.wcccs.io" target="_blank" rel="noopener">www.wcccs.io</a>)
                </div>
                <div class="footer-socials">
                    <a href="#">LinkedIn</a> &middot; 
                    <a href="#">Instagram</a> &middot; 
                    <a href="#">YouTube</a> &middot; 
                    <a href="#">Facebook</a>
                </div>
                <div class="footer-legal">
                    <span>&copy; 2027 Faith Nexus</span> &middot; 
                    <a href="/legal.html">Privacy</a> &middot; 
                    <a href="/legal.html">Terms</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

