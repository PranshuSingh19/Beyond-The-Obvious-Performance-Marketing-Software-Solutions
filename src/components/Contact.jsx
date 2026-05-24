import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const SpinnerIcon = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);
const SuccessIcon = () => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DrawInput = ({ label, type = 'text', placeholder, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.classList.toggle('drawn', focused || value);
    }
  }, [focused, value]);

  return (
    <div className="relative">
      <label className="block text-xs font-semibold mb-2 tracking-wider uppercase"
        style={{ color: focused ? '#1A1A2E' : '#6B6B7A', transition: 'color 0.3s' }}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="input-dark w-full px-4 py-3 rounded-xl text-sm"
          style={{
            background: '#F8F7FF',
            border: error ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(83,16,91,0.15)',
            color: '#1A1A2E',
          }}
        />
      </div>
      {error && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{error}</p>}
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);



  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.service) e.service = 'Please select a service';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const services = [
    'Custom Software Development', 'CRM & Automation', 'SaaS Development',
    'ERP Solutions', 'AI & Automation', 'Performance Marketing',
    'Google & Meta Ads', 'Social Media Marketing', 'Brand Strategy',
    'Logo & Identity Design', 'IT Staffing', 'Other',
  ];

  const contactInfo = [
    { icon: <PhoneIcon />, label: 'Call Us', value: '+91 9630916536', href: 'tel:+919630916536' },
    { icon: <MailIcon />, label: 'Email Us', value: 'gopaal0107@gmail.com', href: 'mailto:gopaal0107@gmail.com' },
    // { icon: <MapPinIcon />, label: 'Visit Us', value: 'Vijay Nagar, Indore, India', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(83,16,91,0.3), transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(83,16,91,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 reveal-up ${revealed ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #53105B)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-silver">Contact Us</span>
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #53105B, transparent)' }} />
          </div>
          <h2 className="font-display font-black chrome-text mb-4 leading-tight" style={{ fontSize: 'clamp(1.6rem, 4vw, 4rem)' }}>
            Let's Build Something<br />
            <span className="purple-text">Extraordinary</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Tell us about your vision. We'll craft a custom strategy — completely free.
          </p>
        </div>

        {/* Main contact grid */}
        <div className={`grid lg:grid-cols-5 gap-10 reveal-up ${revealed ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}>

          {/* Left — info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-4 rounded-2xl p-5 group transition-all duration-300"
                style={{ background: '#F8F7FF', border: '1px solid rgba(83,16,91,0.12)', boxShadow: '0 2px 10px rgba(83,16,91,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(83,16,91,0.4)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(83,16,91,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(83,16,91,0.12)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(83,16,91,0.06)';
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(83,16,91,0.08)', border: '1px solid rgba(83,16,91,0.2)', color: '#53105B' }}>
                  {icon}
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-silver mb-0.5">{label}</div>
                  <div className="font-semibold chrome-text text-sm">{value}</div>
                </div>
              </a>
            ))}

            {/* What you get */}
            <div className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(83,16,91,0.06) 0%, #ffffff 100%)',
                border: '1px solid rgba(83,16,91,0.2)',
              }}>
              <h4 className="font-semibold chrome-text mb-4 text-sm">What You'll Get</h4>
              <ul className="space-y-3">
                {[
                  'Free 30-min strategy consultation',
                  'Custom technology roadmap',
                  'Competitor analysis report',
                  'No commitment required',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-silver">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #53105B, #8B1A9A)' }}>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: '#F8F7FF', border: '1px solid rgba(83,16,91,0.15)', boxShadow: '0 4px 24px rgba(83,16,91,0.08)' }}>
              <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #53105B, #8B1A9A, transparent)' }} />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center px-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 float-anim"
                    style={{ background: 'linear-gradient(135deg, #53105B, #8B1A9A)', boxShadow: '0 0 40px rgba(83,16,91,0.3)' }}>
                    <SuccessIcon />
                  </div>
                  <h3 className="font-display font-black text-2xl chrome-text mb-2">You're All Set!</h3>
                  <p className="text-silver mb-6 max-w-sm text-sm leading-relaxed">
                    Our team will reach out within 24 hours to schedule your free strategy session.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #53105B, #8B1A9A)' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="p-8">
                  <h3 className="font-display font-bold text-xl chrome-text mb-8">
                    Start a Conversation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <DrawInput label="Full Name *" placeholder="John Doe" value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)} error={errors.name} />
                    <DrawInput label="Email Address *" type="email" placeholder="john@company.com" value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)} error={errors.email} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <DrawInput label="Phone *" type="tel" placeholder="+91 98765 43210" value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)} error={errors.phone} />
                    <DrawInput label="Company" placeholder="Your Company" value={form.company}
                      onChange={(e) => handleChange('company', e.target.value)} />
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold mb-2 tracking-wider uppercase text-silver">
                      Service Interested In *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="input-dark w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: '#F8F7FF',
                        border: errors.service ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(83,16,91,0.15)',
                        color: form.service ? '#1A1A2E' : '#6B6B7A',
                      }}
                    >
                      <option value="" style={{ background: '#F8F7FF' }}>— Select a Service —</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: '#F8F7FF' }}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.service}</p>}
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-semibold mb-2 tracking-wider uppercase text-silver">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project, challenges, and what you want to achieve..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="input-dark w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={{
                        background: '#F8F7FF',
                        border: '1px solid rgba(83,16,91,0.15)',
                        color: '#1A1A2E',
                      }}
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="magnetic-btn relative w-full py-4 rounded-xl text-base font-bold text-white overflow-hidden group disabled:opacity-70"
                      style={{
                        background: 'linear-gradient(135deg, #53105B, #8B1A9A)',
                      }}
                      // onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(83,16,91,0.5)'; }}
                      // onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(83,16,91,0.35)'; }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (<><SpinnerIcon />Sending...</>) : (<>Send Message<ArrowRightIcon /></>)}
                      </span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(135deg, #8B1A9A, #53105B)' }} />
                    </button>
                  </div>

                  {/* <p className="text-center text-xs text-silver mt-3">
                    No spam. No commitment. 100% free consultation.
                  </p> */}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
