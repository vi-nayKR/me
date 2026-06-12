'use client'
import { useState } from 'react'
import { useInView, useScrollY } from '@/hooks/useParallax'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    label: 'Email',
    value: 'vinayravindranatha@gmail.com',
    href: 'mailto:vinayravindranatha@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 79758 93210',
    href: 'tel:+917975893210',
    Icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vinay-k-r',
    href: 'https://linkedin.com/in/vinay-k-r-a6bb51243',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/vi-nayKR',
    href: 'https://github.com/vi-nayKR',
    Icon: Github,
  },
]

export default function Contact() {
  const { ref, inView } = useInView(0.1)
  const scrollY = useScrollY()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 4000)
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-surface border border-border text-frost placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/60 transition-colors duration-200'

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Parallax glow */}
      <div
        className="parallax-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)',
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.03}px))`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-frost text-balance">
            {"Let's Build Something"}
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            {"Open to new opportunities. Whether it's a full-time role, freelance project, or just a chat about tech — I'd love to hear from you."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            }}
          >
            <div className="space-y-4">
              {contactLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-200 group card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-frost font-medium text-sm mt-0.5 truncate">{value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              ))}
            </div>

            {/* GitHub contribution graph */}
            <div className="mt-8 p-5 rounded-xl bg-surface border border-border">
              <p className="text-xs text-muted font-mono mb-3">GitHub Activity</p>
              <img
                src="https://ghchart.rshah.org/6366f1/vi-nayKR"
                alt="GitHub contribution graph for vi-nayKR"
                className="w-full rounded opacity-80"
              />
            </div>
          </div>

          {/* Contact form */}
          <div
            className="transition-all duration-900"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transitionDelay: '0.15s',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-muted font-mono uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-xs text-muted font-mono uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-xs text-muted font-mono uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the project or opportunity..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-surface border border-border text-muted cursor-default'
                    : 'bg-accent hover:bg-accent-glow text-frost hover:-translate-y-0.5 hover:shadow-xl'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
