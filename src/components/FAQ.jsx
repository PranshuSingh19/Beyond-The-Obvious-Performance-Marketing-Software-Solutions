import { useState, useEffect, useRef } from 'react';

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

const faqs = [
  {
    q: 'What makes your agency different from others?',
    a: 'We combine deep data analytics with creative strategy to deliver measurable results. Unlike agencies that focus on vanity metrics, we obsess over ROAS, revenue, and real business growth. Every campaign is backed by research, tested rigorously, and optimized continuously.',
  },
  {
    q: 'How quickly can I expect to see results?',
    a: 'Most clients see initial traction within the first 2–4 weeks. Significant, scalable results typically emerge within 60–90 days as we gather data, optimize campaigns, and refine targeting. We set realistic expectations upfront and share weekly progress reports.',
  },
  {
    q: 'What is your minimum monthly budget requirement?',
    a: 'We work with brands starting from ₹25,000/month in ad spend. However, for optimal results and meaningful scale, we recommend a minimum of ₹50,000/month. Our management fees are separate and depend on the scope of services.',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes! While we are headquartered in Surat, India, we manage campaigns for brands across the US, UK, UAE, Australia, and Southeast Asia. Our team is experienced with multi-currency, multi-timezone campaign management.',
  },
  {
    q: 'Which platforms do you specialize in?',
    a: 'We specialize in Meta (Facebook & Instagram), Google (Search, Shopping, YouTube, Display), Amazon (Sponsored Products, DSP), and emerging channels like Quick Commerce. We also handle SEO, email marketing, and social media management.',
  },
  {
    q: 'How do you report on campaign performance?',
    a: 'You get access to a live dashboard with real-time metrics, plus weekly performance reports and monthly strategy reviews. We track KPIs that matter to your business — ROAS, CPA, revenue, and growth — not just impressions and clicks.',
  },
  {
    q: 'Can you help with both ads and website development?',
    a: 'Absolutely. We are a full 360° agency. Our team handles everything from high-converting landing pages and Shopify stores to complete brand identity and ongoing performance marketing — all under one roof for seamless execution.',
  },
  {
    q: 'What is your contract length?',
    a: 'We offer flexible engagement models. Most clients start with a 3-month pilot to see results, then move to longer-term partnerships. We do not lock you into long contracts — we earn your business every month through performance.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="blob w-80 h-80 bg-blue-200 top-10 -right-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left */}
          <div
            ref={ref}
            className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Everything you need to know about our digital marketing services. Can't find your answer?
            </p>

            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
              <div className="relative z-10">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-bold text-lg mb-2">Still have questions?</h4>
                <p className="text-blue-200 text-sm mb-4">
                  Our team is available 24/7 to answer your questions and help you get started.
                </p>
                <a
                  href="tel:+919313961011"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9313961011
                </a>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className={`lg:col-span-3 space-y-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  open === i ? 'border-blue-300 shadow-md' : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-blue-50/30 transition-colors duration-200"
                >
                  <span className={`font-semibold text-sm leading-snug ${open === i ? 'text-blue-700' : 'text-gray-800'}`}>
                    {q}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                    {a}
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

export default FAQ;
