import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from '../assets/IT-about.jpg';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '150+', label: 'Brands Scaled' },
  { value: '8+',   label: 'Years Experience' },
  { value: '98%',  label: 'Client Retention' },
  { value: '5x',   label: 'Avg. ROAS' },
];

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Custom Software',
    desc: 'Scalable web apps, CRMs, SaaS platforms, and ERP systems built for your exact workflow.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Growth Marketing',
    desc: 'Data-driven campaigns across Google, Meta, and beyond — engineered for measurable ROI.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: 'Brand & Creative',
    desc: 'Visual identities and creative systems that make your brand impossible to ignore.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="6" height="6" /><rect x="2" y="2" width="20" height="20" rx="2" />
        <line x1="9" y1="2" x2="9" y2="6" /><line x1="15" y1="2" x2="15" y2="6" />
        <line x1="9" y1="18" x2="9" y2="22" /><line x1="15" y1="18" x2="15" y2="22" />
        <line x1="2" y1="9" x2="6" y2="9" /><line x1="2" y1="15" x2="6" y2="15" />
        <line x1="18" y1="9" x2="22" y2="9" /><line x1="18" y1="15" x2="22" y2="15" />
      </svg>
    ),
    title: 'AI Automation',
    desc: 'Intelligent workflows, chatbots, and automation that eliminate friction and accelerate decisions.',
  },
];

const About = () => {
  const sectionRef  = useRef(null);
  const imgRef      = useRef(null);
  const contentRef  = useRef(null);
  const statsRef    = useRef([]);
  const pillarsRef  = useRef([]);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const ctx = gsap.context(() => {
      // Image slides in from left
      gsap.fromTo(imgRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      );
      // Content slides in from right
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.15 }
      );
      // Stats pop in
      gsap.from(statsRef.current.filter(Boolean), {
        opacity: 0, scale: 0.75, stagger: 0.1, duration: 0.6,
        ease: 'back.out(1.7)', delay: 0.4,
      });
      // Pillar cards
      gsap.from(pillarsRef.current.filter(Boolean), {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.7,
        ease: 'power3.out', delay: 0.5,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [revealed]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section relative overflow-hidden"
      style={{ background: '#ffffff', paddingTop: 'clamp(4rem, 7vw, 8rem)', paddingBottom: 'clamp(4rem, 7vw, 8rem)' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(83,16,91,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(83,16,91,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 about-label">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #53105B)' }} />
          <span className="text-xs font-semibold tracking-widest uppercase text-silver">About Us</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(83,16,91,0.3), transparent)' }} />
        </div>

        {/* ── Main two-column layout ── */}
        <div className="about-layout">

          {/* ── LEFT — Image column ── */}
          <div ref={imgRef} className="about-img-col">

            {/* Image frame */}
            <div className="about-img-frame relative">
              {/* Decorative corner accents */}
              <div className="about-corner about-corner-tl" />
              <div className="about-corner about-corner-br" />

              {/* Purple glow behind image */}
              <div className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(83,16,91,0.25) 0%, transparent 70%)', filter: 'blur(20px)' }} />

              {/* The image */}
              <div className="about-img-wrapper relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(83,16,91,0.25)' }}>
                <img
                  src={aboutImg}
                  alt="Beyond The Obvious — Technology & Growth Agency"
                  className="about-img w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(248,247,255,0.4) 100%)' }} />
              </div>

              {/* Floating badge — top right */}
              <div className="about-badge-tr absolute rounded-xl px-3 py-2 flex items-center gap-2"
                style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.25)', boxShadow: '0 2px 12px rgba(83,16,91,0.1)', top: '-1rem', right: '-1rem' }}>
                <span className="w-2 h-2 rounded-full pulse-glow flex-shrink-0" style={{ background: '#8B1A9A' }} />
                <span className="text-xs font-semibold chrome-text whitespace-nowrap">AI-Powered</span>
              </div>

            </div>

            {/* Stats grid below image */}
            <div className="about-stats grid grid-cols-2 gap-3 mt-8">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  ref={el => (statsRef.current[i] = el)}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.15)', boxShadow: '0 2px 10px rgba(83,16,91,0.06)' }}
                >
                  <div className="font-display font-black purple-text leading-none mb-1"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                    {value}
                  </div>
                  <div className="text-xs text-silver">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Content column ── */}
          <div ref={contentRef} className="about-content-col">

            {/* Eyebrow */}
            <p className="text-xl font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#8B1A9A' }}>
              Who We Are
            </p>

            {/* Heading */}
            <h2 className="about-heading font-display font-black chrome-text leading-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.75rem)' }}>
              We Build What Others<br />
              <span className="purple-text">Can't Imagine</span>
            </h2>

            {/* Description */}
            <p className="about-desc text-silver leading-relaxed mb-6"
              style={{ fontSize: 'clamp(0.875rem, 1.3vw, 1.125rem)' }}>
              <strong className="text-chrome font-semibold">Beyond The Obvious</strong> is a full-spectrum technology and growth company built for businesses that refuse to settle. From custom software and AI-powered automation to performance marketing and brand strategy, we engineer outcomes that matter.
            </p>
            <p className="about-desc text-silver leading-relaxed mb-8"
              style={{ fontSize: 'clamp(0.875rem, 1.3vw, 1.125rem)' }}>
              Every solution we build is designed to <span className="text-chrome">scale</span>, <span className="text-chrome">perform</span>, and <span className="text-chrome">evolve</span> with your ambitions. We don't just deliver projects — we become the technology partner that drives your next phase of growth.
            </p>

            {/* What sets us apart */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-silver mb-4">What Sets Us Apart</h3>
              <div className="space-y-3">
                {[
                  { label: 'End-to-End Ownership', text: 'From strategy to deployment — one team, full accountability.' },
                  { label: 'ROI-First Thinking',   text: 'Every decision is tied to measurable business outcomes.' },
                  { label: 'Agile & Transparent',  text: 'Fast iterations, clear communication, no surprises.' },
                ].map(({ label, text }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(83,16,91,0.1)', border: '1px solid rgba(83,16,91,0.25)' }}>
                      <svg className="w-2.5 h-2.5" fill="none" stroke="#53105B" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-chrome">{label} — </span>
                      <span className="text-sm text-silver">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {/* <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="magnetic-btn px-6 py-3 rounded-xl text-sm font-semibold text-chrome flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #53105B, #8B1A9A)', boxShadow: '0 0 25px rgba(83,16,91,0.4)' }}
              >
                Start a Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl text-sm font-semibold glass transition-all duration-300"
                style={{ color: '#E5E5EB', border: '1px solid rgba(229,229,235,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(229,229,235,0.12)'; }}
              >
                Our Services
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
