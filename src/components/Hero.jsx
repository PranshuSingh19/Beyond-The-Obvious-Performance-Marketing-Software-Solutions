import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeBanner from '../assets/main-home-banner.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const logoRef    = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef     = useRef(null);
  const particlesRef  = useRef([]);
  const animFrameRef  = useRef(null);

  /* ── Particle Canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    particlesRef.current = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.28 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(83,16,91,${0.1 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(83,16,91,${p.alpha})`;
        ctx.fill();
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  /* ── GSAP entrance + scroll-out ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      });
      gsap.to(logoRef.current, {
        scale: 3.5, opacity: 0, filter: 'blur(8px)', ease: 'power2.in',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=80%', scrub: 1.2 },
      });
      gsap.to(taglineRef.current, {
        opacity: 0, y: -30, ease: 'power2.in',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=40%', scrub: 1 },
      });
      gsap.to(ctaRef.current, {
        opacity: 0, y: -20, ease: 'power2.in',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=35%', scrub: 1 },
      });
      // entrance
      gsap.from(logoRef.current,    { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', delay: 0.2 });
      gsap.from(taglineRef.current, { opacity: 0, y: 24, duration: 1.0, ease: 'power3.out', delay: 0.6 });
      gsap.from(ctaRef.current,     { opacity: 0, y: 20, duration: 1.0, ease: 'power3.out', delay: 0.9 });
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
      className="hero-section relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${homeBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}

    >
      <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />

      {/* Dark overlay so text is readable over the banner */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.70) 100%)' }} />

      {/* Soft radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(139,26,154,0.18) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 grid-pattern pointer-events-none" style={{ opacity: 0.18 }} />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/5 w-[28rem] h-[28rem] rounded-full pointer-events-none hero-orb-left"
        style={{ background: 'radial-gradient(circle, rgba(83,16,91,0.09) 0%, transparent 70%)', filter: 'blur(55px)' }} />
      <div className="absolute bottom-1/4 right-1/5 w-[22rem] h-[22rem] rounded-full pointer-events-none hero-orb-right"
        style={{ background: 'radial-gradient(circle, rgba(139,26,154,0.07) 0%, transparent 70%)', filter: 'blur(65px)' }} />

      {/* ── Content ── */}
      <div className="hero-content relative z-10 text-center px-4 w-full max-w-6xl mx-auto">

        {/* Main heading — no badge */}
        <div ref={logoRef} className="will-change-transform mb-6">
          <h1
            className="font-display font-black leading-[1.0] select-none"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 10rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e8e8f0 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Beyond The
          </h1>
          <h1
            className="font-display font-black leading-[1.0] select-none"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 10rem)',
              background: 'linear-gradient(135deg, #53105B 0%, #8B1A9A 45%, #53105B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Obvious
          </h1>
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="mb-10">
          <p className="max-w-2xl mx-auto leading-relaxed px-2"
            style={{ color: '#e0e0e8', fontSize: 'clamp(1.05rem, 1.8vw, 2.35rem)', fontWeight: 400 }}>
            We build{' '}
            <span style={{ color: '#d580e8', fontWeight: 600 }}>intelligent software</span>,{' '}
            <span style={{ color: '#d580e8', fontWeight: 600 }}>growth systems</span>, and{' '}
            <span style={{ color: '#d580e8', fontWeight: 600 }}>brand experiences</span>{' '}
            that push past the expected.
          </p>
        </div>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary */}
          <button
            onClick={() => scrollTo('contact')}
            className="magnetic-btn relative overflow-hidden group"
            style={{
              padding: 'clamp(0.8rem, 1.2vw, 1.1rem) clamp(1.75rem, 2.8vw, 2.5rem)',
              borderRadius: '0.875rem',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
              boxShadow: '0 6px 24px rgba(83,16,91,0.4)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #8B1A9A, #53105B)' }} />
          </button>

          {/* Secondary */}
          <button
            onClick={() => scrollTo('services')}
            style={{
              padding: 'clamp(0.8rem, 1.2vw, 1.1rem) clamp(1.75rem, 2.8vw, 2.5rem)',
              borderRadius: '0.875rem',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
              fontWeight: 600,
              color: '#53105B',
              background: '#ffffff',
              border: '1.5px solid rgba(83,16,91,0.28)',
              boxShadow: '0 2px 12px rgba(83,16,91,0.08)',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#53105ba6';
              e.currentTarget.style.boxShadow = '0 6px 24px #53105b29';
              e.currentTarget.style.background = '#871f93a6';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(83,16,91,0.28)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(83,16,91,0.08)';
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#53105b';
            }}
          >
            Explore Services
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center gap-2" style={{ opacity: 0.7 }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#e0e0e8' }}>Scroll</span>
          <svg className="w-5 h-5 animate-bounce" style={{ color: '#53105B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
