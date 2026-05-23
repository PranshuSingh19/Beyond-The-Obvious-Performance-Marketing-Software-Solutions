/**
 * Software & Technology Solutions — Light Theme
 * TRUE STACKED CARDS — responsive at 1024 / 992 / 768 / 400
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
   tag: 'Web Dev',
    title: 'Custom Website Development',
    desc: 'Modern, responsive, and high-performing websites designed to strengthen your digital presence and drive business growth.',
    points: ['Responsive UI/UX Design', 'SEO-Optimized Architecture', 'High-Performance Build', 'CMS Integration'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    tag: 'Mobile Dev',
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications for iOS and Android — built for performance, usability, and seamless user experiences.',
    points: ['iOS & Android Native', 'React Native / Flutter', 'App Store Deployment', 'Push Notifications & Analytics'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    tag: 'CRM',
    title: 'CRM Development & Business Process Automation',
    desc: 'Streamline customer management, sales operations, and internal workflows with custom CRM and automation solutions.',
    points: ['Custom CRM Pipelines', 'Workflow Automation', 'Sales & Lead Tracking', 'Third-Party Integrations'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    tag: 'SaaS',
    title: 'SaaS Product Development',
    desc: 'Build scalable cloud-based SaaS platforms with secure architecture, seamless user experience, and future-ready technology.',
    points: ['Multi-Tenant Architecture', 'Subscription Billing', 'Role-Based Access Control', 'API-First Design'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    tag: 'ERP',
    title: 'ERP Solutions & Enterprise Application Development',
    desc: 'Integrated ERP systems that simplify operations, improve productivity, and centralize business management.',
    points: ['Inventory & Supply Chain', 'Finance & Accounting Modules', 'HR & Payroll Integration', 'Real-Time Dashboards'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    tag: 'AI & ML',
    title: 'AI & Intelligent Automation Solutions',
    desc: 'AI-powered applications, chatbots, and automation systems that enhance efficiency and accelerate business decisions.',
    points: ['Custom AI Models', 'Chatbot & NLP Systems', 'Predictive Analytics', 'Process Automation'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="6" height="6"/><rect x="2" y="2" width="20" height="20" rx="2"/>
        <line x1="9" y1="2" x2="9" y2="6"/><line x1="15" y1="2" x2="15" y2="6"/>
        <line x1="9" y1="18" x2="9" y2="22"/><line x1="15" y1="18" x2="15" y2="22"/>
        <line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/>
        <line x1="18" y1="9" x2="22" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/>
      </svg>
    ),
  },
  {
    tag: 'Infrastructure',
    title: 'Website Maintenance & Managed Infrastructure',
    desc: 'Reliable website support, server management, security monitoring, and performance optimization for uninterrupted operations.',
    points: ['24/7 Uptime Monitoring', 'Security Patching', 'Performance Optimization', 'Backup & Disaster Recovery'],
    icon: (
      <svg className="st-icon" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const SCROLL_PER_CARD = 800;

export default function SoftwareTech() {
  const outerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const n = CARDS.length;

    if (outerRef.current) {
      outerRef.current.style.height = `calc(100vh + ${(n - 1) * SCROLL_PER_CARD}px)`;
    }

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, {
        yPercent: i === 0 ? 0 : 110,
        scale: 1,
        opacity: 1,
        zIndex: i + 1,
      });
    });

    const ctx = gsap.context(() => {
      for (let i = 1; i < n; i++) {
        const scrollStart = (i - 1) * SCROLL_PER_CARD;
        const scrollEnd   = scrollStart + SCROLL_PER_CARD * 0.75;

        const st = {
          trigger: outerRef.current,
          start:   `top+=${scrollStart} top`,
          end:     `top+=${scrollEnd} top`,
          scrub:   1.2,
        };

        gsap.to(cardRefs.current[i], {
          yPercent: 0,
          ease: 'power2.inOut',
          scrollTrigger: st,
        });

        gsap.to(cardRefs.current[i - 1], {
          scale: 0.92,
          opacity: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: st,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="st-section" style={{ background: '#F8F7FF' }}>
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(83,16,91,.4),transparent)' }} />

      {/* Outer — tall scroll space */}
      <div ref={outerRef} className="relative">

        {/* Sticky viewport */}
        <div className="sticky top-0 w-full overflow-hidden"
          style={{ height: '100vh', background: '#F8F7FF' }}>

          <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(83,16,91,.06) 0%, transparent 70%)' }} />

          <div className="relative z-10 h-full flex flex-col st-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="st-header pt-10 pb-4 text-center flex-shrink-0">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,transparent,#8B1A9A)' }} />
                <span className="text-xs font-semibold tracking-widest uppercase text-silver">Software & Technology</span>
                <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#8B1A9A,transparent)' }} />
              </div>
              <h2 className="st-heading font-display font-black chrome-text leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 3rem)' }}>
                Software & Technology <span className="purple-text">Solutions</span>
              </h2>
              <p className="st-subtext text-silver mt-1 max-w-lg mx-auto"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.05rem)' }}>
                End-to-end technology services engineered to scale with your ambitions.
              </p>
            </div>

            {/* Card stack container */}
            <div className="flex-1 relative overflow-hidden">
              {CARDS.map((card, i) => (
                <div
                  key={card.num}
                  ref={el => (cardRefs.current[i] = el)}
                  className="st-card absolute inset-x-0 rounded-3xl overflow-hidden"
                  style={{
                    top: '50%',
                    willChange: 'transform, opacity',
                    background: '#ffffff',
                    border: '1px solid rgba(83,16,91,0.2)',
                    boxShadow: '0 8px 40px rgba(83,16,91,0.12), 0 2px 12px rgba(83,16,91,0.06)',
                  }}
                >
                  {/* Top accent — logo gradient */}
                  <div className="h-1 w-full"
                    style={{ background: 'linear-gradient(90deg, #53105B, #8B1A9A, #A0A0A0, transparent)' }} />

                  <div className="st-card-inner flex" style={{ height: 'calc(100% - 4px)' }}>

                    {/* LEFT — icon panel */}
                    <div className="st-left-panel flex-shrink-0 flex flex-col items-center justify-center gap-3"
                      style={{
                        background: 'rgba(83,16,91,0.05)',
                        borderRight: '1px solid rgba(83,16,91,0.12)',
                      }}>
                      {card.icon}
                      <span className="st-tag text-center font-bold tracking-widest uppercase px-2 py-1 rounded-full"
                        style={{ background: 'rgba(83,16,91,0.08)', color: '#53105B', border: '1px solid rgba(83,16,91,0.2)' }}>
                        {card.tag}
                      </span>
                    </div>

                    {/* RIGHT — content */}
                    <div className="st-right-panel flex-1 flex flex-col justify-center overflow-hidden">
                      <h3 className="st-card-title font-display font-black chrome-text mb-2 leading-tight">
                        {card.title}
                      </h3>
                      <p className="st-card-desc text-silver leading-relaxed mb-3">
                        {card.desc}
                      </p>
                      <ul className="st-points grid gap-y-1.5 gap-x-4">
                        {card.points.map(pt => (
                          <li key={pt} className="flex items-center gap-2 text-xs chrome-text">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                              style={{ background: 'rgba(83,16,91,0.1)', border: '1px solid rgba(83,16,91,0.25)' }}>
                              <svg className="w-2.5 h-2.5" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="flex-shrink-0 pb-4 flex items-center justify-center gap-2 opacity-40">
              <svg className="w-4 h-4 text-silver animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
              <span className="text-xs tracking-widest uppercase text-silver">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
