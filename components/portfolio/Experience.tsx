'use client'
import { useInView, useScrollY } from '@/hooks/useParallax'

const experiences = [
  {
    role: 'Software Engineer — Full Stack',
    company: 'Liminal Custody',
    period: 'Nov 2025 – Mar 2026',
    location: 'Bengaluru, India',
    type: 'Full-time',
    highlights: [
      'Engineered firewall policy management system with 15+ RESTful APIs and TypeORM transaction rollback',
      'Designed multi-tenant RBAC system with Auth0, 2FA step-up flows & nonce-based replay prevention',
      'Implemented Redis-based caching for cross-chain swap quotes reducing redundant API calls',
      'Built 3 Angular modules (Transaction Risk, Travel Rule, Transfer Policy) with RxJS state management',
    ],
    tags: ['Node.js', 'TypeScript', 'Angular', 'Auth0', 'Redis', 'TypeORM', 'Web3'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Light & Wonder (Scientific Games)',
    period: 'Mar 2023 – Jul 2025',
    location: 'Bengaluru, India',
    type: 'Full-time',
    highlights: [
      'Built RESTful Web APIs in ASP.NET Core/C# for financial transaction system (Cage-Credit)',
      'Developed Angular modules for Engage platform; reduced onboarding load times by ~20%',
      'Engineered AI-driven error logging tool (React + .NET Core + LLM) reducing bug resolution by ~30%',
      'Authored 750+ Cypress E2E test cases, reducing manual UI testing effort by 50%',
    ],
    tags: ['Angular', 'React', 'ASP.NET Core', 'C#', 'SQL Server', 'Cypress', 'TypeScript'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView(0.1)
  const scrollY = useScrollY()

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Parallax accent bar */}
      <div
        className="parallax-layer absolute right-0 top-0 w-px h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.2), transparent)',
          transform: `translateY(${-scrollY * 0.04}px)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-frost text-balance">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${i * 0.18}s`,
                }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-void -translate-x-1/2 mt-6 z-10 animate-pulse-glow" />

                {/* Date (desktop) */}
                <div
                  className={`hidden md:flex w-[calc(50%-2rem)] items-start ${i % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}
                >
                  <div className={i % 2 === 0 ? 'text-right' : 'text-left'}>
                    <span className="text-sm font-mono text-accent">{exp.period}</span>
                    <p className="text-xs text-muted mt-1">{exp.location}</p>
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-6 rounded-2xl bg-surface border border-border card-hover">
                    {/* Mobile date */}
                    <span className="md:hidden text-xs font-mono text-accent block mb-2">{exp.period}</span>

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-frost text-lg">{exp.role}</h3>
                        <p className="text-accent text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted bg-void px-2 py-1 rounded-lg border border-border font-mono whitespace-nowrap shrink-0">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.highlights.map(point => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                          <svg className="w-3 h-3 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs bg-void border border-border text-muted font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
