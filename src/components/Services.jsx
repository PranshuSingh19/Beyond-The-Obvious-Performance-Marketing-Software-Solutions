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
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Meta Ads',
    subtitle: 'Facebook & Instagram',
    desc: 'Hyper-targeted Meta campaigns that drive qualified traffic, leads, and sales with precision audience segmentation.',
    tags: ['Facebook Ads', 'Instagram Ads', 'Retargeting'],
    iconBg: '#eff6ff',
    iconColor: '#2563eb',
    topBar: '#2563eb',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Google Ads',
    subtitle: 'Search & Display',
    desc: 'Dominate search results with high-converting Google campaigns — from Search to Shopping to YouTube.',
    tags: ['Search Ads', 'Shopping Ads', 'YouTube Ads'],
    iconBg: '#fef2f2',
    iconColor: '#ef4444',
    topBar: '#ef4444',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Amazon Ads',
    subtitle: 'Marketplace Growth',
    desc: 'Boost your Amazon visibility and sales with Sponsored Products, Brands, and Display campaigns.',
    tags: ['Sponsored Products', 'DSP', 'Catalog Mgmt'],
    iconBg: '#fefce8',
    iconColor: '#d97706',
    topBar: '#f59e0b',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Development',
    subtitle: 'UI/UX & Dev',
    desc: 'Stunning, conversion-optimized websites and Shopify stores built for performance and user experience.',
    tags: ['UI/UX Design', 'Shopify', 'Web Dev'],
    iconBg: '#faf5ff',
    iconColor: '#7c3aed',
    topBar: '#7c3aed',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Marketing',
    subtitle: 'Retention & Revenue',
    desc: 'Personalized email sequences that nurture leads, recover carts, and drive repeat purchases at scale.',
    tags: ['Automation', 'Drip Campaigns', 'Segmentation'],
    iconBg: '#ecfeff',
    iconColor: '#0891b2',
    topBar: '#06b6d4',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: 'Social Media',
    subtitle: 'Brand Building',
    desc: 'Strategic social media management that builds brand authority, community, and organic reach.',
    tags: ['Content Strategy', 'Community', 'Influencer'],
    iconBg: '#fdf2f8',
    iconColor: '#db2777',
    topBar: '#ec4899',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'SEO',
    subtitle: 'Organic Growth',
    desc: 'Technical and content SEO strategies that rank your brand on page one and drive sustainable organic traffic.',
    tags: ['Technical SEO', 'Content SEO', 'Link Building'],
    iconBg: '#f0fdf4',
    iconColor: '#16a34a',
    topBar: '#22c55e',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Branding',
    subtitle: 'Identity & Strategy',
    desc: 'Craft a powerful brand identity that resonates with your audience and stands out in a crowded market.',
    tags: ['Brand Identity', 'Logo Design', 'Brand Strategy'],
    iconBg: '#eef2ff',
    iconColor: '#4f46e5',
    topBar: '#6366f1',
  },
];

const process = [
  { step: '01', title: 'Discovery & Audit', desc: 'Deep dive into your business, audience, and current marketing performance.' },
  { step: '02', title: 'Strategy Blueprint', desc: 'Custom multi-channel strategy tailored to your goals and budget.' },
  { step: '03', title: 'Launch & Execute', desc: 'Rapid campaign launch with creative assets and precise targeting.' },
  { step: '04', title: 'Optimize & Scale', desc: 'Continuous A/B testing and optimization to maximize ROAS and scale profitably.' },
];

const Services = () => {
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();
  const [processRef, processVisible] = useReveal();

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-blue-300 -top-20 -left-20 opacity-10" />
      <div className="blob w-80 h-80 bg-purple-300 bottom-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our 360° Digital Marketing &{' '}
            <span className="gradient-text">Development Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Smart solutions, 24/7 service, and digital growth — everything your brand needs under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map(({ icon, title, subtitle, desc, tags, iconBg, iconColor, topBar }, i) => (
            <div
              key={title}
              className={`service-card group relative bg-white rounded-2xl p-6 border border-gray-100 card-lift cursor-pointer overflow-hidden transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: topBar }} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 border border-gray-100" style={{ background: iconBg }}>
                  <div style={{ color: iconColor }}>
                    {icon}
                  </div>
                </div>

                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{subtitle}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold bg-gray-100 group-hover:bg-white/70 text-gray-600 rounded-full px-2.5 py-1 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process section */}
        <div
          ref={processRef}
          className={`transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-sm font-semibold uppercase tracking-wider">Our Process</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  Clear Steps That Ensure Scalable, Secure & Hassle-Free Growth
                </h3>
                <p className="text-blue-200 max-w-xl mx-auto">
                  A proven 4-step framework that takes your brand from strategy to scale.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map(({ step, title, desc }, i) => (
                  <div
                    key={step}
                    className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {/* Connector line */}
                    {i < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-white/30 z-10" />
                    )}
                    <div className="text-4xl font-black text-white/20 mb-3">{step}</div>
                    <h4 className="font-bold text-white mb-2">{title}</h4>
                    <p className="text-sm text-blue-200 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
