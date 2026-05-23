import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'software',
    title: 'Software & Technology Solutions',
    subtitle: 'Custom Development · SaaS · ERP · AI',
    color: 'rgba(83,16,91,0.06)',
    accent: '#8B1A9A',
    items: [
      'Custom Website Development',
      'CRM Development & Business Process Automation',
      'SaaS Product Development',
      'ERP Solutions & Enterprise Application Development',
      'AI & Intelligent Automation Solutions',
      'Website Maintenance & Managed Infrastructure Services',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    title: 'Growth Marketing Solutions',
    subtitle: 'Performance · Lead Gen · Google · Meta',
    color: 'rgba(83,16,91,0.06)',
    accent: '#7B1A8A',
    items: [
      'Performance Marketing Campaign Management',
      'Lead Generation & Customer Acquisition Services',
      'Google Ads & Meta Advertising Management',
      'Social Media Marketing & Brand Engagement',
      'Conversion Rate Optimization (CRO)',
      'ROI-Driven Advertising & Growth Strategy',
      'Marketing Analytics & Performance Reporting',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    id: 'branding',
    title: 'Branding & Creative Solutions',
    subtitle: 'Brand Strategy · Visual Design · Identity',
    color: 'rgba(83,16,91,0.06)',
    accent: '#6B0A7A',
    items: [
      'AI-Powered Customer Personalization Solutions',
      'Brand Strategy & Market Positioning',
      'Creative Visual Design Services',
      'Logo Design, Brand Identity & Guidelines',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'workforce',
    title: 'Workforce & IT Staffing Solutions',
    subtitle: 'Back Office · Field Support · On-Demand IT',
    color: 'rgba(83,16,91,0.06)',
    accent: '#5B0A6A',
    items: [
      'Back Office Operations Support Services',
      'Field Workforce Support Services',
      'Dedicated Developers & IT Professionals On Demand',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const ToggleIcon = ({ expanded }) => (
  <svg
    className="w-4 h-4 transition-transform duration-300"
    style={{ transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)', color: '#1A1A2E' }}
    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ChevronRight = ({ color }) => (
  <svg className="w-3 h-3 flex-shrink-0 mt-0.5" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="services-card relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500"
      style={{
        background: expanded
          ? 'linear-gradient(135deg, rgba(83,16,91,0.08) 0%, #ffffff 100%)'
          : '#ffffff',
        border: expanded ? `1px solid ${service.accent}` : '1px solid rgba(83,16,91,0.12)',
        boxShadow: expanded ? `0 8px 40px rgba(83,16,91,0.15)` : '0 2px 12px rgba(83,16,91,0.06)',
      }}
      onMouseEnter={(e) => { if (!expanded) { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.35)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(83,16,91,0.12)'; } }}
      onMouseLeave={(e) => { if (!expanded) { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.12)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(83,16,91,0.06)'; } }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }} />

      <div className="services-card-inner p-5 md:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest mt-1 flex-shrink-0" style={{ color: service.accent }}>
                     </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <div className="services-icon p-2 rounded-xl flex-shrink-0" style={{ background: 'rgba(83,16,91,0.08)', color: '#53105B' }}>
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="services-card-title font-display font-bold chrome-text leading-tight">{service.title}</h3>
                  <p className="services-card-subtitle text-xs text-silver mt-0.5">{service.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ background: expanded ? service.accent : 'rgba(83,16,91,0.08)' }}
          >
            <ToggleIcon expanded={expanded} />
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[500px] mt-5' : 'max-h-0'}`}>
          <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${service.accent}60, transparent)` }} />
          <ul className="space-y-2">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-silver">
                <ChevronRight color={service.accent} />
                <span className="services-item-text">{item}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-2 text-white"
            style={{ background: `linear-gradient(135deg, #53105B, #8B1A9A)`, border: `1px solid ${service.accent}` }}
            onClick={(e) => { e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Discuss This Service
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' });
      const cards = cardsRef.current?.querySelectorAll('.service-card-item');
      if (cards) gsap.from(cards, { opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    }, sectionRef);
    return () => ctx.revert();
  }, [revealed]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section relative overflow-hidden"
      style={{ background: '#F8F7FF', paddingTop: 'clamp(3rem, 6vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 8rem)' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(83,16,91,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(83,16,91,0.2), transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(83,16,91,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #53105B)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-silver">Our Services</span>
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #53105B, transparent)' }} />
          </div>
          <h2 className="services-heading font-display font-black chrome-text mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 4rem)' }}>
            Four Pillars of<br /><span className="purple-text">Transformative Growth</span>
          </h2>
          <p className="services-subtext text-silver max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}>
            Everything your business needs to build, grow, and dominate — under one roof.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="services-grid grid gap-4 md:gap-5">
          {services.map((service) => (
            <div key={service.id} className="service-card-item">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
