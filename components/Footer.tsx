'use client'

import Image from 'next/image'
import GoldenDivider from './ui/GoldenDivider'

function scrollTo(href: string) {
  if (typeof window === 'undefined') return
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative bg-bg overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg/0 to-bg pointer-events-none" />

      {/* Temple image background — bottom-right, fades in from left */}
      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none">
        <Image
          src="/images/Temple-footer.png"
          alt=""
          fill
          className="object-cover object-right-bottom opacity-25"
        />
        {/* Gradient to fade left edge of the image into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
      </div>

      {/* Gold top divider */}
      <div className="border-t border-[rgba(212,175,55,0.18)]" />

      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8 relative z-10">
        {/* Main columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <p className="font-cinzel text-2xl font-semibold text-gold tracking-[0.2em] mb-4">
              S&amp;S
            </p>
            <p className="font-cormorant italic text-sm text-warm-text/55 leading-relaxed mb-5">
              We invite you to be a part of our beautiful beginning and bless us as we start our
              forever.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-warm-text/50 hover:text-gold hover:border-gold/60 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-[0.28em] text-gold/80 uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['#home', '#couple', '#events', '#gallery', '#rsvp'].map((href) => (
                <li key={href}>
                  <FooterLink
                    label={href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                    href={href}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Venue */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-[0.28em] text-gold/80 uppercase mb-5">
              Venue
            </h4>
            <address className="not-italic">
              <p className="font-inter text-xs text-warm-text/55 leading-relaxed mb-3">
                Near Shivaji Statue,
                <br />
                Ashallapally, Warangal,
                <br />
                Telangana, India
              </p>
              <a
                href="https://maps.google.com/?q=Near+Shivaji+Statue,Hanamkonda,Warangal,Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel text-[9px] tracking-[0.2em] text-gold/70 uppercase hover:text-gold transition-colors border-b border-[rgba(212,175,55,0.3)] hover:border-gold/60 pb-0.5"
              >
                View on Map
              </a>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-[0.28em] text-gold/80 uppercase mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 text-gold/60">{item.icon}</span>
                  <a
                    href={item.href}
                    className="font-inter text-xs text-warm-text/55 hover:text-gold/80 transition-colors leading-relaxed break-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* With Love */}
          <div className="hidden lg:flex flex-col items-end justify-between text-right">
            <div />
            <div>
              <p className="font-cinzel text-[9px] tracking-[0.25em] text-warm-text/40 uppercase mb-3">
                With Love,
              </p>
              <p className="font-script font-bold text-3xl text-gold-gradient leading-tight">
                Shiva Kumar
              </p>
              <p className="font-script font-bold text-3xl text-gold-gradient leading-tight">&amp; Soujanya</p>
              <HeartIcon className="ml-auto mt-3" />
            </div>
          </div>
        </div>

        {/* With Love (mobile) */}
        <div className="lg:hidden text-center mb-10">
          <p className="font-cinzel text-[9px] tracking-[0.25em] text-warm-text/40 uppercase mb-2">
            With Love,
          </p>
          <p className="font-script font-bold text-4xl text-gold-gradient">Shiva Kumar &amp; Soujanya</p>
          <HeartIcon className="mx-auto mt-3" />
        </div>

        {/* Divider */}
        <GoldenDivider className="mb-7" />

        {/* Copyright */}
        <p className="font-inter text-center text-[10px] text-warm-text/35 tracking-widest">
          &copy; 2026 Shiva Kumar &amp; Soujanya. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <button
      type="button"
      onClick={() => scrollTo(href)}
      className="font-inter text-xs text-warm-text/55 hover:text-gold/80 transition-colors duration-200 text-left"
    >
      {label}
    </button>
  )
}

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'tel:+911234567890',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.1 19.79 19.79 0 0 1 1.64 3.5 2 2 0 0 1 3.62 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.73-1.73a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
      </svg>
    ),
  },
]

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.1 19.79 19.79 0 0 1 1.64 3.5 2 2 0 0 1 3.62 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.73-1.73a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
      </svg>
    ),
    label: '+91 12345 67890',
    href: 'tel:+911234567890',
  },
  {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'wedding@shivawedssoujanya.com',
    href: 'mailto:wedding@shivawedssoujanya.com',
  },
  {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: 'www.shivawedssoujanya.com',
    href: '#',
  },
]

function HeartIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#d4af37"
      className={`opacity-70 ${className}`}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
