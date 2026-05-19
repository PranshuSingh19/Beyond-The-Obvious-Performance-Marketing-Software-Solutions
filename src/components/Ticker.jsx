const items = [
  'Smart Solutions', '24/7 Service', 'Digital Growth', 'Meta Ads', 'Google Ads',
  'Amazon Ads', 'SEO', 'Email Marketing', 'Web Development', 'Branding',
  'Social Media', 'Performance Marketing', 'E-Commerce Growth', 'ROAS Optimization',
];

const Ticker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-3 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-700 to-transparent z-10 pointer-events-none" />

      <div className="ticker-move flex items-center gap-0">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-0 flex-shrink-0">
            <span className="text-white text-sm font-semibold whitespace-nowrap px-6">{item}</span>
            <span className="text-white/40 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
