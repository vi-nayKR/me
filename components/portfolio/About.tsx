'use client'
import { useInView, useScrollY } from '@/hooks/useParallax'
import { BookOpen, MapPin, Lightbulb } from 'lucide-react'

const stats = [
  { value: '3+',   label: 'Years\nExperience' },
  { value: '750+', label: 'Cypress\nTests' },
  { value: '15+',  label: 'APIs\nBuilt' },
]

const cards = [
  {
    icon: BookOpen,
    title: 'Education',
    desc: 'B.E. Computer Science — Siddaganga Institute of Technology, CGPA 8.65 (2019–2023)',
  },
  {
    icon: MapPin,
    title: 'Location',
    desc: 'Bengaluru, India — Open to remote & hybrid opportunities worldwide',
  },
  {
    icon: Lightbulb,
    title: 'Interests',
    desc: 'Agentic coding, distributed systems architecture, Web3, and open-source development',
  },
]

export default function About() {
  const { ref, inView } = useInView(0.2)
  const scrollY = useScrollY()

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax accent line */}
      <div
        className="parallax-layer absolute left-0 top-0 w-px h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.3), transparent)',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-frost mb-6 leading-tight text-balance">
              Passionate about{' '}
              <span className="gradient-text">Architecture & Code</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Full Stack Developer with 3+ years of experience building production-grade web
              applications and APIs across FinTech, Web3 custody, and casino gaming domains.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Equally comfortable building{' '}
              <span className="text-frost font-medium">Angular</span> and{' '}
              <span className="text-frost font-medium">React</span> frontends as designing{' '}
              <span className="text-frost font-medium">Go</span> and{' '}
              <span className="text-frost font-medium">Node.js/Express</span> backend services.
              Strong believer in clean architecture, security-first design, and agentic coding.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-1 leading-tight whitespace-pre-line">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info cards */}
          <div
            className="space-y-4 transition-all duration-900"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: '0.15s',
            }}
          >
            {cards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-xl bg-surface border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-frost mb-1">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{desc}</p>
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
