import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-frost">Sign with</span>
          <span className="font-display font-bold gradient-text">Vinay</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted text-center">
          Built with{' '}
          <span className="text-accent">Next.js 16</span>
          {' & '}
          <span className="text-accent">Tailwind CSS v4</span>
          {' '}— Designed & developed by Vinay KR &copy; {year}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vi-nayKR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-frost transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/vinay-k-r-a6bb51243"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-frost transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:vinayravindranatha@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-frost transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
