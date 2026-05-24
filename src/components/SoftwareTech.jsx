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
      /* Browser / Web Dev — blue address bar, colorful tabs */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="56" height="44" rx="5" fill="#E8F4FD" stroke="#2196F3" strokeWidth="2"/>
        <rect x="4" y="10" width="56" height="14" rx="5" fill="#2196F3"/>
        <rect x="4" y="18" width="56" height="6" fill="#2196F3"/>
        {/* Tab dots */}
        <circle cx="14" cy="17" r="3" fill="#FF5252"/>
        <circle cx="24" cy="17" r="3" fill="#FFD740"/>
        <circle cx="34" cy="17" r="3" fill="#69F0AE"/>
        {/* Address bar */}
        <rect x="40" y="13" width="16" height="8" rx="3" fill="rgba(255,255,255,0.25)"/>
        {/* Browser content lines */}
        <rect x="10" y="32" width="20" height="3" rx="1.5" fill="#2196F3" opacity="0.7"/>
        <rect x="10" y="39" width="44" height="2.5" rx="1.25" fill="#90CAF9"/>
        <rect x="10" y="45" width="36" height="2.5" rx="1.25" fill="#90CAF9"/>
        {/* Right image placeholder */}
        <rect x="38" y="30" width="18" height="14" rx="3" fill="#BBDEFB"/>
        <path d="M38 40l5-5 4 4 3-3 4 4" stroke="#2196F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    tag: 'Mobile Dev',
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications for iOS and Android — built for performance, usability, and seamless user experiences.',
    points: ['iOS & Android Native', 'React Native / Flutter', 'App Store Deployment', 'Push Notifications & Analytics'],
    icon: (
      /* Smartphone — gradient screen with colorful UI elements */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="4" width="32" height="56" rx="6" fill="#1A1A2E" stroke="#7C4DFF" strokeWidth="2"/>
        <rect x="20" y="10" width="24" height="38" rx="3" fill="url(#mobileScreen)"/>
        <defs>
          <linearGradient id="mobileScreen" x1="20" y1="10" x2="44" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C4DFF"/>
            <stop offset="1" stopColor="#E040FB"/>
          </linearGradient>
        </defs>
        {/* Status bar */}
        <rect x="22" y="12" width="8" height="2" rx="1" fill="rgba(255,255,255,0.5)"/>
        <circle cx="40" cy="13" r="1.5" fill="rgba(255,255,255,0.5)"/>
        {/* App icons grid */}
        <rect x="22" y="18" width="7" height="7" rx="2" fill="#FF5252"/>
        <rect x="31" y="18" width="7" height="7" rx="2" fill="#FFD740"/>
        <rect x="22" y="27" width="7" height="7" rx="2" fill="#69F0AE"/>
        <rect x="31" y="27" width="7" height="7" rx="2" fill="#40C4FF"/>
        {/* Bottom bar */}
        <rect x="22" y="37" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/>
        {/* Home button */}
        <circle cx="32" cy="54" r="3" fill="#7C4DFF" stroke="#E040FB" strokeWidth="1"/>
        {/* Notch */}
        <rect x="27" y="6" width="10" height="3" rx="1.5" fill="#333"/>
      </svg>
    ),
  },
  {
    tag: 'CRM',
    title: 'CRM Development & Business Process Automation',
    desc: 'Streamline customer management, sales operations, and internal workflows with custom CRM and automation solutions.',
    points: ['Custom CRM Pipelines', 'Workflow Automation', 'Sales & Lead Tracking', 'Third-Party Integrations'],
    icon: (
      /* CRM — people network with connecting lines */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center node */}
        <circle cx="32" cy="32" r="9" fill="#FF6D00" opacity="0.15"/>
        <circle cx="32" cy="32" r="6" fill="#FF6D00"/>
        <path d="M29 32a3 3 0 116 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="29" r="2" fill="white"/>
        {/* Top-left person */}
        <circle cx="12" cy="14" r="6" fill="#E91E63" opacity="0.15"/>
        <circle cx="12" cy="14" r="4" fill="#E91E63"/>
        <circle cx="12" cy="12" r="1.5" fill="white"/>
        <path d="M9.5 16a2.5 2.5 0 015 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Top-right person */}
        <circle cx="52" cy="14" r="6" fill="#00BCD4" opacity="0.15"/>
        <circle cx="52" cy="14" r="4" fill="#00BCD4"/>
        <circle cx="52" cy="12" r="1.5" fill="white"/>
        <path d="M49.5 16a2.5 2.5 0 015 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Bottom person */}
        <circle cx="32" cy="54" r="6" fill="#4CAF50" opacity="0.15"/>
        <circle cx="32" cy="54" r="4" fill="#4CAF50"/>
        <circle cx="32" cy="52" r="1.5" fill="white"/>
        <path d="M29.5 56a2.5 2.5 0 015 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Connecting lines */}
        <line x1="16" y1="17" x2="27" y2="27" stroke="#FF6D00" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="48" y1="17" x2="37" y2="27" stroke="#00BCD4" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="32" y1="38" x2="32" y2="48" stroke="#4CAF50" strokeWidth="1.5" strokeDasharray="3 2"/>
        {/* Automation arrows */}
        <path d="M20 32 Q26 28 27 32" stroke="#FFD740" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M44 32 Q38 28 37 32" stroke="#FFD740" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    tag: 'SaaS',
    title: 'SaaS Product Development',
    desc: 'Build scalable cloud-based SaaS platforms with secure architecture, seamless user experience, and future-ready technology.',
    points: ['Multi-Tenant Architecture', 'Subscription Billing', 'Role-Based Access Control', 'API-First Design'],
    icon: (
      /* SaaS / Cloud — colorful cloud with code brackets */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGrad" x1="8" y1="20" x2="56" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#29B6F6"/>
            <stop offset="1" stopColor="#0288D1"/>
          </linearGradient>
        </defs>
        {/* Cloud shape */}
        <path d="M46 42H18a10 10 0 01-2-19.8A14 14 0 0144 26a8 8 0 012 16z" fill="url(#cloudGrad)"/>
        <path d="M46 42H18a10 10 0 01-2-19.8A14 14 0 0144 26a8 8 0 012 16z" stroke="#0288D1" strokeWidth="1.5"/>
        {/* Code brackets on cloud */}
        <text x="18" y="37" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="white" opacity="0.9">{"</>"}</text>
        {/* Floating data nodes */}
        <circle cx="10" cy="50" r="4" fill="#FF7043" opacity="0.9"/>
        <circle cx="22" cy="54" r="3" fill="#FFD740" opacity="0.9"/>
        <circle cx="34" cy="56" r="4" fill="#69F0AE" opacity="0.9"/>
        <circle cx="46" cy="54" r="3" fill="#E040FB" opacity="0.9"/>
        <circle cx="56" cy="50" r="4" fill="#FF5252" opacity="0.9"/>
        {/* Connecting lines to cloud */}
        <line x1="10" y1="46" x2="18" y2="42" stroke="#FF7043" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="22" y1="51" x2="24" y2="42" stroke="#FFD740" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="34" y1="52" x2="32" y2="42" stroke="#69F0AE" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="46" y1="51" x2="42" y2="42" stroke="#E040FB" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="56" y1="46" x2="48" y2="42" stroke="#FF5252" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    tag: 'ERP',
    title: 'ERP Solutions & Enterprise Application Development',
    desc: 'Integrated ERP systems that simplify operations, improve productivity, and centralize business management.',
    points: ['Inventory & Supply Chain', 'Finance & Accounting Modules', 'HR & Payroll Integration', 'Real-Time Dashboards'],
    icon: (
      /* ERP — colorful dashboard with charts and modules */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor */}
        <rect x="4" y="8" width="56" height="38" rx="4" fill="#ECEFF1" stroke="#546E7A" strokeWidth="1.5"/>
        <rect x="4" y="8" width="56" height="10" rx="4" fill="#546E7A"/>
        <rect x="4" y="14" width="56" height="4" fill="#546E7A"/>
        {/* Traffic lights */}
        <circle cx="11" cy="13" r="2" fill="#FF5252"/>
        <circle cx="18" cy="13" r="2" fill="#FFD740"/>
        <circle cx="25" cy="13" r="2" fill="#69F0AE"/>
        {/* Stand */}
        <rect x="28" y="46" width="8" height="6" rx="1" fill="#90A4AE"/>
        <rect x="22" y="52" width="20" height="3" rx="1.5" fill="#78909C"/>
        {/* Dashboard panels */}
        {/* Bar chart */}
        <rect x="8" y="22" width="22" height="18" rx="2" fill="white" stroke="#E0E0E0" strokeWidth="1"/>
        <rect x="11" y="34" width="4" height="4" rx="1" fill="#FF6D00"/>
        <rect x="17" y="30" width="4" height="8" rx="1" fill="#2196F3"/>
        <rect x="23" y="26" width="4" height="12" rx="1" fill="#4CAF50"/>
        {/* Pie / donut */}
        <rect x="34" y="22" width="22" height="18" rx="2" fill="white" stroke="#E0E0E0" strokeWidth="1"/>
        <circle cx="45" cy="31" r="7" fill="none" stroke="#E0E0E0" strokeWidth="6"/>
        <circle cx="45" cy="31" r="7" fill="none" stroke="#7C4DFF" strokeWidth="6"
          strokeDasharray="22 22" strokeDashoffset="0"/>
        <circle cx="45" cy="31" r="7" fill="none" stroke="#FF6D00" strokeWidth="6"
          strokeDasharray="11 33" strokeDashoffset="-22"/>
        <circle cx="45" cy="31" r="7" fill="none" stroke="#00BCD4" strokeWidth="6"
          strokeDasharray="11 33" strokeDashoffset="-33"/>
        <circle cx="45" cy="31" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    tag: 'AI & ML',
    title: 'AI & Intelligent Automation Solutions',
    desc: 'AI-powered applications, chatbots, and automation systems that enhance efficiency and accelerate business decisions.',
    points: ['Custom AI Models', 'Chatbot & NLP Systems', 'Predictive Analytics', 'Process Automation'],
    icon: (
      /* AI / Neural network — colorful nodes and connections */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Input layer */}
        <circle cx="10" cy="16" r="5" fill="#FF5252"/>
        <circle cx="10" cy="32" r="5" fill="#FF5252"/>
        <circle cx="10" cy="48" r="5" fill="#FF5252"/>
        {/* Hidden layer */}
        <circle cx="32" cy="10" r="5" fill="#FFD740"/>
        <circle cx="32" cy="26" r="5" fill="#FFD740"/>
        <circle cx="32" cy="42" r="5" fill="#FFD740"/>
        <circle cx="32" cy="56" r="5" fill="#FFD740"/>
        {/* Output layer */}
        <circle cx="54" cy="22" r="5" fill="#69F0AE"/>
        <circle cx="54" cy="42" r="5" fill="#69F0AE"/>
        {/* Connections input→hidden */}
        {[16,32,48].map(y => [10,26,42,56].map(hy => (
          <line key={`${y}-${hy}`} x1="15" y1={y} x2="27" y2={hy} stroke="#FF5252" strokeWidth="0.8" opacity="0.4"/>
        )))}
        {/* Connections hidden→output */}
        {[10,26,42,56].map(y => [22,42].map(oy => (
          <line key={`h${y}-o${oy}`} x1="37" y1={y} x2="49" y2={oy} stroke="#69F0AE" strokeWidth="0.8" opacity="0.4"/>
        )))}
        {/* Highlight active path */}
        <line x1="15" y1="32" x2="27" y2="26" stroke="#FFD740" strokeWidth="1.5" opacity="0.9"/>
        <line x1="37" y1="26" x2="49" y2="22" stroke="#FFD740" strokeWidth="1.5" opacity="0.9"/>
        {/* Brain spark */}
        <circle cx="32" cy="26" r="7" fill="none" stroke="#E040FB" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7"/>
      </svg>
    ),
  },
  {
    tag: 'Infrastructure',
    title: 'Website Maintenance & Managed Infrastructure',
    desc: 'Reliable website support, server management, security monitoring, and performance optimization for uninterrupted operations.',
    points: ['24/7 Uptime Monitoring', 'Security Patching', 'Performance Optimization', 'Backup & Disaster Recovery'],
    icon: (
      /* Infrastructure — server rack with colorful status lights */
      <svg className="st-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Server 1 */}
        <rect x="8" y="8" width="48" height="12" rx="3" fill="#1565C0" stroke="#1E88E5" strokeWidth="1.5"/>
        <rect x="12" y="11" width="24" height="6" rx="1.5" fill="#1E88E5" opacity="0.5"/>
        <circle cx="44" cy="14" r="2.5" fill="#69F0AE"/>
        <circle cx="50" cy="14" r="2.5" fill="#FFD740"/>
        {/* Server 2 */}
        <rect x="8" y="24" width="48" height="12" rx="3" fill="#1565C0" stroke="#1E88E5" strokeWidth="1.5"/>
        <rect x="12" y="27" width="24" height="6" rx="1.5" fill="#1E88E5" opacity="0.5"/>
        <circle cx="44" cy="30" r="2.5" fill="#69F0AE"/>
        <circle cx="50" cy="30" r="2.5" fill="#FF5252"/>
        {/* Server 3 */}
        <rect x="8" y="40" width="48" height="12" rx="3" fill="#1565C0" stroke="#1E88E5" strokeWidth="1.5"/>
        <rect x="12" y="43" width="24" height="6" rx="1.5" fill="#1E88E5" opacity="0.5"/>
        <circle cx="44" cy="46" r="2.5" fill="#69F0AE"/>
        <circle cx="50" cy="46" r="2.5" fill="#69F0AE"/>
        {/* Shield overlay */}
        <path d="M32 54 C32 54 22 50 22 44V38l10-4 10 4v6c0 6-10 10-10 10z" fill="#E040FB" opacity="0.2" stroke="#E040FB" strokeWidth="1.5"/>
        <path d="M28 46l3 3 5-5" stroke="#E040FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                  key={card.tag}
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
