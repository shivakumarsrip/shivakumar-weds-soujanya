import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Corinthia, Inter, Cinzel, Marcellus } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import { siteConfig } from '@/lib/site-config'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Corinthia — heavy calligraphic script, closer to the reference design
const corinthia = Corinthia({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-great-vibes', // keep same var so all existing font-script classes work
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  // metadataBase makes all relative image paths absolute, which social crawlers require.
  metadataBase: new URL(siteConfig.url),

  title: siteConfig.ogTitle,
  description: siteConfig.ogDescription,
  keywords: ['wedding', 'invitation', siteConfig.groom, siteConfig.bride, siteConfig.weddingDate, siteConfig.venue],

  // ── Open Graph (Facebook, WhatsApp, LinkedIn, Telegram, Discord, Slack) ──
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    type: 'website',
    url: siteConfig.url,
    siteName: `${siteConfig.groom} & ${siteConfig.bride} Wedding`,
    locale: 'en_US',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.groom} & ${siteConfig.bride} Wedding Invitation`,
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [siteConfig.ogImage],
  },

  // ── General SEO ───────────────────────────────────────────────────────────
  robots: { index: false, follow: false }, // private invitation — keep off search engines
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${corinthia.variable} ${inter.variable} ${cinzel.variable} ${marcellus.variable}`}
    >
      <body className="bg-bg text-warm-text font-inter overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
