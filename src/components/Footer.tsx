import React from "react";
const IconButton: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({
  href,
  label,
  children
}) => <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-200 hover:bg-primary hover:text-white transition transform hover:scale-105">
    {children}
  </a>;
const Footer: React.FC = () => {
  return <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:underline">
                  About WCCCS
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#subscribe" className="hover:underline">
                  Subscribe to our newsletters
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wcccs.world/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
                  WCCCS
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" fill="currentColor" />
                    <path d="M5 5h5V3H3v7h2V5z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://nexxcampus.world/?utm_source=faithnexus&utm_medium=footer&utm_campaign=links" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
                  NexCampus
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" fill="currentColor" />
                    <path d="M5 5h5V3H3v7h2V5z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://nexstores.world/?utm_source=faithnexus&utm_medium=footer&utm_campaign=links" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
                  NexStores
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" fill="currentColor" />
                    <path d="M5 5h5V3H3v7h2V5z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://nexmagazine.world/?utm_source=faithnexus&utm_medium=footer&utm_campaign=links" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
                  Nexus Magazine
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" fill="currentColor" />
                    <path d="M5 5h5V3H3v7h2V5z" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="pt-2">
                Email: <a href="mailto:info@faithnexus.org" className="hover:underline">info@faithnexus.org</a>
              </li>
              <li>
                Phone: <a href="tel:+0000000000" className="hover:underline">+27689313745</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              <IconButton href="https://facebook.com" label="Facebook">
                {/* Facebook SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.99 22 12z" fill="currentColor" />
                </svg>
              </IconButton>

              <IconButton href="https://twitter.com" label="Twitter">
                {/* Twitter SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M19 7.5c.013.18.013.362.013.543 0 5.547-4.222 11.934-11.934 11.934A11.86 11.86 0 0 1 2 18.6a8.306 8.306 0 0 0 6.122-1.698 4.156 4.156 0 0 1-3.875-2.877c.647.099 1.255.099 1.902-.05A4.146 4.146 0 0 1 4.2 9.37v-.05c.563.312 1.217.494 1.9.518a4.14 4.14 0 0 1-1.857-3.456c0-.77.205-1.49.563-2.113a11.773 11.773 0 0 0 8.556 4.335c-.061-.305-.099-.612-.099-.918A4.142 4.142 0 0 1 18.06 5.14a8.3 8.3 0 0 0 2.54-.973 4.154 4.154 0 0 1-1.822 2.288 8.273 8.273 0 0 0 2.375-.636 8.634 8.634 0 0 1-2.073 2.148z" fill="currentColor" />
                </svg>
              </IconButton>

              <IconButton href="https://youtube.com" label="YouTube">
                {/* YouTube SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M23.498 6.186a2.91 2.91 0 0 0-2.048-2.056C19.663 3.5 12 3.5 12 3.5s-7.663 0-9.45.63A2.91 2.91 0 0 0 .502 6.186 30.6 30.6 0 0 0 0 12a30.6 30.6 0 0 0 .502 5.814 2.91 2.91 0 0 0 2.048 2.056c1.787.63 9.45.63 9.45.63s7.663 0 9.45-.63a2.91 2.91 0 0 0 2.048-2.056A30.6 30.6 0 0 0 24 12a30.6 30.6 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="currentColor" />
                </svg>
              </IconButton>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between">
          <div>© 2025 Faith Nexus</div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;