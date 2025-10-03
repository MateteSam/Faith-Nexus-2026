import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { HospitalityDropdown } from '@/components/HospitalityDropdown';
import { RegisterButton } from '@/components/RegisterButton';
import { SearchDialog } from '@/components/SearchDialog'; // Re-enabled

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search dialog
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/images/logo.png";
    img.onload = () => setLogoLoaded(true);
  }, []);
 
  useEffect(() => {
    const path = location.pathname;
    console.log('Navigation: Current pathname', path); // Log current path
    if (path === '/programme') setActiveItem('Programme');
    else if (path === '/faith-nexus') setActiveItem('Faith Nexus');
    else if (path === '/partnership') setActiveItem('Partnerships');
    else if (path === '/register') setActiveItem('Register Now');
    else if (path === '/faqs') setActiveItem('FAQs'); // Added for FAQ page
    else setActiveItem('Home');
    console.log('Navigation: Active item set to', activeItem);
  }, [location.pathname, activeItem]);
 
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Faith Nexus', to: '/faith-nexus' },
    { label: 'Programme', to: '/programme' },
    { label: 'Partnerships', to: '/partnership' },
    { label: 'FAQs', to: '/faqs' }, // Updated FAQs link
  ];

  const handleNavClick = (item: any) => {
    console.log('Navigation: handleNavClick called with item', item); // Log item
    if (item.isScroll) {
      const element = document.getElementById('registration-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <> {/* Added React.Fragment to wrap multiple top-level elements */}
      <nav className="bg-blue-900/90 backdrop-blur-md border-b border-blue-700/50 shadow-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMTAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzIwNDA5MDIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              {!logoLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
              )}
              <img
                src="/images/logo.png"
                alt="Faith Nexus Logo"
                className={`h-10 w-auto sm:h-12 transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
              />
            </div>
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-white">FAITH</span>
              <span className="text-yellow-300 ml-1">NEXUS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((nav) => (
                <Link
                  key={nav.label}
                  to={nav.to}
                  onClick={() => {
                    setActiveItem(nav.label);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:bg-blue-500/50 ${
                    nav.label === activeItem
                      ? "text-white bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.5)] font-semibold"
                      : "text-blue-100"
                  }`}
                >
                  <span className={nav.label === activeItem ? "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-200 after:to-white after:rounded-full" : ""}>
                    {nav.label}
                  </span>
                </Link>
              ))}
              <HospitalityDropdown />
              <RegisterButton size="sm" className="ml-2" />
            </div>
          </div>

          {/* Search and Mobile menu button */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-500/50" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-blue-500/50"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-400/30 bg-blue-700/95 backdrop-blur-md rounded-b-lg shadow-xl">
              {navItems.map((nav) => (
                <Link
                  key={nav.label}
                  to={nav.to}
                  onClick={() => {
                    setActiveItem(nav.label);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-all duration-300 hover:bg-blue-500/50 ${
                    nav.label === activeItem
                      ? "text-white bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.5)] font-semibold"
                      : "text-blue-100"
                  }`}
                >
                  {nav.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <HospitalityDropdown isMobile onClose={() => setIsMenuOpen(false)} />
              </div>
              <div className="px-3 py-2">
                <RegisterButton size="sm" className="w-full h-10 text-sm font-semibold" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
  </>
  );
};
