import type { Metadata } from 'next'
import { Cormorant_Garamond, Corinthia, Inter, Cinzel } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

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

export const metadata: Metadata = {
  title: 'Shiva Kumar & Soujanya — Wedding Invitation',
  description:
    'You are cordially invited to celebrate the auspicious union of Shiva Kumar & Soujanya on 5th July 2026 at Warangal, Telangana.',
  keywords: ['wedding', 'invitation', 'Shiva Kumar', 'Soujanya', 'July 2026', 'Warangal', 'Telangana'],
  openGraph: {
    title: 'Shiva Kumar & Soujanya — Wedding Invitation',
    description: 'Two hearts, one promise. Join us on 5th July 2026.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${corinthia.variable} ${inter.variable} ${cinzel.variable}`}
    >
      <body className="bg-bg text-warm-text font-inter overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
