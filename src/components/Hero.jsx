import { useEffect, useRef, useState } from 'react';
import pmImage from '../assets/PM-images.png';

const stats = [
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 5, suffix: 'x', label: 'Avg. ROAS Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 8, suffix: '+', label: 'Years Experience' },
];

const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = value / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-blue-400 top-10 -left-20 animate-pulse-slow" />
      <div className="blob w-80 h-80 bg-purple-400 bottom-20 right-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="blob w-64 h-64 bg-cyan-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 mb-6 shadow-sm">
              {/* <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> */}
              <span className="text-sm font-medium text-gray-600">Performance Marketing Agency</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
              Your Revenue,{' '}
              <span className="gradient-text block">Our Expertise</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Propel your business vision with data-driven marketing solutions. Our world-class marketers turn every click into sales — we don't just deliver campaigns, we deliver{' '}
              <span className="font-semibold text-blue-600">growth and profits</span>.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary px-7 py-3.5 rounded-xl text-base font-semibold shadow-lg hover:shadow-glow-blue transition-all duration-300 flex items-center gap-2"
              >
                <span>Get Free Consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="px-7 py-3.5 rounded-xl text-base font-semibold border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 flex items-center gap-2"
              >
                <span>Our Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              {['Meta Partner', 'Google Partner', 'Amazon Ads'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 shadow-sm border border-gray-100">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-premium p-8 border border-blue-50 overflow-hidden">
                {/* Card gradient top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

                <div className="text-center mb-8">
                  {/* w-xs mx-auto rounded-3xl overflow-hidden mb-4 */}
                  <div className="mb-4">
                    <img src={pmImage} alt="Performance Marketing" className="pmimage w-xs h-auto object-cover rounded-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Result-Driven Growth</h3>
                  <p className="text-sm text-gray-500 mt-1">Data-backed strategies that scale</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map(({ value, suffix, label }) => (
                    <div key={label} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 text-center border border-blue-100/50">
                      <div className="text-3xl font-black gradient-text mb-1">
                        <AnimatedCounter value={value} suffix={suffix} />
                      </div>
                      <div className="text-xs font-medium text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="mt-6 space-y-3">
                  {[
                    { label: 'Meta Ads Performance', pct: 94 },
                    { label: 'Google Ads ROAS', pct: 88 },
                    { label: 'Client Satisfaction', pct: 98 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
                        <span>{label}</span>
                        <span className="text-blue-600">{pct}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000"
                          style={{ width: visible ? `${pct}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card px-8 py-5 border border-green-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">+340% ROAS</div>
                  <div className="text-[10px] text-gray-400">Last Campaign</div>
                </div>
              </div>

              {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-4 py-3 border border-blue-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">150+ Brands</div>
                  <div className="text-[10px] text-gray-400">Trust Us</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
