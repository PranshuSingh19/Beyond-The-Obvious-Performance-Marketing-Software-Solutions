import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/brand-logo.png';

const CareersNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ background: '#F8F7FF', borderBottom: '1px solid rgba(83,16,91,0.1)' }}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo — goes back to home */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Freelancer's Brain"
              className="h-12 sm:h-20 w-auto object-contain"
            />
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="relative px-4 py-2 rounded-lg transition-all duration-300"
              style={{ color: '#6B6B7A' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#53105B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6B7A')}
            >
              Home
            </Link>
            <Link
              to="/careers"
              className="relative px-4 py-2 rounded-lg transition-all duration-300"
              style={{ color: '#53105B' }}
            >
              Careers
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, #53105B, #8B1A9A)' }}
              />
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/#contact')}
              className="magnetic-btn relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden group"
              style={{
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
                boxShadow: '0 4px 16px rgba(83,16,91,0.35)',
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #8B1A9A, #53105B)' }}
              />
            </button>
          </div>

          {/* Mobile: back to home */}
          <Link
            to="/"
            className="md:hidden flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-xl"
            style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.15)', color: '#53105B' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CareersNavbar;
