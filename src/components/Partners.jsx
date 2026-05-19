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

const partners = [
  { name: 'Meta Business', icon: '📘', bg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
  { name: 'Google Partner', icon: '🔍', bg: 'linear-gradient(135deg, #f87171, #fbbf24)' },
  { name: 'Amazon Ads', icon: '📦', bg: 'linear-gradient(135deg, #fbbf24, #f97316)' },
  { name: 'Shopify Partner', icon: '🛍️', bg: 'linear-gradient(135deg, #22c55e, #059669)' },
  { name: 'HubSpot', icon: '🧲', bg: 'linear-gradient(135deg, #f97316, #ef4444)' },
  { name: 'Klaviyo', icon: '📧', bg: 'linear-gradient(135deg, #a855f7, #6d28d9)' },
  { name: 'Semrush', icon: '📊', bg: 'linear-gradient(135deg, #fb923c, #ef4444)' },
  { name: 'Canva Pro', icon: '🎨', bg: 'linear-gradient(135deg, #06b6d4, #2563eb)' },
];

const Partners = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-xl font-black text-gray-900 mb-1">
            Our Technology &{' '}
            <span className="gradient-text">Media Partners</span>
          </h3>
          <p className="text-sm text-gray-400">Certified and trusted by the world's leading platforms</p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {partners.map(({ name, icon, bg }, i) => (
            <div
              key={name}
              className={`group flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-card transition-all duration-300 card-lift cursor-default transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ background: bg }}>
                {icon}
              </div>
              <span className="text-[10px] font-semibold text-gray-500 text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
