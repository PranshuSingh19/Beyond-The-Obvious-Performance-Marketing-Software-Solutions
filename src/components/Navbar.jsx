import { useState, useEffect } from 'react';
import logoImg from '../assets/logo-s.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'clients', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About Us', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Clients', href: 'clients' },
    { label: 'Contact Us', href: 'contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    // <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-glow-purple-sm' : 'bg-transparent'}`}>
    <nav className="relative top-0 left-0 right-0 z-50 transition-all duration-500" style={{ background: '#F8F7FF', borderBottom: '1px solid rgba(83,16,91,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-24">

          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Beyond The Obvious"
              className="h-12 sm:h-20 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href;
              return (
                <button key={href} onClick={() => scrollTo(href)}
                  className="relative px-4 py-2 font-medium rounded-lg transition-all duration-300"
                  style={{ color: isActive ? '#53105B' : '#6B6B7A', fontSize: '1rem' }}>
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #53105B, #8B1A9A)' }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => scrollTo('contact')}
              className="magnetic-btn relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden group"
              style={{ fontSize: '1rem', background: 'linear-gradient(135deg, #53105B, #8B1A9A)', boxShadow: '0 4px 16px rgba(83,16,91,0.35)' }}>
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #8B1A9A, #53105B)' }} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.15)' }} aria-label="Toggle menu">
            {menuOpen ? (
              <svg className="w-5 h-5" style={{ color: '#1A1A2E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" style={{ color: '#6B6B7A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-1 border-t" style={{ background: '#F8F7FF', borderColor: 'rgba(83,16,91,0.1)' }}>
          {navLinks.map(({ label, href }) => (
            <button key={href} onClick={() => scrollTo(href)}
              className="w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200"
              style={{
                color: activeSection === href ? '#53105B' : '#6B6B7A',
                background: activeSection === href ? 'rgba(83,16,91,0.06)' : 'transparent',
              }}>
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="w-full py-3 rounded-xl text-sm font-semibold text-white mt-2"
            style={{ background: 'linear-gradient(135deg, #53105B, #8B1A9A)' }}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
