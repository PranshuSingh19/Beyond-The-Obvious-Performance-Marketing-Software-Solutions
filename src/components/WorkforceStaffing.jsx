/**
 * Workforce & IT Staffing Solutions
 * SCROLL ELEMENTS — each card translates in from alternating left/right
 * as user scrolls, one by one. Process steps stagger up from bottom.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Back Office Operations Support Services',
    desc: 'Efficient back-office support solutions to improve operational productivity and business continuity. Data entry, processing, reporting, and administrative operations handled seamlessly.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
    stats: [{ val: '24/7', label: 'Operations' }, { val: '99%', label: 'Accuracy' }],
    tags: ['Data Entry', 'Processing', 'Admin Support'],
    fromX: -100,
  },
  {
    num: '02',
    title: 'Field Workforce Support Services',
    desc: 'Reliable field staff and operational support teams to strengthen on-ground business execution. Trained professionals deployed where your business needs them most.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>),
    stats: [{ val: '500+', label: 'Field Staff' }, { val: '50+', label: 'Cities' }],
    tags: ['Field Ops', 'On-Ground', 'Deployment'],
    fromX: 100,
  },
  {
    num: '03',
    title: 'Dedicated Developers & IT Professionals On Demand',
    desc: 'Access skilled developers and IT professionals on-demand for short-term projects or long-term technical support. Pre-vetted talent, zero hiring overhead.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
    stats: [{ val: '200+', label: 'Professionals' }, { val: '48hr', label: 'Deployment' }],
    tags: ['Developers', 'IT Experts', 'On-Demand'],
    fromX: -100,
  },
];

const processSteps = [
  { step: '01', title: 'Requirement Analysis', desc: 'We understand your exact staffing needs, skill requirements, and timeline.' },
  { step: '02', title: 'Talent Matching', desc: 'Our database of pre-vetted professionals is matched to your specific criteria.' },
  { step: '03', title: 'Rapid Deployment', desc: 'Selected candidates are onboarded and deployed within 24–48 hours.' },
  { step: '04', title: 'Ongoing Support', desc: 'Continuous performance monitoring and replacement guarantee for peace of mind.' },
];

const WorkforceStaffing = () => {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const bgTextRef   = useRef(null);
  const cardRefs    = useRef([]);
  const stepRefs    = useRef([]);
  const statsRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Header slides down from top ──────────────────────
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
        }
      );

      // ── Background text slow parallax ────────────────────
      gsap.fromTo(bgTextRef.current,
        { y: 60 },
        {
          y: -60, ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        }
      );

      // ── Service cards — alternate left / right, one by one ──
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, x: services[i].fromX, scale: 0.94 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ── Process steps — stagger up from bottom ───────────
      const validSteps = stepRefs.current.filter(Boolean);
      if (validSteps.length) {
        gsap.fromTo(validSteps,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            stagger: 0.15,
            duration: 0.7, ease: 'power3.out',
            scrollTrigger: {
              trigger: validSteps[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ── Stats row — scale in ──────────────────────────────
      if (statsRef.current) {
        gsap.fromTo(statsRef.current,
          { opacity: 0, scale: 0.88 },
          {
            opacity: 1, scale: 1,
            duration: 0.8, ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#ffffff' }}>

      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="h-px w-full absolute top-0"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(83,16,91,.3),transparent)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%,rgba(83,16,91,.04) 0%,transparent 70%)' }} />

      {/* Large BG text — parallax */}
      <div ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ opacity: 0.04 }}>
        <span className="font-display font-black text-[18vw] chrome-text whitespace-nowrap">
          WORKFORCE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,transparent,#53105B)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-silver">Workforce & IT Staffing</span>
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg,#53105B,transparent)' }} />
          </div>
          <h2 className="font-display font-black chrome-text mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 4rem)' }}>
            Workforce & IT<br /><span className="purple-text">Staffing Solutions</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            The right people, in the right place, at the right time. Pre-vetted talent deployed with zero friction.
          </p>
        </div>

        {/* Service cards — scroll in from alternating sides */}
        <div className="space-y-6 mb-20">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              ref={el => (cardRefs.current[i] = el)}
              className="rounded-2xl overflow-hidden transition-all duration-300 group"
              style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,.15)', boxShadow: '0 2px 10px rgba(83,16,91,.06)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(83,16,91,.4)';
                e.currentTarget.style.boxShadow   = '0 8px 30px rgba(83,16,91,.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(83,16,91,.15)';
                e.currentTarget.style.boxShadow   = '0 2px 10px rgba(83,16,91,.06)';
              }}
            >
              <div className="h-0.5 w-full"
                style={{ background: 'linear-gradient(90deg,#53105B,#8B1A9A,transparent)' }} />

              <div className="p-7 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">

                  {/* Number + icon */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(83,16,91,.08)', border: '1px solid rgba(83,16,91,.2)', color: '#53105B' }}>
                      {svc.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl chrome-text mb-2 leading-tight">{svc.title}</h3>
                    <p className="text-silver text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                          style={{ background: 'rgba(83,16,91,.08)', color: '#53105B', border: '1px solid rgba(83,16,91,.2)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-8 flex-shrink-0">
                    {svc.stats.map(({ val, label }) => (
                      <div key={label} className="text-center">
                        <div className="font-display font-black text-2xl purple-text">{val}</div>
                        <div className="text-[10px] text-silver uppercase tracking-wider mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="mb-16">
          <h3 className="font-display font-bold chrome-text text-center mb-10"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
            How We Deploy Talent
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div key={step.step}
                ref={el => (stepRefs.current[i] = el)}
                className="relative rounded-2xl p-6 md:p-7"
                style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,.12)', boxShadow: '0 2px 8px rgba(83,16,91,.06)' }}>

                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3.5 w-10 h-px z-10"
                    style={{ background: 'linear-gradient(90deg,rgba(83,16,91,.5),transparent)' }} />
                )}

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 font-mono font-black"
                  style={{ background: 'linear-gradient(135deg,#53105B,#8B1A9A)', color: '#ffffff', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}>
                  {step.step}
                </div>
                <h4 className="font-semibold text-chrome mb-3 leading-snug"
                  style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>{step.title}</h4>
                <p className="text-silver leading-relaxed"
                  style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(83,16,91,.06) 0%, #ffffff 100%)',
            border: '1px solid rgba(83,16,91,.2)',
            boxShadow: '0 4px 20px rgba(83,16,91,.08)',
          }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '200+', label: 'Professionals Placed' },
              { val: '48hr', label: 'Average Deployment' },
              { val: '50+',  label: 'Cities Covered' },
              { val: '95%',  label: 'Client Satisfaction' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-display font-black text-3xl purple-text mb-1">{val}</div>
                <div className="text-xs text-silver uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkforceStaffing;
