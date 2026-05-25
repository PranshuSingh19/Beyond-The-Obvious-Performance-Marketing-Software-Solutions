import logoImg from '../assets/brand-logo.png';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    // { label: 'Clients', id: 'clients' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const allServices = [
    'Performance Marketing',
    'Lead Generation & Customer Acquisition',
    'Social Media Marketing',
    'Conversion Rate Optimization',
    'ROI-Driven Advertising',
    'Marketing Analytics',
    'Google & Meta Ads',
    'Brand Strategy & Identity',
    'Custom Website Development',
    'AI & Intelligent Automation',
    'CRM & Business Automation',
    'SaaS Product Development',
    'Mobile App Development',
    'ERP Solution',
    'Website Maintenance',
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: '#F8F7FF' }}>
      {/* Top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(83,16,91,0.4), transparent)' }} />

      {/* CTA Banner */}
      <div className="relative py-16 px-4 overflow-hidden"
        style={{ background: '#F8F7FF' }}>
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(83,16,91,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.2)', boxShadow: '0 2px 10px rgba(83,16,91,0.08)' }}>
            {/* <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: '#8B1A9A' }} /> */}
            <span className="text-xs font-semibold text-silver tracking-wider">Now Accepting New Clients</span>
          </div>
          <h3 className="font-display font-black text-2xl md:text-4xl chrome-text mb-3">
            Ready to Work with Freelancer's Brain?
          </h3>
          <p className="text-silver mb-8 max-w-xl mx-auto">
            Join 150+ brands that trust us to build, grow, and transform their business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/971568393710?text=Hello%20Team,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-8 py-4 rounded-xl font-bold text-sm text-white flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
              boxShadow: '0 4px 20px rgba(83,16,91,0.35)'
            }}
          >
            Chat on WhatsApp
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
            <a href="tel:+91 9630916536"
              className="px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2"
              style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.2)', boxShadow: '0 2px 10px rgba(83,16,91,0.06)', color: '#1A1A2E' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.5)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(83,16,91,0.12)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.2)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(83,16,91,0.06)'; }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 9630916536
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="site-container py-16" style={{ borderTop: '1px solid rgba(83,16,91,0.1)' }}>
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Brand column — right border on desktop, bottom border on mobile */}
          <div className="flex-shrink-0 lg:w-56 flex flex-col items-center text-center lg:pr-10 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: 'rgba(83,16,91,0.12)' }}>

            <button onClick={() => scrollTo('home')} className="flex items-center justify-center mb-5 group">
              <img
                src={logoImg}
                alt="Freelancer's Brain"
                className="h-40 w-auto object-contain"
              />
            </button>
            <p className="text-sm text-silver leading-relaxed mb-6">
              A full-spectrum technology and growth company built for businesses that refuse to settle.
            </p>
            {/* Social */}
            {/* <div className="flex gap-3 justify-center">
              {[
                { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.15)', color: '#6B6B7A' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.5)'; e.currentTarget.style.color = '#53105B'; e.currentTarget.style.background = 'rgba(83,16,91,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.15)'; e.currentTarget.style.color = '#6B6B7A'; e.currentTarget.style.background = '#ffffff'; }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={path} /></svg>
                </a>
              ))}
            </div> */}
          </div>

          {/* Links columns — equal split of remaining space */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10">

            {/* Quick Links */}
            <div className="flex flex-col items-start text-left sm:items-center sm:text-center">
              <h4 className="font-semibold chrome-text text-xs uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)}
                      className="text-sm text-silver hover:text-chrome transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#53105B' }} />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services — first half */}
            <div className="flex flex-col items-start text-left">
              <h4 className="font-semibold chrome-text text-xs uppercase tracking-widest mb-5">Our Services</h4>
              <ul className="space-y-3">
                {allServices.slice(0, Math.ceil(allServices.length / 2)).map((s) => (
                  <li key={s}>
                    <button onClick={() => scrollTo('services')}
                      className="text-sm text-silver hover:text-chrome transition-colors duration-200 flex items-center gap-2 text-left">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#53105B' }} />
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services — second half */}
            <div className="flex flex-col items-start text-left">
              {/* <h4 className="font-semibold chrome-text text-xs uppercase tracking-widest mb-5 invisible">Our Services</h4> */}
              <ul className="space-y-3">
                {allServices.slice(Math.ceil(allServices.length / 2)).map((s) => (
                  <li key={s}>
                    <button onClick={() => scrollTo('services')}
                      className="text-sm text-silver hover:text-chrome transition-colors duration-200 flex items-center gap-2 text-left">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#53105B' }} />
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(83,16,91,0.08)' }}>
        <div className="site-container py-5 text-center items-center justify-between gap-3">
          <p className="text-xs text-silver">
            © {new Date().getFullYear()} Freelancer's Brain. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
