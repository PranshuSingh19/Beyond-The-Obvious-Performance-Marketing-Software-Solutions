import { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Job Data ────────────────────────────────────────────────
export const jobPosts = [
  {
    id: 1,
    title: 'Full Stack Developer',
    department: 'Software & Technology',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1-4 Years',
    salary: 'Competitive',
    accent: '#8B1A9A',
    badge: 'Hot',
    postedDate: 'May 26, 2026',
    summary:
      'We are looking for a skilled Full Stack Developer who can build modern, scalable, and high-performance web applications. The candidate should have strong frontend and backend development knowledge with modern frameworks and APIs.',
    techStack: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Redux / Zustand'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MySQL', 'MongoDB', 'PostgreSQL'],
      'Other Skills': ['REST APIs', 'GraphQL', 'Git/GitHub', 'Firebase', 'Authentication Systems', 'Deployment (Vercel, AWS, cPanel)', 'SEO-friendly development'],
    },
    responsibilities: [
      'Develop responsive web applications',
      'Create reusable components',
      'Integrate APIs and third-party services',
      'Optimize website performance',
      'Maintain clean and scalable code',
      'Collaborate with UI/UX designers and marketers',
    ],
    requirements: [
      '1–4 years of full stack development experience',
      'Proficiency in React.js / Next.js and Node.js / Laravel',
      'Strong knowledge of MySQL, MongoDB, or PostgreSQL',
      'Experience with REST APIs and GraphQL',
      'Familiarity with Git/GitHub workflows',
      'Understanding of deployment platforms (Vercel, AWS, cPanel)',
    ],
    niceToHave: [
      'Experience with Firebase or real-time systems',
      'Knowledge of SEO-friendly development practices',
      'Prior work on SaaS or ERP products',
    ],
    perks: [
      'Competitive salary + performance bonus',
      'Remote-first with flexible hours',
      'Annual learning & development budget',
      'Fast-track career growth',
    ],
  },
  {
    id: 2,
    title: 'Business Development Executive',
    department: 'Business Development',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '0–3 Years',
    salary: 'Competitive + Incentives',
    accent: '#7B1A8A',
    badge: 'Urgent',
    postedDate: 'May 26, 2026',
    summary:
      'We are hiring a proactive Business Development Executive who can generate leads, handle client communication, and grow business opportunities for Freelancer\'s Brain.',
    responsibilities: [
      'Generate leads through LinkedIn, email, and social media',
      'Handle client calls and meetings',
      'Create business proposals',
      'Maintain CRM and follow-ups',
      'Convert leads into clients',
      'Build long-term client relationships',
    ],
    requirements: [
      '0–3 years of sales or business development experience',
      'Strong communication and negotiation skills',
      'Experience with CRM tools and email marketing basics',
      'Proficiency with lead generation tools',
      'Self-motivated with a target-driven mindset',
    ],
    niceToHave: [
      'Experience in IT or digital marketing sales',
      'Familiarity with LinkedIn Sales Navigator',
      'Prior experience in a startup or agency environment',
    ],
    perks: [
      'Attractive base + uncapped incentives',
      'Fast-track career growth',
      'Hands-on training & mentorship',
      'Collaborative team culture',
    ],
  },
  {
    id: 3,
    title: 'SEO Executive',
    department: 'Growth Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1–3 Years',
    salary: 'Competitive',
    accent: '#6B0A7A',
    badge: 'New',
    postedDate: 'May 26, 2026',
    summary:
      'Looking for an SEO Executive who can improve website rankings, organic traffic, and search visibility using modern SEO strategies for our diverse client portfolio.',
    responsibilities: [
      'Keyword research and content gap analysis',
      'On-page SEO optimization',
      'Technical SEO audits and fixes',
      'Off-page SEO and link building',
      'Competitor analysis and reporting',
      'Monthly SEO performance reporting',
    ],
    requirements: [
      '1–3 years of hands-on SEO experience',
      'Proficiency with Google Search Console and Google Analytics',
      'Experience with Ahrefs, SEMrush, or Screaming Frog',
      'Knowledge of RankMath / Yoast SEO',
      'Strong analytical and reporting skills',
    ],
    niceToHave: [
      'Experience with local SEO campaigns',
      'Knowledge of content marketing strategies',
      'Familiarity with WordPress CMS',
    ],
    perks: [
      'Remote-friendly work environment',
      'Access to premium SEO tools',
      'Performance-linked bonuses',
      'Continuous learning opportunities',
    ],
  },
  {
    id: 4,
    title: 'Back Office Executive',
    department: 'Operations',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '0–2 Years',
    salary: 'Competitive',
    accent: '#5B0A6A',
    badge: null,
    postedDate: 'May 26, 2026',
    summary:
      'We are looking for a detail-oriented Back Office Executive to manage documentation, reports, data handling, and administrative support for smooth internal operations.',
    responsibilities: [
      'Data entry and documentation management',
      'Excel report creation and management',
      'Client data handling and maintenance',
      'Email coordination and follow-ups',
      'Invoice and file management',
      'Internal operational support',
    ],
    requirements: [
      '0–2 years of back office or administrative experience',
      'Proficiency in MS Excel and Google Sheets',
      'Strong documentation and organizational skills',
      'Good written and verbal communication',
      'Attention to detail and accuracy',
    ],
    niceToHave: [
      'Experience with accounting or invoicing software',
      'Familiarity with project management tools (Notion, Trello)',
      'Prior experience in an agency or IT company',
    ],
    perks: [
      'Stable work environment',
      'Growth into operations management',
      'Friendly and supportive team',
      'On-the-job training provided',
    ],
  },
  {
    id: 5,
    title: 'Social Media Marketing Executive',
    department: 'Growth Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1–3 Years',
    salary: 'Competitive',
    accent: '#7B1A8A',
    badge: 'New',
    postedDate: 'May 26, 2026',
    summary:
      'Seeking a creative Social Media Marketing Executive to manage brand presence and engagement across digital platforms for our clients and internal brand.',
    responsibilities: [
      'Create and execute social media strategies',
      'Manage Instagram, Facebook, and LinkedIn accounts',
      'Schedule and publish content consistently',
      'Run and optimize ad campaigns',
      'Analyze engagement metrics and prepare reports',
      'Research trends and competitor activity',
    ],
    requirements: [
      '1–3 years of social media marketing experience',
      'Proficiency with Canva and Meta Ads Manager',
      'Strong content writing and copywriting skills',
      'Experience with Reels strategy and short-form video',
      'Ability to read and interpret analytics reports',
    ],
    niceToHave: [
      'Experience with influencer marketing',
      'Knowledge of paid social advertising beyond Meta',
      'Video editing skills',
    ],
    perks: [
      'Creative freedom and ownership',
      'Remote-friendly culture',
      'Performance bonuses',
      'Work with diverse brand portfolios',
    ],
  },
  {
    id: 6,
    title: 'Graphic Designer',
    department: 'Branding & Creative',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1–4 Years',
    salary: 'Competitive',
    accent: '#6B0A7A',
    badge: null,
    postedDate: 'May 26, 2026',
    summary:
      'We are hiring a creative Graphic Designer who can create visually appealing digital content for branding, marketing, and social media campaigns across our client portfolio.',
    responsibilities: [
      'Design social media creatives and posts',
      'Create website banners and digital ads',
      'Develop branding materials and brand kits',
      'Design ad creatives for performance campaigns',
      'Create presentation designs and pitch decks',
      'Produce marketing graphics for various channels',
    ],
    requirements: [
      '1–4 years of graphic design experience',
      'Proficiency in Adobe Photoshop and Illustrator',
      'Experience with Figma and Canva',
      'Strong portfolio of digital design work',
      'Understanding of brand guidelines and visual identity',
    ],
    niceToHave: [
      'Experience with CorelDRAW',
      'Motion graphics or basic animation skills',
      'Knowledge of print design',
    ],
    perks: [
      'Access to premium design tools',
      'Creative and collaborative environment',
      'Diverse project exposure',
      'Skill development workshops',
    ],
  },
  {
    id: 7,
    title: 'AI Graphic Designer',
    department: 'Branding & Creative',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1–3 Years',
    salary: 'Competitive',
    accent: '#8B1A9A',
    badge: 'New',
    postedDate: 'May 26, 2026',
    summary:
      'Looking for an AI Graphic Designer who can use AI tools to create high-quality visuals, ad creatives, branding assets, and modern marketing content at scale.',
    responsibilities: [
      'Generate AI-based creatives for campaigns and branding',
      'Create product mockups using AI tools',
      'Enhance and retouch images with AI assistance',
      'Develop ad campaign creatives at scale',
      'Write effective prompts for design generation',
      'Stay updated with the latest AI design tools and techniques',
    ],
    requirements: [
      '1–3 years of design experience (traditional or AI-assisted)',
      'Hands-on experience with Midjourney, Adobe Firefly, or Leonardo AI',
      'Proficiency with Canva AI and ChatGPT for creative workflows',
      'Strong visual sense and aesthetic judgment',
      'Ability to iterate quickly based on feedback',
    ],
    niceToHave: [
      'Experience with Runway ML for video generation',
      'Traditional graphic design skills (Photoshop, Illustrator)',
      'Knowledge of brand identity principles',
    ],
    perks: [
      'Work with cutting-edge AI tools',
      'Remote-first flexibility',
      'Creative autonomy on projects',
      'Fast-growing team with exciting projects',
    ],
  },
  {
    id: 8,
    title: 'AI Agentic Developer',
    department: 'Software & Technology',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1–4 Years',
    salary: 'Competitive',
    accent: '#53105B',
    badge: 'Hot',
    postedDate: 'May 26, 2026',
    summary:
      'We are looking for an AI Agentic Developer who can build AI-powered automation systems, AI agents, chatbots, workflow automations, and intelligent business solutions for our clients.',
    responsibilities: [
      'Build AI agents and automation workflows',
      'Integrate LLM APIs (OpenAI, Anthropic, etc.)',
      'Create multi-step workflow automation systems',
      'Build AI chatbots for client use cases',
      'Implement multi-agent orchestration systems',
      'Develop AI SaaS products and features',
    ],
    requirements: [
      '1–4 years of development experience with Python or Node.js',
      'Hands-on experience with OpenAI APIs and LangChain',
      'Knowledge of Vector Databases and RAG systems',
      'Experience with automation platforms (n8n, Make.com, or Zapier)',
      'Understanding of MCP Architecture',
      'Familiarity with Pinecone, Supabase, and Docker',
    ],
    niceToHave: [
      'Experience building production AI SaaS products',
      'Knowledge of fine-tuning LLMs',
      'Prior work with multi-agent frameworks (AutoGen, CrewAI)',
    ],
    perks: [
      'Work on cutting-edge AI projects',
      'Fully remote with flexible hours',
      'Competitive salary + project bonuses',
      'Access to premium AI tools and APIs',
    ],
  },
  {
    id: 9,
    title: 'UI/UX Designer',
    department: 'Branding & Creative',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    experience: '1–4 Years',
    salary: 'Competitive',
    accent: '#6B0A7A',
    badge: null,
    postedDate: 'May 26, 2026',
    summary:
      'We are seeking a creative UI/UX Designer who can design modern, user-friendly, and visually engaging interfaces for websites and applications across our client portfolio.',
    responsibilities: [
      'Design website UI and landing pages',
      'Create mobile app UI designs',
      'Build wireframes and interactive prototypes',
      'Conduct user research and usability testing',
      'Develop and maintain design systems',
      'Ensure responsive and accessible layouts',
    ],
    requirements: [
      '1–4 years of UI/UX design experience',
      'Expert-level Figma skills',
      'Experience with Adobe XD, Photoshop, and Illustrator',
      'Strong portfolio of web and mobile design work',
      'Understanding of responsive design principles',
    ],
    niceToHave: [
      'Experience with Framer for interactive prototyping',
      'Knowledge of accessibility standards (WCAG)',
      'Basic HTML/CSS understanding',
    ],
    perks: [
      'Creative freedom and design ownership',
      'Access to premium design tools',
      'Collaborative team environment',
      'Regular design reviews and feedback sessions',
    ],
  },
];

// ─── Department colour map ───────────────────────────────────
const deptColors = {
  'Software & Technology': { bg: 'rgba(83,16,91,0.08)', text: '#53105B' },
  'Growth Marketing': { bg: 'rgba(123,26,138,0.08)', text: '#7B1A8A' },
  'Branding & Creative': { bg: 'rgba(107,10,122,0.08)', text: '#6B0A7A' },
  'Workforce & Staffing': { bg: 'rgba(91,10,106,0.08)', text: '#5B0A6A' },
  'Business Development': { bg: 'rgba(139,26,154,0.08)', text: '#8B1A9A' },
  'Operations': { bg: 'rgba(91,10,106,0.08)', text: '#5B0A6A' },
};

// ─── Badge colours ───────────────────────────────────────────
// const badgeColors = {
//   Hot: { bg: '#FFF0F0', text: '#D93025', border: '#FECACA' },
//   Urgent: { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
//   New: { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' },
// };

// ─── Icons ───────────────────────────────────────────────────
const LocationIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);
const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Job Card ────────────────────────────────────────────────
const JobCard = ({ job }) => {
  const dept = deptColors[job.department] || { bg: 'rgba(83,16,91,0.08)', text: '#53105B' };
//   const badge = job.badge ? badgeColors[job.badge] : null;

  return (
    <Link
      to={`/careers/${job.id}`}
      className="block group"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300 h-full"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(83,16,91,0.12)',
          boxShadow: '0 2px 12px rgba(83,16,91,0.06)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = job.accent;
          e.currentTarget.style.boxShadow = `0 8px 32px rgba(83,16,91,0.14)`;
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(83,16,91,0.12)';
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(83,16,91,0.06)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${job.accent}, transparent)` }} />

        <div className="p-5 md:p-6 flex flex-col gap-4 h-full">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: dept.bg, color: dept.text }}
                >
                  {job.department}
                </span>
                {/* {badge && (
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: badge.bg, color: badge.text, border: `1px solid ${badge.border}` }}
                  >
                    {job.badge}
                  </span>
                )} */}
              </div>
              <h3 className="font-display font-bold chrome-text text-lg leading-tight">{job.title}</h3>
            </div>
            <div
              className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${job.accent}, #8B1A9A)`, color: '#fff' }}
            >
              <ArrowRight />
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 text-xs text-silver">
              <LocationIcon />{job.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-silver">
              <ClockIcon />{job.type}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-silver">
              <BriefcaseIcon />{job.experience}
            </span>
          </div>

          {/* Summary */}
          <p className="text-sm text-silver leading-relaxed line-clamp-3 flex-1">{job.summary}</p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(83,16,91,0.08)' }}>
            <span className="text-xs text-silver">Posted {job.postedDate}</span>
            {/* <span className="text-xs font-semibold" style={{ color: job.accent }}>{job.salary}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

// ─── Filter Pill ─────────────────────────────────────────────
const FilterPill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
    style={{
      background: active ? 'linear-gradient(135deg, #53105B, #8B1A9A)' : '#ffffff',
      color: active ? '#ffffff' : '#6B6B7A',
      border: active ? '1px solid transparent' : '1px solid rgba(83,16,91,0.2)',
      boxShadow: active ? '0 4px 16px rgba(83,16,91,0.25)' : 'none',
    }}
  >
    {label}
  </button>
);

// ─── Careers Page ────────────────────────────────────────────
const Careers = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const departments = ['All', ...Array.from(new Set(jobPosts.map((j) => j.department)))];

  const filtered =
    activeFilter === 'All' ? jobPosts : jobPosts.filter((j) => j.department === activeFilter);

  return (
    <div className="min-h-screen" style={{ background: '#F8F7FF' }}>
      {/* ── Hero Banner ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F8F7FF 0%, rgba(83,16,91,0.04) 100%)',
          paddingTop: 'clamp(4rem, 8vw, 8rem)',
          paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(83,16,91,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="site-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.2)', boxShadow: '0 2px 10px rgba(83,16,91,0.08)' }}>
            <span className="text-xs font-semibold text-silver tracking-wider uppercase">We're Hiring</span>
          </div>
          <h1
            className="font-display font-black chrome-text mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Build Your Career at<br />
            <span className="purple-text">Freelancer's Brain</span>
          </h1>
          <p className="text-silver max-w-2xl mx-auto mb-8" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}>
            Join a team of builders, marketers, and creators who are redefining what a full-spectrum agency looks like. Remote-friendly, growth-focused, and always ambitious.
          </p>

        </div>
      </section>

      {/* ── Job Listings ── */}
      <section className="site-container py-12 md:py-16">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {departments.map((d) => (
            <FilterPill key={d} label={d} active={activeFilter === d} onClick={() => setActiveFilter(d)} />
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-silver mb-6">
          Showing <span className="font-semibold chrome-text">{filtered.length}</span> open position{filtered.length !== 1 ? 's' : ''}
          {activeFilter !== 'All' && <> in <span className="font-semibold chrome-text">{activeFilter}</span></>}
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-silver text-lg">No open positions in this department right now.</p>
            <button onClick={() => setActiveFilter('All')} className="mt-4 text-sm font-semibold" style={{ color: '#53105B' }}>
              View all positions →
            </button>
          </div>
        )}
      </section>

      {/* ── CTA Banner ── */}
      <section className="site-container pb-16">
        <div
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #53105B 0%, #8B1A9A 100%)', boxShadow: '0 8px 40px rgba(83,16,91,0.3)' }}
        >
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h2 className="font-display font-black text-white mb-3 relative z-10" style={{ fontSize: 'clamp(1.6rem, 4vw, 4rem)' }}>
            Don't see the right role?
          </h2>
          <p className="text-white/80 mb-6 relative z-10 max-w-lg mx-auto">
            We're always looking for exceptional talent. Send us your CV and we'll reach out when the perfect opportunity opens up.
          </p>
          <a
            href="mailto:frerlancerbrainindia@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative z-10"
            style={{ background: '#ffffff', color: '#53105B', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          >
           Join Our Team - Submit Your CV
            <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
