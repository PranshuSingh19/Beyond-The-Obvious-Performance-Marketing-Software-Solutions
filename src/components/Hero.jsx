import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeBanner from '../assets/home-banner.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef    = useRef(null);
  const contentRef    = useRef(null);
  const headingRef    = useRef(null);
  const taglineRef    = useRef(null);
  const ctaRef        = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    // Skip all scroll animations on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Just fade in the content — no pin, no scroll scrub
      gsap.from(headingRef.current, { opacity: 0, y: 30, duration: 1.0, ease: 'power3.out', delay: 0.2 });
      gsap.from(taglineRef.current, { opacity: 0, y: 20, duration: 0.9, ease: 'power3.out', delay: 0.45 });
      gsap.from(ctaRef.current,     { opacity: 0, y: 16, duration: 0.9, ease: 'power3.out', delay: 0.65 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      });

      gsap.to(contentRef.current, {
        x: 80,
        opacity: 0,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=60%',
          scrub: 1.2,
        },
      });

      gsap.to(scrollHintRef.current, {
        opacity: 0,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=20%',
          scrub: 1,
        },
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 24,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.6,
      });
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-section relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image — absolute fill, always visible ── */}
      <img
        src={homeBanner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* ── Overlay — subtle on desktop, stronger on mobile ── */}
      <div className="absolute inset-0 hero-overlay" style={{ zIndex: 1 }} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-20 flex justify-end">
        <div
          ref={contentRef}
          className="hero-content-box will-change-transform w-full md:w-[52%] lg:w-[46%] flex flex-col items-start text-left"
        >
          {/* Heading */}
          <div ref={headingRef} className="mb-4">
            <h1
              className="font-display font-black leading-[1.05] select-none hero-heading-main"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 7rem)', color: '#1a0a1e' }}
            >
              Beyond The
            </h1>
            <h1
              className="font-display font-black leading-[1.05] select-none"
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 7rem)',
                background: 'linear-gradient(135deg, #53105B 0%, #8B1A9A 55%, #b040cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Obvious
            </h1>
          </div>

          {/* Tagline */}
          <div ref={taglineRef} className="mb-8 max-w-lg">
            <p
              className="leading-relaxed hero-tagline"
              style={{
                color: '#3a1a42',
                fontSize: 'clamp(0.95rem, 1.4vw, 2.2rem)',
                fontWeight: 400,
              }}
            >
              We build{' '}
              <span style={{ color: '#53105B', fontWeight: 600 }}>intelligent software</span>,{' '}
              <span style={{ color: '#53105B', fontWeight: 600 }}>growth systems</span>, and{' '}
              <span style={{ color: '#53105B', fontWeight: 600 }}>brand experiences</span>{' '}
              that push past the expected.
            </p>
          </div>

          {/* CTA */}
          <div ref={ctaRef}>
            <button
              onClick={() => scrollTo('services')}
              className="magnetic-btn relative overflow-hidden group"
              style={{
                padding: 'clamp(0.8rem, 1.2vw, 1.05rem) clamp(1.8rem, 2.8vw, 2.4rem)',
                borderRadius: '0.875rem',
                fontSize: 'clamp(0.95rem, 1.05vw, 1.1rem)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
                boxShadow: '0 6px 28px rgba(83,16,91,0.38)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #8B1A9A, #53105B)' }}
              />
            </button>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      {/* <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-2 opacity-50"
      >
        <svg className="w-4 h-4 text-silver animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="text-xs tracking-widest uppercase text-silver">Scroll</span>
      </div> */}
    </section>
  );
};

export default Hero;
