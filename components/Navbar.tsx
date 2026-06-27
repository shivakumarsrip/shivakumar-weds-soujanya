'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#couple', label: 'COUPLE' },
  { href: '#events', label: 'EVENTS' },
  { href: '#gallery', label: 'GALLERY' }
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      {/* Desktop nav pill */}
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#120d08]/92 backdrop-blur-xl border border-[rgba(212,175,55,0.4)] shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
            : 'bg-[#120d08]/55 backdrop-blur-md border border-[rgba(212,175,55,0.18)]'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="font-cinzel text-xl font-semibold text-gold tracking-[0.18em] hover:text-light-gold transition-colors duration-300"
        >
          S&amp;S
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative font-cinzel text-[10px] tracking-[0.25em] text-warm-text/70 hover:text-gold transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300 ease-out" />
            </button>
          ))}
        </nav>

        {/* RSVP + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('#venue')}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gold text-bg font-cinzel text-[10px] tracking-[0.2em] font-semibold hover:bg-light-gold transition-all duration-300 hover:shadow-[0_0_22px_rgba(212,175,55,0.55)]"
          >
            <Calendar size={13} strokeWidth={2.5} />
            VENUE
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 text-gold"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gold transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gold transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#1b130f]/97 backdrop-blur-xl border border-[rgba(212,175,55,0.3)] p-6"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollTo(link.href)
                    setMobileOpen(false)
                  }}
                  className="w-full text-left font-cinzel text-xs tracking-[0.25em] text-warm-text/75 hover:text-gold py-3 border-b border-[rgba(212,175,55,0.12)] transition-colors duration-200 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollTo('#venue')
                  setMobileOpen(false)
                }}
                className="mt-4 w-full py-3 rounded-full bg-gold text-bg font-cinzel text-xs tracking-[0.2em] font-semibold"
              >
                VENUE
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
