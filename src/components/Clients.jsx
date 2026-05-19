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

// Client brand names (text-based logos since we don't have actual SVGs)
const clientBrands = [
  'Ganga Fashions', 'Heritage', 'House of Mira', 'House of Pinks', 'IDRA Wellness',
  'Label Sugar', 'Lil Drama', 'Little Millennium', 'Mahee Jaipur', 'Maitri Jaipur',
  'Munns & Mars', 'Novelty', 'Perfect Optics', 'Pure Asia', 'Raichura',
  'Reroute', 'Rivaa', 'RJDX', 'Saanjh', 'SAVA',
  'Shailja', 'SheSo', 'Siara Women', 'Siya Fashion', 'Squickmons',
  'Steple Jeans', 'Sukruti', 'Takshashila', 'The Clothing Therapy', 'Ultreze',
  'VastraRaag', 'Wonder ALU', 'Yell', 'Yuvani', 'APNY',
  'ARFL', 'Armur', 'Autumn Lane', 'Big Bunny', 'Bombay Bloom',
];

const testimonials = [
  {
    name: 'Aadesh S.',
    role: 'Owner, APNY',
    text: "TechEasify's team excels at finding solutions for PPC campaigns through detailed research. We've worked with them for over 18 months and admire their ability to think from the customer's perspective. Their approach is truly phenomenal — partnering with them is absolutely worth it!",
    rating: 5,
    avatar: 'AS',
    avatarBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
  },
  {
    name: 'Parth D.',
    role: 'Founder, Reroute',
    text: 'Working with this agency has been amazing! When we first approached them, our sales were stagnant and Facebook Ads were underperforming. Their detailed ad account evaluation and multi-channel strategy turned things around, driving 3x growth per month. Truly impressive results!',
    rating: 5,
    avatar: 'PD',
    avatarBg: 'linear-gradient(135deg, #a855f7, #7e22ce)',
  },
  {
    name: 'Bhavesh S.',
    role: 'Owner, Perfect Optics',
    text: 'Their expert advice transformed our failed ad efforts. By combining Meta, Google, email, and WhatsApp strategies, they drove a 55% revenue spike. Their campaigns are fresh, creative, and results-focused — a true hidden engine behind every e-commerce brand\'s success!',
    rating: 5,
    avatar: 'BS',
    avatarBg: 'linear-gradient(135deg, #06b6d4, #2563eb)',
  },
  {
    name: 'Simmi S.',
    role: 'Founder, 17:17 Designer Wear',
    text: "I've worked with three other development companies in the last four years but have remained with this agency for 2 years as they are by far the most competent in creating user-friendly websites. Mostly satisfied with the thoughtfulness and pride the entire team always has in their work.",
    rating: 5,
    avatar: 'SS',
    avatarBg: 'linear-gradient(135deg, #ec4899, #be185d)',
  },
  {
    name: 'Surabhi J.',
    role: 'Founder, Siara Women',
    text: 'This is an all-in-one marketing agency, and their email marketing service stands out in a big way. Within just six weeks, we saw a 40% boost in repeat purchases. They take great care in personalizing every email to make our customers feel special. Their creativity and strategy are unmatched!',
    rating: 5,
    avatar: 'SJ',
    avatarBg: 'linear-gradient(135deg, #22c55e, #15803d)',
  },
  {
    name: 'Rahul M.',
    role: 'CEO, Bombay Bloom',
    text: 'The team completely transformed our digital presence. From a struggling brand to a recognized name in our niche — their 360° approach covering ads, SEO, and social media made all the difference. Our monthly revenue has tripled in just 8 months.',
    rating: 5,
    avatar: 'RM',
    avatarBg: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
];

const caseStudies = [
  {
    brand: 'Ganga Fashions',
    category: 'Fashion E-commerce',
    result: '4.2x ROAS',
    desc: 'Scaled Meta Ads from ₹50K to ₹5L/month while maintaining 4.2x return on ad spend.',
    barColor: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
    icon: '👗',
  },
  {
    brand: 'Perfect Optics',
    category: 'Retail & Eyewear',
    result: '+55% Revenue',
    desc: 'Multi-channel strategy combining Meta, Google, and WhatsApp drove a 55% revenue spike in 3 months.',
    barColor: 'linear-gradient(135deg, #06b6d4, #2563eb)',
    icon: '👓',
  },
  {
    brand: 'Reroute',
    category: 'Lifestyle Brand',
    result: '3x Monthly Growth',
    desc: 'Turned stagnant Facebook Ads into a 3x monthly growth engine through detailed account restructuring.',
    barColor: 'linear-gradient(135deg, #a855f7, #ec4899)',
    icon: '🚀',
  },
  {
    brand: 'Siara Women',
    category: "Women's Fashion",
    result: '+40% Repeat Purchases',
    desc: 'Email marketing automation drove a 40% boost in repeat purchases within just 6 weeks.',
    barColor: 'linear-gradient(135deg, #ec4899, #be185d)',
    icon: '💎',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Clients = () => {
  const [headerRef, headerVisible] = useReveal();
  const [caseRef, caseVisible] = useReveal();
  const [testimonialRef, testimonialVisible] = useReveal();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Duplicate brands for seamless marquee
  const marqueeItems = [...clientBrands, ...clientBrands];

  return (
    <section id="clients" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="blob w-80 h-80 bg-blue-200 top-20 -right-20 opacity-15" />
      <div className="blob w-64 h-64 bg-purple-200 bottom-20 -left-10 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Our Clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Brands That Trust Our{' '}
            <span className="gradient-text">Digital Marketing Expertise</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            150+ brands across fashion, retail, wellness, and e-commerce trust us to grow their revenue.
          </p>
        </div>

        {/* Marquee — Row 1 */}
        <div className="mb-4 overflow-hidden marquee-wrapper">
          <div className="ticker-move flex gap-6 items-center">
            {marqueeItems.map((brand, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm hover:shadow-card hover:border-blue-200 transition-all duration-300 cursor-default"
              >
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee — Row 2 (reverse) */}
        <div className="mb-16 overflow-hidden marquee-wrapper">
          <div className="flex gap-6 items-center" style={{ animation: 'ticker 30s linear infinite reverse' }}>
            {[...marqueeItems].reverse().map((brand, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-card hover:border-blue-300 transition-all duration-300 cursor-default"
              >
                <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        {/* <div
          ref={caseRef}
          className={`mb-20 transition-all duration-700 ${caseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-900">Case Studies</h3>
            <button className="text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors flex items-center gap-1">
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map(({ brand, category, result, desc, barColor, icon }, i) => (
              <div
                key={brand}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 card-lift transition-all duration-700 ${caseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-2" style={{ background: barColor }} />
                <div className="p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{category}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{brand}</h4>
                  <div className="text-2xl font-black gradient-text mb-3">{result}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  <button className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read Case Study
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Testimonials */}
        <div ref={testimonialRef}>
          <div className={`text-center mb-10 transition-all duration-700 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Trusted by Top Brands:{' '}
              <span className="gradient-text">What Our Partners Say</span>
            </h3>
            <p className="text-gray-500">Real results, real stories from real clients.</p>
          </div>

          {/* Featured testimonial */}
          <div className={`transition-all duration-700 delay-200 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100 overflow-hidden mb-8">
              <div className="blob w-64 h-64 bg-blue-300 -top-10 -right-10 opacity-10" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg" style={{ background: testimonials[activeTestimonial].avatarBg }}>
                      {testimonials[activeTestimonial].avatar}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <StarRating count={testimonials[activeTestimonial].rating} />
                    <blockquote className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mt-4 mb-6">
                      "{testimonials[activeTestimonial].text}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</div>
                      <div className="text-sm text-gray-500">{testimonials[activeTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial dots + mini cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {testimonials.map(({ name, role, avatar, avatarBg }, i) => (
                <button
                  key={name}
                  onClick={() => setActiveTestimonial(i)}
                  className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                    activeTestimonial === i
                      ? 'border-blue-300 bg-blue-50 shadow-md'
                      : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/30'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-2" style={{ background: avatarBg }}>
                    {avatar}
                  </div>
                  <div className="text-xs font-bold text-gray-800 truncate">{name}</div>
                  <div className="text-[10px] text-gray-400 truncate">{role}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
