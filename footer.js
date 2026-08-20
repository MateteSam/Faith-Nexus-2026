export function renderFooter() {
    if (document.querySelector('footer.pdf-footer')) return;

    const footer = document.createElement('footer');
    footer.className = 'pdf-footer';
    footer.innerHTML = `
        <div class="container">
            <div class="pdf-footer-3col">
                <div>
                    <div class="footer-brand-text">FAITH NEXUS</div>
                    <div class="footer-tagline-text">Kingdom Voices. Global Reach.</div>
                </div>

                <div class="footer-links-row">
                    <div>
                        <a href="/about.html">About</a> &middot; 
                        <a href="/summit.html">Programme</a> &middot; 
                        <a href="/covenant.html">Experiences</a>
                    </div>
                    <div>
                        <a href="/faithnexus100.html">CW100</a> &middot; 
                        <a href="/partners.html">Partners</a> &middot; 
                        <a href="/exhibition.html">Exhibit</a> &middot; 
                        <a href="/media.html">Media</a>
                    </div>
                </div>

                <div class="footer-convened-col">
                    <div>Convened by <strong>WCCCS</strong></div>
                    <div style="color: #666666; font-size: 0.85rem;">Johannesburg, South Africa</div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}
