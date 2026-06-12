import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Vinay KR — Full Stack Developer',
  description:
    'Full Stack Developer portfolio of Vinay KR — Angular, React, Node.js, Go, TypeScript. 3+ years building production-grade apps in FinTech, Web3 Custody, and Gaming.',
  keywords: ['Full Stack Developer', 'Angular', 'React', 'Node.js', 'Go', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Vinay KR', url: 'https://github.com/vi-nayKR' }],
  openGraph: {
    title: 'Vinay KR — Full Stack Developer',
    description: 'Portfolio of Vinay KR, Full Stack Developer.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth bg-void`}>
      <body className="bg-void text-frost font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
