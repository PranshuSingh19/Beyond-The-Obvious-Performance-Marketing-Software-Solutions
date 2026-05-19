import { useEffect, useRef, useState } from 'react';

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

const whyUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Driven Decisions',
    desc: 'Every strategy is backed by deep analytics and real-time performance data to maximize your ROI.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Team',
    desc: 'A dedicated team of certified marketers, designers, and developers working as your growth partners.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rapid Execution',
    desc: 'We move fast. From strategy to launch in days, not weeks — keeping you ahead of the competition.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Transparent Reporting',
    desc: 'Real-time dashboards and weekly reports so you always know exactly where your budget is going.',
  },
];

const milestones = [
  { year: '2016', event: 'Agency Founded', desc: 'Started with a vision to transform digital marketing in India.' },
  { year: '2018', event: '50+ Clients', desc: 'Crossed 50 active clients across fashion, retail, and e-commerce.' },
  { year: '2021', event: 'Multi-Channel Mastery', desc: 'Expanded to Meta, Google, Amazon, and WhatsApp marketing.' },
  { year: '2024', event: '150+ Brands Scaled', desc: 'Became one of India\'s most trusted performance marketing agencies.' },
];

const About = () => {
  const [sectionRef, sectionVisible] = useReveal();
  const [timelineRef, timelineVisible] = useReveal();

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="blob w-72 h-72 bg-purple-300 top-20 right-10 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Result-Driven Digital Marketing &{' '}
            <span className="gradient-text">Web Development Agency</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Because we focus on results that matter to your business — not vanity metrics.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left — image / visual */}
          <div className={`transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Main visual card */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white overflow-hidden shadow-premium">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                }} />
                <div className="relative z-10">
                  <div className="text-6xl font-black mb-2">8+</div>
                  <div className="text-xl font-semibold mb-1">Years of Excellence</div>
                  <div className="text-blue-200 text-sm">Delivering measurable growth since 2016</div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { n: '₹50Cr+', l: 'Ad Spend Managed' },
                      { n: '150+', l: 'Brands Scaled' },
                      { n: '5x', l: 'Average ROAS' },
                      { n: '98%', l: 'Client Retention' },
                    ].map(({ n, l }) => (
                      <div key={l} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                        <div className="text-2xl font-black">{n}</div>
                        <div className="text-xs text-blue-200 mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card-hover p-4 border border-blue-50 max-w-[180px]  md:z-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800">Certified Agency</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-[10px] text-gray-400 mt-1">4.9/5 from 200+ reviews</div>
              </div>
            </div>
          </div>

          {/* Right — why us */}
          <div className={`transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Why Businesses Choose Us as Their{' '}
              <span className="gradient-text">Digital Growth Partner</span>
            </h3>
            <p className="text-gray-500 mb-8">
              We combine creativity with data science to build campaigns that don't just look good — they perform exceptionally.
            </p>

            <div className="space-y-5">
              {whyUs.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 card-lift transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className={`transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Our Journey</h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map(({ year, event, desc }, i) => (
                <div
                  key={year}
                  className={`relative text-center transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white font-black text-sm shadow-glow-blue mb-4 relative z-10">
                    {year.slice(2)}
                  </div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{year}</div>
                  <div className="font-bold text-gray-900 mb-2">{event}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
