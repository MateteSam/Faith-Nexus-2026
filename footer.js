export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <a href="/" class="footer-logo">
                        <img src="/logo.png" alt="Faith Nexus">
                    </a>
                    <p style="color: var(--text-secondary); margin-top: 20px;">
                        Raising, resourcing and releasing a generation of Spirit-filled content creators to disciple nations.
                    </p>
                </div>
                <div class="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/about.html">What is Faith Nexus?</a></li>
                        <li><a href="/summit.html">Programme Overview</a></li>
                        <li><a href="/virtual.html">Virtual Activation</a></li>
                        <li><a href="/registration.html">Registration & Tickets</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Initiatives</h4>
                    <ul>
                        <li><a href="/faithnexus100.html">FaithNexus100</a></li>
                        <li><a href="/covenant.html">Covenant Conversations</a></li>
                        <li><a href="/exhibition.html">Industry Exhibition</a></li>
                        <li><a href="/pitches.html">Kingdom Pitch Challenge</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/partners.html">Partners & Sponsors</a></li>
                        <li><a href="/hospitality.html">Travel & Hospitality</a></li>
                        <li><a href="/faq.html">FAQ</a></li>
                        <li><a href="/contact.html">Contact Us</a></li>
                        <li><a href="/legal.html">Legal & Policies</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 Faith Nexus. All Rights Reserved. Hosted by <a href="https://wcccs.africa" style="color: var(--primary-gold); text-decoration: none;">WCCCS</a>.
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}
