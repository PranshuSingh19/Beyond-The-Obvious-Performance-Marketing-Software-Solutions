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
      style={{
        backgroundImage: `url(${homeBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Content pushed to the right ── */}
      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-20 flex justify-end">
        <div
          ref={contentRef}
          className="will-change-transform w-full md:w-[52%] lg:w-[46%] flex flex-col items-start text-left"
        >
          {/* Heading */}
          <div ref={headingRef} className="mb-4">
            <h1
              className="font-display font-black leading-[1.05] select-none"
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 7rem)',
                color: '#1a0a1e',
              }}
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
              className="leading-relaxed"
              style={{
                color: '#3a1a42',
                fontSize: 'clamp(0.95rem, 1.4vw, 2.15rem)',
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

          {/* Single CTA */}
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
    </section>
  );
};

export default Hero;
