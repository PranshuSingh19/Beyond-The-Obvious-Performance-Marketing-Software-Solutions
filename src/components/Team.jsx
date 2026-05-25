import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── LinkedIn icon ── */
const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/*
  randomuser.me gives real human face photos — free, no API key needed.
  seed= keeps the same face on every reload.
  gender= matches the person.
*/
const teamMembers = [
  {
    name: 'Gopal Verma',
    role: 'Ecommerce & Performance Marketing Expert',
    bio: 'Ecommerce & Performance Marketing Manager | 20+ Yrs Exp | Managing ₹1.8 Cr+ Ad Spend | Google, Meta, Amazon Ads.',
    linkedin: 'https://www.linkedin.com/in/gopal-verma-b3421b124/',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQE5-N7xqZEiHg/profile-displayphoto-crop_800_800/B4DZ12TcqKJYAI-/0/1775806305737?e=1781136000&v=beta&t=hj45UFuA-IdBXqVsI7InWjbPaznHJQob_UMJgKcI0hg',
  },
  {
    name: 'Pranshu Singh',
    role: 'Full Stack Developer',
    bio: 'Software Engineer with 4+ years of experience building scalable web applications and delivering high-quality digital solutions.',
    linkedin: 'www.linkedin.com/in/pranshu-singh24/',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEq98MMO6uCdA/profile-displayphoto-scale_200_200/B4DZlQvikfG8AY-/0/1757996265937?e=1781136000&v=beta&t=rlMsIdu0cxI1quNINmxGfnzk3IemiKttjR0i5stoZdw',
  },
  {
    name: 'Hemendra Singh',
    role: 'business development expert',
    bio: 'Experienced business development expert with 4+ years of experience helping businesses achieve growth through technology-driven web and mobile solutions.',
    linkedin: 'https://www.linkedin.com/in/hemendra-singh-mandloi-382405270/',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQH1IOBKb90oeg/profile-displayphoto-crop_800_800/B4DZjV2fZaGsAI-/0/1755934489749?e=1781136000&v=beta&t=lMftzOIxNOGHMpFP6otNGXU4YJes157E2qPRaiWOUyM',
  },
  {
    name: 'Manoj Jaiswal',
    role: 'Performance / AI PPC Ads Expert',
    bio: '29K+@LinkedIn /20+ years of Exp../Handling Google /Amazon Ads Monthly Budget 1.5 Cr, Helped 25+Founders to build Business, Shopping Ads, DV360, Meta Ads.',
    linkedin: 'https://www.linkedin.com/in/digital-marketings-consultant-india/',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQEQhXr4hS2Q6Q/profile-displayphoto-crop_800_800/B56Z2oZSpMGoAc-/0/1776646698706?e=1781136000&v=beta&t=tZF_w9LcOCxRZnVU7z5Wvt7t-8y5kpRIUb-hwLuDahg',
  },
  {
    name: 'Prateek Agarwal',
    role: 'Growth & Performance Marketing',
    bio: 'Growth & Performance Marketing / 8+ Years Of Experience | Brand Marketing | SEO | SEM | SMM | User Acquisition | SMO | Video Marketing | E-Commerce Marketing.',
    linkedin: 'https://www.linkedin.com/in/prateek-agarwal-seo/',
    photo: 'https://media.licdn.com/dms/image/v2/D5635AQGDJZwaT-qWvg/profile-framedphoto-shrink_800_800/B56Z5AO_ywHsAg-/0/1779194134031?e=1780214400&v=beta&t=iaFFxr3fgcb0d3lyC4SHqnC2zwyUOYpDFdufoKuQHpY',
  },
];

/* ── Single card ── */
const TeamCard = ({ member, index, revealed }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    setHovered(false);
    cardRef.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card reveal-up ${revealed ? 'visible' : ''}`}
      style={{
        transitionDelay: `${0.08 + index * 0.08}s`,
        borderRadius: '1.25rem',
        overflow: 'hidden',
        background: '#ffffff',
        border: hovered ? '1px solid rgba(83,16,91,0.4)' : '1px solid rgba(83,16,91,0.13)',
        boxShadow: hovered
          ? '0 20px 50px rgba(83,16,91,0.14)'
          : '0 4px 20px rgba(83,16,91,0.07)',
        transition: 'transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Purple banner at top ── */}
      <div style={{
        width: '100%',
        height: '80px',
        background: hovered
          ? 'linear-gradient(135deg, #53105B 0%, #9B2AAA 100%)'
          : 'linear-gradient(135deg, #53105B 0%, #8B1A9A 100%)',
        transition: 'background 0.4s ease',
        flexShrink: 0,
      }} />

      {/* ── Avatar — overlaps the banner ── */}
      <div style={{
        marginTop: '-44px',
        position: 'relative',
        flexShrink: 0,
      }}>
        {/* Glow ring */}
        <div style={{
          position: 'absolute',
          inset: '-4px',
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #53105B, #B040C0)'
            : 'linear-gradient(135deg, #8B1A9A, #53105B)',
          transition: 'background 0.3s ease',
          zIndex: 0,
        }} />
        {/* White ring */}
        <div style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 1,
        }} />
        {/* Photo */}
        <img
          src={member.photo}
          alt={member.name}
          style={{
            position: 'relative',
            zIndex: 2,
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '1rem 1.5rem 1.5rem', width: '100%' }}>

        {/* Name */}
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
          color: '#1A1A2E',
          marginBottom: '0.2rem',
          lineHeight: 1.3,
        }}>
          {member.name}
        </h3>

        {/* Role */}
        <p style={{
          fontSize: 'clamp(0.68rem, 0.85vw, 0.78rem)',
          fontWeight: 600,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #53105B 0%, #8B1A9A 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.875rem',
        }}>
          {member.role}
        </p>

        {/* Divider */}
        <div style={{
          width: '40px',
          height: '2px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #53105B, #8B1A9A)',
          margin: '0 auto 0.875rem',
          transition: 'width 0.3s ease',
          ...(hovered ? { width: '64px' } : {}),
        }} />

        {/* Bio */}
        <p style={{
          fontSize: 'clamp(0.8rem, 0.95vw, 0.875rem)',
          color: '#6B6B7A',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
        }}>
          {member.bio}
        </p>

        {/* LinkedIn button */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 1rem',
            borderRadius: '0.625rem',
            background: hovered ? 'rgba(83,16,91,0.1)' : 'rgba(83,16,91,0.06)',
            border: '1px solid rgba(83,16,91,0.22)',
            color: '#53105B',
            fontSize: '0.78rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(83,16,91,0.15)';
            e.currentTarget.style.borderColor = 'rgba(83,16,91,0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(83,16,91,0.06)';
            e.currentTarget.style.borderColor = 'rgba(83,16,91,0.22)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <LinkedInIcon />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

/* ── Main section ── */
const Team = () => {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: '#F8F7FF',
        paddingTop: 'clamp(4rem, 7vw, 8rem)',
        paddingBottom: 'clamp(4rem, 7vw, 8rem)',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(83,16,91,0.25), transparent)' }} />
      <div className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(83,16,91,0.06) 0%, transparent 60%)',
        }} />

      <div className="relative z-10 site-container-team">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #53105B)' }} />
          <span className="text-xs font-semibold tracking-widest uppercase text-silver">Our Team</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(83,16,91,0.3), transparent)' }} />
        </div>

        {/* Header */}
        <div className={`text-center mb-16 reveal-up ${revealed ? 'visible' : ''}`}>
          <h2
            className="font-display font-black chrome-text leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4.25rem)' }}
          >
            The People Behind<br />
            <span className="purple-text">Freelancer's Brain</span>
          </h2>
          <p className="max-w-2xl mx-auto text-silver"
            style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', lineHeight: 1.7 }}>
            A tight-knit team of strategists, engineers, and creatives obsessed with building things that actually work.
          </p>
        </div>

        {/* Grid */}
        <div className="team-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
        }}>
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} revealed={revealed} />
          ))}
        </div>

        {/* CTA */}
        {/* <div
          className={`text-center mt-16 reveal-up ${revealed ? 'visible' : ''}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <p className="text-silver mb-5" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' }}>
            Want to join our team? We're always looking for exceptional talent.
          </p>
          <a
            href="mailto:careers@beyondtheobvious.in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              textDecoration: 'none',
              boxShadow: '0 0 25px rgba(83,16,91,0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(83,16,91,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(83,16,91,0.35)';
            }}
          >
            We're Hiring
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
