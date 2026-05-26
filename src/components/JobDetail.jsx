import { useParams, Link, useNavigate } from 'react-router-dom';
import { jobPosts } from './Careers';

// ─── Icons ───────────────────────────────────────────────────
const BackIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);
const CheckIcon = ({ color }) => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke={color || '#53105B'} viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const DotIcon = ({ color }) => (
  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: color || '#53105B', display: 'inline-block' }} />
);
const LocationIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);
const MoneyIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);
const CalendarIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Section Block ────────────────────────────────────────────
const Section = ({ title, accent, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-5 rounded-full" style={{ background: `linear-gradient(180deg, ${accent}, transparent)` }} />
      <h2 className="font-display font-bold chrome-text text-lg">{title}</h2>
    </div>
    {children}
  </div>
);

// ─── Job Detail Page ──────────────────────────────────────────
const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobPosts.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#F8F7FF' }}>
        <p className="text-silver text-lg">Job not found.</p>
        <Link to="/careers" className="text-sm font-semibold" style={{ color: '#53105B' }}>
          ← Back to Careers
        </Link>
      </div>
    );
  }

  // Related jobs (same department, excluding current)
  const related = jobPosts.filter((j) => j.department === job.department && j.id !== job.id).slice(0, 2);

  return (
    <div className="min-h-screen" style={{ background: '#F8F7FF' }}>
      {/* ── Top bar ── */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{ background: 'rgba(248,247,255,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(83,16,91,0.1)' }}
      >
        <div className="site-container h-14 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate('/careers')}
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#6B6B7A' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#53105B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6B7A')}
          >
            <BackIcon />
            All Positions
          </button>
        </div>
      </div>

      <div className="site-container py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">

          {/* ── Main Content ── */}
          <div className="flex-1 min-w-0">
            {/* Job header */}
            <div
              className="rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden"
              style={{ background: '#ffffff', border: `1px solid ${job.accent}30`, boxShadow: '0 4px 24px rgba(83,16,91,0.08)' }}
            >
              <div className="h-1 absolute top-0 left-0 right-0" style={{ background: `linear-gradient(90deg, ${job.accent}, transparent)` }} />
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${job.accent}15`, color: job.accent }}
                >
                  {job.department}
                </span>
                {/* {job.badge && (
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: job.badge === 'Hot' ? '#FFF0F0' : job.badge === 'Urgent' ? '#FFF7ED' : '#F0FDF4',
                      color: job.badge === 'Hot' ? '#D93025' : job.badge === 'Urgent' ? '#C2410C' : '#15803D',
                    }}
                  >
                    {job.badge}
                  </span>
                )} */}
              </div>
              <h1 className="font-display font-black chrome-text mb-4 leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                {job.title}
              </h1>
              <p className="text-silver leading-relaxed mb-6" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
                {job.summary}
              </p>
            </div>

            {/* Responsibilities */}
            <Section title="What You'll Do" accent={job.accent}>
              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-silver leading-relaxed">
                    <CheckIcon color={job.accent} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Tech Stack (Full Stack / AI roles) */}
            {job.techStack && (
              <Section title="Required Tech Stack" accent={job.accent}>
                <div className="flex flex-col gap-5">
                  {Object.entries(job.techStack).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: job.accent }}>{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium"
                            style={{ background: `${job.accent}10`, border: `1px solid ${job.accent}25`, color: '#1A1A2E' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Requirements */}
            <Section title="What We're Looking For" accent={job.accent}>
              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-silver leading-relaxed">
                    <CheckIcon color={job.accent} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Nice to have */}
            {job.niceToHave?.length > 0 && (
              <Section title="Nice to Have" accent={job.accent}>
                <ul className="space-y-2.5">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-silver leading-relaxed">
                      <DotIcon color={job.accent} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Perks */}
            {job.perks?.length > 0 && (
              <Section title="Perks & Benefits" accent={job.accent}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.perks.map((perk) => (
                    <div
                      key={perk}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
                      style={{ background: `${job.accent}08`, border: `1px solid ${job.accent}20`, color: '#1A1A2E' }}
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: job.accent }} />
                      {perk}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Apply CTA */}
            <div
              className="rounded-2xl p-6 md:p-8 text-center relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${job.accent} 0%, #8B1A9A 100%)`, boxShadow: '0 8px 32px rgba(83,16,91,0.25)' }}
            >
              <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
              <h3 className="font-display font-bold text-white text-xl mb-2 relative z-10">Ready to apply?</h3>
              <p className="text-white/80 text-sm mb-5 relative z-10">
                Send your CV and a short cover note to our team.
              </p>
              <a
                href={`mailto:frerlancerbrainindia@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 relative z-10"
                style={{ background: '#ffffff', color: job.accent }}
              >
                Apply via Email
                <ArrowRight />
              </a>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-20 flex flex-col gap-5">

              {/* Job details card */}
              <div
                className="rounded-2xl p-5 md:p-6"
                style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.12)', boxShadow: '0 2px 12px rgba(83,16,91,0.06)' }}
              >
                <h3 className="font-display font-bold chrome-text text-base mb-4">Job Details</h3>
                <ul className="space-y-3.5">
                  {[
                    { icon: <LocationIcon />, label: 'Location', value: job.location },
                    { icon: <ClockIcon />, label: 'Job Type', value: job.type },
                    { icon: <BriefcaseIcon />, label: 'Experience', value: job.experience },
                    // { icon: <MoneyIcon />, label: 'Salary', value: job.salary },
                    { icon: <CalendarIcon />, label: 'Posted', value: job.postedDate },
                  ].map(({ icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="mt-0.5" style={{ color: job.accent }}>{icon}</span>
                      <div>
                        <p className="text-xs text-silver">{label}</p>
                        <p className="text-sm font-medium chrome-text">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share / Apply */}
              <a
                href={`mailto:frerlancerbrainindia@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200"
                style={{ background: `linear-gradient(135deg, #53105B, #8B1A9A)`, boxShadow: '0 4px 16px rgba(83,16,91,0.3)' }}
              >
                Apply Now
                <ArrowRight />
              </a>

              {/* Related jobs */}
              {related.length > 0 && (
                <div
                  className="rounded-2xl p-5 md:p-6"
                  style={{ background: '#ffffff', border: '1px solid rgba(83,16,91,0.12)', boxShadow: '0 2px 12px rgba(83,16,91,0.06)' }}
                >
                  <h3 className="font-display font-bold chrome-text text-base mb-4">Similar Roles</h3>
                  <div className="flex flex-col gap-3">
                    {related.map((r) => (
                      <Link
                        key={r.id}
                        to={`/careers/${r.id}`}
                        className="block p-3 rounded-xl transition-all duration-200"
                        style={{ background: 'rgba(83,16,91,0.04)', border: '1px solid rgba(83,16,91,0.08)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = r.accent; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(83,16,91,0.08)'; }}
                      >
                        <p className="text-sm font-semibold chrome-text mb-1">{r.title}</p>
                        <p className="text-xs text-silver">{r.location} · {r.type}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
