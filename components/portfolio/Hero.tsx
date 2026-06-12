'use client'
import { useRef, useState } from 'react'
import { useScrollY } from '@/hooks/useParallax'
import { Camera, Github, User } from 'lucide-react'

const techs = [
  'Angular', 'React', 'TypeScript', 'Node.js',
  'Go', 'PostgreSQL', 'Redis', 'Docker', 'Auth0', 'Cypress',
]

export default function Hero() {
  const scrollY = useScrollY()
  const fileRef = useRef<HTMLInputElement>(null)
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setPhotoUrl(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Parallax blobs */}
      <div
        className="parallax-layer absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 65%)',
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="parallax-layer absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,0.09) 0%, transparent 65%)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="parallax-layer absolute top-10 right-10 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Photo circle */}
        <div className="mb-10 animate-float">
          <div className="relative w-40 h-40 group cursor-pointer animate-pulse-glow" onClick={() => fileRef.current?.click()}>
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/40 scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-full border border-accent/20 scale-125 group-hover:scale-150 transition-transform duration-700" />

            {/* Photo or placeholder */}
            {photoUrl ? (
              <>
                <img
                  src={photoUrl}
                  alt="Vinay KR profile photo"
                  className="w-full h-full rounded-full object-cover border-2 border-accent/60"
                />
                <div className="absolute inset-0 rounded-full bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-7 h-7 text-frost" />
                </div>
              </>
            ) : (
              <div className="w-full h-full rounded-full bg-surface border-2 border-border flex flex-col items-center justify-center gap-1.5 group-hover:border-accent/50 transition-colors duration-300">
                <User className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
                <span className="text-xs text-muted group-hover:text-accent transition-colors font-medium leading-tight px-2">
                  Upload Photo
                </span>
              </div>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Name & title */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <p className="text-accent font-mono text-sm tracking-widest mb-3 uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-4">
            <span className="gradient-text">Vinay KR</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
            Building production-grade applications across{' '}
            <span className="text-frost font-medium">FinTech</span>,{' '}
            <span className="text-frost font-medium">Web3 Custody</span>, and{' '}
            <span className="text-frost font-medium">Casino Gaming</span> domains
            with 3+ years of experience.
          </p>
        </div>

        {/* Tech badges */}
        <div
          className="flex flex-wrap justify-center gap-2 mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          {techs.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border text-muted hover:border-accent/50 hover:text-frost transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-glow text-frost font-semibold text-sm transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="https://github.com/vi-nayKR"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl border border-border hover:border-accent/50 text-frost font-semibold text-sm transition-all duration-200 hover:bg-surface hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2 text-muted animate-fade-in-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
