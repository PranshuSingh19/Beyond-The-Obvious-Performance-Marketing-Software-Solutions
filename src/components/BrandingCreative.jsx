/**
 * Branding & Creative Solutions
 * Responsive at 1024 / 992 / 768 / 400
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'AI-Powered Customer Personalization Solutions',
    desc: 'Deliver personalized customer experiences using AI-driven recommendations, automation, and smart engagement tools that adapt to each user in real time.',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="6" height="6" /><rect x="2" y="2" width="20" height="20" rx="2" /><line x1="9" y1="2" x2="9" y2="6" /><line x1="15" y1="2" x2="15" y2="6" /><line x1="9" y1="18" x2="9" y2="22" /><line x1="15" y1="18" x2="15" y2="22" /><line x1="2" y1="9" x2="6" y2="9" /><line x1="2" y1="15" x2="6" y2="15" /><line x1="18" y1="9" x2="22" y2="9" /><line x1="18" y1="15" x2="22" y2="15" /></svg>),
    from: { x: -80, y: 0 },
  },
  {
    num: '02',
    title: 'Brand Strategy & Market Positioning',
    desc: 'Develop a powerful brand identity that connects with your audience and differentiates your business in the market with clarity and conviction.',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
    from: { x: 80, y: 0 },
  },
  {
    num: '03',
    title: 'Creative Visual Design Services',
    desc: 'Professional visual designs that enhance brand communication across digital, print, and marketing platforms — crafted to captivate and convert.',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>),
    from: { x: -80, y: 0 },
  },
  {
    num: '04',
    title: 'Logo Design, Brand Identity & Guidelines',
    desc: 'Create memorable brand identities with professional logos, color systems, and consistent visual guidelines that build recognition and trust.',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>),
    from: { x: 80, y: 0 },
  },
];

const BrandingCreative = () => {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const cardRefs   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
        }
      );

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const { x } = services[i].from;
        gsap.fromTo(card,
          { opacity: 0, x, scale: 0.92 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 87%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="branding-creative"
      ref={sectionRef}
      className="bc-section relative overflow-hidden"
      style={{ background: '#F8F7FF', paddingTop: 'clamp(3rem, 6vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 8rem)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="h-px w-full absolute top-0"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(83,16,91,.3),transparent)' }} />

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute rounded-full bc-ring-lg"
          style={{ border: '1px solid rgba(83,16,91,.08)', animation: 'spin 40s linear infinite' }} />
        <div className="absolute rounded-full bc-ring-md"
          style={{ border: '1px dashed rgba(83,16,91,.1)', animation: 'spin 25s linear infinite reverse' }} />
        <div className="absolute rounded-full bc-ring-sm"
          style={{ border: '1px solid rgba(83,16,91,.12)', animation: 'spin 15s linear infinite' }} />
        <div className="absolute w-32 h-32 rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(83,16,91,.08) 0%,transparent 70%)', filter: 'blur(20px)' }} />
      </div>

      <div className="relative z-10 site-container">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,transparent,#53105B)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-silver">Branding & Creative</span>
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#53105B,transparent)' }} />
          </div>
          <h2 className="bc-heading font-display font-black chrome-text mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 4rem)' }}>
            Branding & Creative<br /><span className="purple-text">Solutions</span>
          </h2>
          <p className="bc-subtext text-silver max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}>
            Visual identities and creative systems that make your brand impossible to ignore — built to connect, convert, and endure.
          </p>
        </div>

        {/* Cards grid */}
        <div className="bc-grid grid gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              ref={el => (cardRefs.current[i] = el)}
              className="bc-card rounded-2xl group cursor-default transition-all duration-300"
              style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,.15)', boxShadow: '0 2px 10px rgba(83,16,91,.06)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(83,16,91,.45)';
                e.currentTarget.style.boxShadow   = '0 8px 30px rgba(83,16,91,.12)';
                e.currentTarget.style.transform   = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(83,16,91,.15)';
                e.currentTarget.style.boxShadow   = '0 2px 10px rgba(83,16,91,.06)';
                e.currentTarget.style.transform   = 'translateY(0)';
              }}
            >
              <div className="bc-card-inner p-5 md:p-6 lg:p-7">
                <div className="h-0.5 w-full mb-5 rounded-full"
                  style={{ background: 'linear-gradient(90deg,#53105B,#8B1A9A,transparent)' }} />

                <div className="flex items-center gap-3 mb-3">
                  <div className="bc-icon w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(83,16,91,.08)', color: '#53105B' }}>
                    {svc.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="bc-card-title font-display font-bold chrome-text leading-tight mt-0.5"
                      style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)' }}>
                      {svc.title}
                    </h3>
                  </div>
                </div>

                <p className="bc-card-desc text-silver leading-relaxed mb-4"
                  style={{ fontSize: 'clamp(0.8rem, 1.1vw, 1rem)' }}>
                  {svc.desc}
                </p>

                <button
                  className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#8B1A9A' }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingCreative;
