import { useEffect, useRef, useState } from 'react';

const useReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const services = [
  'Meta Ads', 'Google Ads', 'Amazon Ads', 'SEO', 'Email Marketing',
  'Social Media Marketing', 'Web Development', 'Shopify Development',
  'Branding', 'E-Commerce Marketplace', 'Quick Commerce', 'Other',
];

const budgets = [
  'Under ₹25,000/mo', '₹25K – ₹50K/mo', '₹50K – ₹1L/mo',
  '₹1L – ₹2.5L/mo', '₹2.5L – ₹5L/mo', '₹5L+/mo',
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+91 888888888',
    href: 'tel:+918888888',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@agency.com',
    href: 'mailto:info@agency.com',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'Vijay Nager, Indore, India',
    href: '#',
    color: 'from-cyan-500 to-blue-600',
  },
];

const Contact = () => {
  const [headerRef, headerVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    website: '', service: '', company: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-400 bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 ${
      errors[field] ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-blue-300'
    }`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="blob w-96 h-96 bg-blue-300 -top-20 -right-20 opacity-10" />
      <div className="blob w-80 h-80 bg-purple-300 bottom-0 -left-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Book a Free{' '}
            <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tell us about your business and goals. We'll craft a custom growth strategy — completely free.
          </p>
        </div>

        <div
          ref={formRef}
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {contactInfo.map(({ icon, label, value, href, color }, i) => (
              <a
                key={label}
                href={href}
                className={`flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 card-lift group transition-all duration-700 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</div>
                  <div className="font-bold text-gray-900 mt-0.5">{value}</div>
                </div>
              </a>
            ))}

            {/* Why contact us */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4">What You'll Get</h4>
              <ul className="space-y-3">
                {[
                  'Free 30-min strategy consultation',
                  'Custom marketing roadmap',
                  'Competitor analysis report',
                  'No commitment required',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            {/* <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="text-sm font-semibold text-gray-500 mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', color: 'from-pink-500 to-purple-600' },
                  { name: 'Facebook', color: 'from-blue-600 to-blue-800' },
                  { name: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
                ].map(({ name, color }) => (
                  <button
                    key={name}
                    className={`flex-1 py-2 rounded-xl bg-gradient-to-br ${color} text-white text-xs font-semibold hover:opacity-90 transition-opacity`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 relative overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg animate-float">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">You're All Set!</h3>
                  <p className="text-gray-500 mb-6 max-w-sm">
                    Thanks for reaching out! Our team will contact you within 24 hours to schedule your free strategy call.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', website: '', service: '', company: '', budget: '', message: '' }); }}
                    className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-black text-gray-900 mb-6">Get Your Free Strategy Call</h3>

                  {/* Name row */}
                  <div className="grid grid-cols-1 min-[485px]:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name *</label>
                      <input
                        type="text"
                        placeholder="John"
                        value={form.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        className={inputClass('firstName')}
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        className={inputClass('lastName')}
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 min-[485px]:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        placeholder="+91 58654 65789"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Website + Company */}
                  <div className="grid grid-cols-1 min-[485px]:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Website</label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        value={form.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        className={inputClass('website')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className={inputClass('company')}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Interested In *</label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={inputClass('service')}
                    >
                      <option value="">— Select Service —</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                  </div>

                  {/* Budget */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Monthly Budget</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleChange('budget', b)}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                            form.budget === b
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50/50'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tell Us About Your Goals</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your business, current challenges, and what you want to achieve..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Schedule My Free Strategy Call →</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-3">
                    No spam. No commitment. 100% free consultation.
                  </p>
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
