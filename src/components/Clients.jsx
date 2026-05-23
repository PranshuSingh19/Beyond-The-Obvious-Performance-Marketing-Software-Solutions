import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clientBrands = [
  'Ganga Fashions', 'Heritage', 'House of Mira', 'House of Pinks', 'IDRA Wellness',
  'Label Sugar', 'Lil Drama', 'Little Millennium', 'Mahee Jaipur', 'Maitri Jaipur',
  'Munns & Mars', 'Novelty', 'Perfect Optics', 'Pure Asia', 'Raichura',
  'Reroute', 'Rivaa', 'RJDX', 'Saanjh', 'SAVA',
  'Shailja', 'SheSo', 'Siara Women', 'Siya Fashion', 'Squickmons',
  'Steple Jeans', 'Sukruti', 'Takshashila', 'The Clothing Therapy', 'Ultreze',
  'VastraRaag', 'Wonder ALU', 'Yell', 'Yuvani', 'APNY',
  'ARFL', 'Armur', 'Autumn Lane', 'Big Bunny', 'Bombay Bloom',
];

/* ── Icons ── */
const icons = {
  fashion: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" /></svg>,
  optics:  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>,
  rocket:  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
  diamond: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9 6 3z" /><path d="M11 3L8 9l4 13 4-13-3-6" /><line x1="2" y1="9" x2="22" y2="9" /></svg>,
  flower:  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  star:    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
};

const projectCards = [
  { brand: 'Ganga Fashions', category: 'Fashion E-commerce', metric: '4.2x ROAS',       detail: 'Scaled Meta Ads from ₹50K to ₹5L/month',                       icon: icons.fashion },
  { brand: 'Perfect Optics', category: 'Retail & Eyewear',   metric: '+55% Revenue',    detail: 'Multi-channel strategy across Meta, Google & WhatsApp',         icon: icons.optics  },
  { brand: 'Reroute',        category: 'Lifestyle Brand',     metric: '3x Growth',       detail: 'Turned stagnant ads into a 3x monthly growth engine',           icon: icons.rocket  },
  { brand: 'Siara Women',    category: "Women's Fashion",     metric: '+40% Repeat',     detail: 'Email automation drove 40% boost in repeat purchases',          icon: icons.diamond },
  { brand: 'Bombay Bloom',   category: 'Lifestyle & Wellness',metric: '3x Revenue',      detail: '360° approach tripled monthly revenue in 8 months',            icon: icons.flower  },
  { brand: 'APNY',           category: 'D2C Brand',           metric: '18mo Partnership',detail: 'Long-term PPC excellence with phenomenal results',              icon: icons.star    },
];

const testimonials = [
  { name: 'Aadesh S.',  role: 'Owner, APNY',           initials: 'AS', text: "Their team excels at finding solutions through detailed research. We've worked with them for over 18 months and admire their ability to think from the customer's perspective." },
  { name: 'Parth D.',   role: 'Founder, Reroute',      initials: 'PD', text: 'When we first approached them, our sales were stagnant. Their multi-channel strategy turned things around, driving 3x growth per month. Truly impressive results!' },
  { name: 'Bhavesh S.', role: 'Owner, Perfect Optics', initials: 'BS', text: 'By combining Meta, Google, email, and WhatsApp strategies, they drove a 55% revenue spike. Their campaigns are fresh, creative, and results-focused.' },
  { name: 'Surabhi J.', role: 'Founder, Siara Women',  initials: 'SJ', text: 'Within just six weeks, we saw a 40% boost in repeat purchases. They take great care in personalizing every email to make our customers feel special.' },
];

/* ── Result card (light theme) ── */
const ResultCard = ({ card }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const handleMouseLeave = () => {
    setHovered(false);
    cardRef.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div ref={cardRef}
      className="tilt-card rounded-2xl overflow-hidden cursor-pointer w-full"
      style={{
        background: hovered ? 'linear-gradient(135deg, rgba(83,16,91,0.07) 0%, #ffffff 100%)' : '#ffffff',
        border: hovered ? '1px solid rgba(83,16,91,0.45)' : '1px solid rgba(83,16,91,0.14)',
        transition: 'transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 16px 48px rgba(83,16,91,0.14)' : '0 4px 16px rgba(83,16,91,0.07)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}>

      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #53105B, #8B1A9A, transparent)' }} />
      <div className="p-5 md:p-6">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: 'rgba(83,16,91,0.08)', color: '#53105B' }}>
          {card.icon}
        </div>
        <div className="font-semibold tracking-widest uppercase mb-1"
          style={{ color: '#8B1A9A', fontSize: 'clamp(0.65rem, 1vw, 0.75rem)' }}>
          {card.category}
        </div>
        <h4 className="font-display font-bold mb-2" style={{ color: '#1A1A2E', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
          {card.brand}
        </h4>
        <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: hovered ? '120px' : '52px' }}>
          <div className="font-black mb-2 purple-text" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}>
            {card.metric}
          </div>
          <p className="leading-relaxed" style={{ color: '#6B6B7A', fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)' }}>
            {card.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Main component ── */
const Clients = () => {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const [page, setPage]         = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* detect mobile — 1 card per page on <640px, 2 on larger */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cardsPerPage = isMobile ? 1 : 2;
  const totalPages   = Math.ceil(testimonials.length / cardsPerPage);

  const goTo = (p) => setPage(Math.max(0, Math.min(p, totalPages - 1)));

  /* reset page when layout changes */
  useEffect(() => { setPage(0); }, [cardsPerPage]);

  /* auto-advance every 5 s */
  useEffect(() => {
    const t = setInterval(() => setPage((prev) => (prev + 1) % totalPages), 5000);
    return () => clearInterval(t);
  }, [totalPages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const marqueeItems = [...clientBrands, ...clientBrands];

  return (
    <section id="clients" ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#F8F7FF' }}>

      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(83,16,91,0.25), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div ref={headerRef} className={`text-center mb-16 reveal-up ${revealed ? 'visible' : ''}`}>
          <h2 className="font-display font-black chrome-text mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4.25rem)' }}>
            150+ Brands That<br /><span className="purple-text">Trust Our Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#6B6B7A', fontSize: 'clamp(1rem, 1.4vw, 1.35rem)' }}>
            From fashion to fintech, we've scaled brands across every industry.
          </p>
        </div>

        {/* ── Featured Results — responsive grid ── */}
        <div className="mb-24">
          <h3 className={`font-display font-bold chrome-text mb-8 reveal-up ${revealed ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)', transitionDelay: '0.15s' }}>
            Featured Results
          </h3>
          {/* Grid: 1 col mobile → 2 col sm → 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectCards.map((card, i) => <ResultCard key={i} card={card} />)}
          </div>
        </div>

        {/* ── Testimonials slider ── */}
        <div className={`reveal-up ${revealed ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
          <h3 className="font-display font-bold chrome-text mb-10 text-center"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)' }}>
            What Our Clients Say
          </h3>

          {/* Clip window */}
          <div style={{ overflow: 'hidden', borderRadius: '1rem' }}>
            {/* Sliding track */}
            <div
              style={{
                display: 'flex',
                width: `${totalPages * 100}%`,
                transform: `translateX(${(-page * 100) / totalPages}%)`,
                transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div
                  key={pageIdx}
                  style={{
                    width: `${100 / totalPages}%`,
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'stretch',
                    padding: '0 2px 4px',
                  }}
                >
                  {testimonials.slice(pageIdx * cardsPerPage, pageIdx * cardsPerPage + cardsPerPage).map((t) => (
                    <div
                      key={t.name}
                      style={{
                        flex: '1 1 0',
                        minWidth: 0,
                        background: '#ffffff',
                        border: '1px solid rgba(83,16,91,0.14)',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 24px rgba(83,16,91,0.07)',
                        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* top accent */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                        background: 'linear-gradient(90deg, #53105B, #8B1A9A, transparent)',
                      }} />

                      {/* quote mark */}
                      <svg style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', width: '2.5rem', height: '2.5rem', opacity: 0.07, color: '#53105B' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      {/* stars */}
                      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} style={{ width: '1rem', height: '1rem' }} fill="#8B1A9A" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>

                      {/* quote text */}
                      <blockquote style={{
                        color: '#1A1A2E',
                        fontSize: 'clamp(0.875rem, 1.2vw, 1.1rem)',
                        lineHeight: 1.75,
                        marginBottom: '1.5rem',
                        fontWeight: 400,
                      }}>
                        "{t.text}"
                      </blockquote>

                      {/* author */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '2.75rem', height: '2.75rem', borderRadius: '0.625rem',
                          background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 900, fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', color: '#ffffff', flexShrink: 0,
                        }}>
                          {t.initials}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', color: '#1A1A2E' }}>{t.name}</div>
                          <div style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)', color: '#6B6B7A' }}>{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginTop: '2rem' }}>
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              style={{
                width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: page === 0 ? '#f0eef8' : '#ffffff',
                border: '1.5px solid rgba(83,16,91,0.2)',
                color: page === 0 ? '#b0a8c0' : '#53105B',
                cursor: page === 0 ? 'not-allowed' : 'pointer',
                boxShadow: page === 0 ? 'none' : '0 2px 10px rgba(83,16,91,0.1)',
                transition: 'all 0.2s ease',
              }}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  style={{
                    borderRadius: '9999px',
                    height: '8px',
                    width: i === page ? '24px' : '8px',
                    background: i === page ? '#8B1A9A' : 'rgba(83,16,91,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }} />
              ))}
            </div>

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              style={{
                width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: page === totalPages - 1 ? '#f0eef8' : '#ffffff',
                border: '1.5px solid rgba(83,16,91,0.2)',
                color: page === totalPages - 1 ? '#b0a8c0' : '#53105B',
                cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
                boxShadow: page === totalPages - 1 ? 'none' : '0 2px 10px rgba(83,16,91,0.1)',
                transition: 'all 0.2s ease',
              }}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
