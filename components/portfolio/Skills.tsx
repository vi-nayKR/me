'use client'
import { useInView, useScrollY } from '@/hooks/useParallax'
import { Monitor, Server, Database, Cloud, ShieldCheck, FlaskConical } from 'lucide-react'

const categories = [
  {
    name: 'Frontend',
    Icon: Monitor,
    skills: [
      { name: 'Angular',     level: 95 },
      { name: 'React',       level: 88 },
      { name: 'TypeScript',  level: 92 },
      { name: 'RxJS',        level: 85 },
    ],
  },
  {
    name: 'Backend',
    Icon: Server,
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Go (Chi)',          level: 82 },
      { name: 'ASP.NET Core / C#', level: 80 },
      { name: 'REST API Design',   level: 93 },
    ],
  },
  {
    name: 'Databases',
    Icon: Database,
    skills: [
      { name: 'PostgreSQL',  level: 88 },
      { name: 'Redis',       level: 85 },
      { name: 'SQL Server',  level: 80 },
      { name: 'MongoDB',     level: 72 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    Icon: Cloud,
    skills: [
      { name: 'Docker',           level: 88 },
      { name: 'GitHub Actions',   level: 85 },
      { name: 'AWS (EC2, S3)',    level: 75 },
      { name: 'Cloudflare Tunnel', level: 78 },
    ],
  },
  {
    name: 'Auth & Security',
    Icon: ShieldCheck,
    skills: [
      { name: 'Auth0 / OAuth2',    level: 90 },
      { name: 'JWT & 2FA',         level: 88 },
      { name: 'RBAC Systems',      level: 85 },
      { name: 'Crypto Signatures', level: 78 },
    ],
  },
  {
    name: 'Testing & Quality',
    Icon: FlaskConical,
    skills: [
      { name: 'Cypress E2E',       level: 92 },
      { name: 'Unit Testing',      level: 82 },
      { name: 'Swagger / OpenAPI', level: 85 },
      { name: 'Integration Tests', level: 78 },
    ],
  },
]

const extraTags = [
  'Tailwind CSS', 'MinIO', 'PostGIS', 'LiFi Protocol',
  'EVM / Web3', 'Nginx', 'UFW', 'goose', 'TypeORM', 'pgx/v5', 'Microservices',
]

export default function Skills() {
  const { ref, inView } = useInView(0.1)
  const scrollY = useScrollY()

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax glow */}
      <div
        className="parallax-layer absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Technical Expertise</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-frost text-balance">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ name, Icon, skills }, ci) => (
            <div
              key={name}
              className="p-6 rounded-2xl bg-surface border border-border card-hover transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${ci * 0.08}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-frost">{name}</h3>
              </div>
              <div className="space-y-3">
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-frost font-medium">{skill.name}</span>
                      <span className="text-xs text-muted font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-void rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full skill-bar"
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          background: 'linear-gradient(90deg, #6366f1, #818cf8)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm mb-6 font-mono">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {extraTags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-muted hover:border-accent/40 hover:text-frost transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
