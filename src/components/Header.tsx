import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId.replace('#', ''));
    }
  };

  const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 md:px-10 h-20">
          
          {/* Logo - PNG with better sizing */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="KaganTech" 
              className={`h-24 w-auto transition-all duration-300 ${
                isScrolled ? 'brightness-0' : 'brightness-0 invert'
              }`}
            />
          </div>

          <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {['about', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(`#${item}`)}
                className={`relative text-sm font-medium transition-all duration-300 py-2 ${
                  isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:opacity-80'
                }`}
              >
                {item === 'contact' ? 'Connect' : item.charAt(0).toUpperCase() + item.slice(1)}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                    activeSection === item 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  } ${isScrolled ? 'bg-black' : 'bg-white'}`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.location.href = "mailto:business@kagan.tech"}
              className={`hidden md:block transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-black' 
                  : 'text-white hover:opacity-70'
              }`}
              aria-label="Send email"
            >
              <MailIcon />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-white">
          {['about', 'services', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(`#${item}`)}
              className="text-2xl font-medium hover:opacity-80 transition-opacity"
            >
              {item === 'contact' ? 'Connect' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <a 
              href="mailto:business@kagan.tech"
              className="text-gray-300 hover:text-white transition-colors"
            >
              business@kagan.tech
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}