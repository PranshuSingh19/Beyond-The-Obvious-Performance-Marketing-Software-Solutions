/**
 * Growth Marketing Solutions — Light Theme
 */
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    num: '01', title: 'Performance Marketing Campaign Management',
    desc: 'Data-driven marketing campaigns focused on maximizing visibility, conversions, and measurable business results.',
    metric: '5x', metricLabel: 'Average ROAS',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>),
    tags: ['Meta Ads', 'Google Ads', 'Analytics'],
  },
  {
    num: '02', title: 'Lead Generation & Customer Acquisition Services',
    desc: 'Targeted strategies to attract quality leads, increase customer engagement, and grow your sales pipeline.',
    metric: '3x', metricLabel: 'Lead Volume',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
    tags: ['Lead Gen', 'CRO', 'Funnels'],
  },
  {
    num: '03', title: 'Google Ads & Meta Advertising Management',
    desc: 'Strategic ad campaigns across Google, Facebook, and Instagram designed to improve reach and return on investment.',
    metric: '340%', metricLabel: 'Avg. ROAS Lift',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>),
    tags: ['Google Ads', 'Facebook', 'Instagram'],
  },
  {
    num: '04', title: 'Social Media Marketing & Brand Engagement',
    desc: 'Build a stronger online presence through engaging social media campaigns and audience-focused content strategies.',
    metric: '10x', metricLabel: 'Engagement Rate',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>),
    tags: ['Social Media', 'Content', 'Community'],
  },
  {
    num: '05', title: 'Conversion Rate Optimization (CRO)',
    desc: 'Optimize landing pages and user journeys to improve engagement, increase conversions, and boost revenue.',
    metric: '+55%', metricLabel: 'Conversion Lift',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
    tags: ['A/B Testing', 'UX', 'Analytics'],
  },
  {
    num: '06', title: 'Brand Positioning & Audience Targeting Strategy',
    desc: 'Create a strong market presence with clear brand positioning and precise audience targeting strategies.',
    metric: '98%', metricLabel: 'Client Retention',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
    tags: ['Brand Strategy', 'Targeting', 'Positioning'],
  },
  {
    num: '07', title: 'ROI-Driven Advertising & Growth Strategy',
    desc: 'Performance-focused advertising solutions built to maximize ROI and support long-term business growth.',
    metric: '₹50Cr+', metricLabel: 'Ad Spend Managed',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>),
    tags: ['ROI', 'Growth', 'Strategy'],
  },
  {
    num: '08', title: 'Marketing Analytics & Performance Reporting',
    desc: 'Transparent reporting and actionable insights to track campaign performance and support smarter decisions.',
    metric: '100%', metricLabel: 'Transparent Reporting',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>),
    tags: ['Analytics', 'Reporting', 'Dashboards'],
  },
];

const GrowthMarketing = () => {
  const sectionRef = useRef(null);
  const itemRefs   = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: 0, y: 60 });
        gsap.to(el, {
          opacity: 1, y: 0,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
            onEnter:     () => setActiveIdx(i),
            onEnterBack: () => setActiveIdx(i),
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gm-section relative"
      style={{ background: '#ffffff', paddingTop: 'clamp(3rem, 6vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 8rem)' }}
    >
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="h-px w-full absolute top-0"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(83,16,91,.3),transparent)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 15% 50%,rgba(83,16,91,.05) 0%,transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gm-layout">

          {/* ── LEFT sticky panel ── */}
          <div className="gm-left">
            <div className="gm-sticky-inner">

              <div className="flex items-center gap-3">
                <div className="w-6 h-px" style={{ background: 'linear-gradient(90deg,transparent,#53105B)' }} />
                <span className="text-xs font-semibold tracking-widest uppercase text-silver">Growth Marketing</span>
              </div>

              <h2 className="gm-heading font-display font-black chrome-text leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.5rem)' }}>
                Growth Marketing<br /><span className="purple-text">Solutions</span>
              </h2>
              <p className="gm-subtext text-silver leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}>
                Data-driven campaigns focused on maximizing visibility, conversions, and measurable results across every channel.
              </p>

              {/* Active metric card */}
              <div className="rounded-2xl p-4 transition-all duration-500"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(83,16,91,.25)',
                  boxShadow: '0 4px 20px rgba(83,16,91,.1)',
                }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(83,16,91,.1)', color: '#53105B' }}>
                    {items[activeIdx].icon}
                  </div>
                  <div>
                    <div className="font-display font-black text-xl purple-text leading-none">
                      {items[activeIdx].metric}
                    </div>
                    <div className="text-xs text-silver mt-0.5">{items[activeIdx].metricLabel}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs font-semibold chrome-text line-clamp-2">
                  {items[activeIdx].title}
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {items.map((_, i) => (
                  <div key={i} className="rounded-full transition-all duration-300"
                    style={{
                      width:  i === activeIdx ? '20px' : '5px',
                      height: '5px',
                      background: i === activeIdx ? '#8B1A9A' : 'rgba(83,16,91,.2)',
                    }} />
                ))}
              </div>

              {/* Progress bar */}
              <div className="gm-progress-bar mt-2 h-1 rounded-full overflow-hidden"
                style={{ background: 'rgba(83,16,91,.1)' }}>
                <div className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((activeIdx + 1) / items.length) * 100}%`,
                    background: 'linear-gradient(90deg,#53105B,#8B1A9A)',
                  }} />
              </div>
            </div>
          </div>

          {/* ── RIGHT scrolling items ── */}
          <div className="gm-right">
            {items.map((item, i) => (
              <div
                key={item.num}
                ref={el => (itemRefs.current[i] = el)}
                className="gm-item rounded-2xl overflow-hidden transition-all duration-300 group"
                style={{
                  background: i === activeIdx
                    ? 'linear-gradient(135deg,rgba(83,16,91,.06) 0%,#ffffff 100%)'
                    : '#ffffff',
                  border: i === activeIdx
                    ? '1px solid rgba(83,16,91,.4)'
                    : '1px solid rgba(83,16,91,.1)',
                  boxShadow: i === activeIdx ? '0 4px 20px rgba(83,16,91,.12)' : '0 1px 6px rgba(83,16,91,.05)',
                }}
              >
                <div className="h-0.5 w-full"
                  style={{ background: i === activeIdx
                    ? 'linear-gradient(90deg,#53105B,#8B1A9A,transparent)'
                    : 'rgba(83,16,91,.1)' }} />

                <div className="gm-item-inner flex items-start gap-3 p-4">

                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(83,16,91,.08)', color: '#53105B' }}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
              <h3 className="gm-item-title font-display font-bold chrome-text mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="gm-item-desc text-silver leading-relaxed mb-2">{item.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(83,16,91,.08)', color: '#53105B', border: '1px solid rgba(83,16,91,.2)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="gm-metric flex-shrink-0 font-display font-black purple-text"
                    style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.35rem)' }}>
                    {item.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMarketing;
