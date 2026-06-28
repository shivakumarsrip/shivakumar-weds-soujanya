'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'

export default function InvitationNote() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/Gallery_Bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/82" />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          {/* Label */}
          <p className="font-cinzel text-[10px] md:text-[11px] tracking-[0.4em] text-gold/70 uppercase mb-4">
            An Invitation
          </p>

          {/* Title */}
          <h2 className="font-luxury text-4xl sm:text-5xl md:text-6xl text-gold-gradient tracking-[0.12em] uppercase mb-6">
            You Are Invited
          </h2>

          {/* Title divider */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-gold/80" />
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5L10 2Z" fill="#d4af37" fillOpacity="0.9" />
              <circle cx="10" cy="10" r="2" fill="#f4e6c2" />
            </svg>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold/60 to-gold/80" />
          </div>
        </ScrollReveal>

        {/* Card */}
        <ScrollReveal delay={0.12}>
          <motion.div
            className="relative rounded-3xl border border-[rgba(212,175,55,0.4)] overflow-hidden"
            style={{
              background: 'linear-gradient(155deg, rgba(62,34,14,0.7) 0%, rgba(22,15,10,0.88) 55%, rgba(50,28,10,0.65) 100%)',
              boxShadow: '0 12px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.08) inset',
            }}
          >
            {/* Inner gold border */}
            <div className="absolute inset-[6px] rounded-[20px] border border-[rgba(212,175,55,0.18)] pointer-events-none" />

            {/* Corner SVG accents */}
            <svg className="absolute top-4 left-4 opacity-70" width="40" height="40" viewBox="0 0 40 40">
              <path d="M3 20 Q3 3 20 3" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M3 12 Q3 3 12 3" stroke="#d4af37" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeOpacity="0.5" />
              <circle cx="5" cy="5" r="2" fill="#d4af37" fillOpacity="0.75" />
            </svg>
            <svg className="absolute top-4 right-4 opacity-70" width="40" height="40" viewBox="0 0 40 40">
              <path d="M37 20 Q37 3 20 3" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M37 12 Q37 3 28 3" stroke="#d4af37" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeOpacity="0.5" />
              <circle cx="35" cy="5" r="2" fill="#d4af37" fillOpacity="0.75" />
            </svg>
            <svg className="absolute bottom-4 left-4 opacity-70" width="40" height="40" viewBox="0 0 40 40">
              <path d="M3 20 Q3 37 20 37" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M3 28 Q3 37 12 37" stroke="#d4af37" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeOpacity="0.5" />
              <circle cx="5" cy="35" r="2" fill="#d4af37" fillOpacity="0.75" />
            </svg>
            <svg className="absolute bottom-4 right-4 opacity-70" width="40" height="40" viewBox="0 0 40 40">
              <path d="M37 20 Q37 37 20 37" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M37 28 Q37 37 28 37" stroke="#d4af37" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeOpacity="0.5" />
              <circle cx="35" cy="35" r="2" fill="#d4af37" fillOpacity="0.75" />
            </svg>

            <div className="px-5 py-8 sm:px-10 sm:py-12 md:px-16 md:py-14">
              {/* Invitation message */}
              <p className="font-cormorant italic text-xl md:text-2xl text-[#f8f0e0]/90 leading-[1.8] tracking-wide mb-10">
                Your presence, blessings, and love will make this celebration truly unforgettable.
                We look forward to sharing this beautiful beginning with you.
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
                <div className="w-1.5 h-1.5 bg-gold/70 rotate-45" />
                <div className="w-2 h-2 border border-gold/50 rotate-45" />
                <div className="w-1.5 h-1.5 bg-gold/70 rotate-45" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
              </div>

              {/* Date & Venue blocks */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
                {/* Date */}
                <div className="flex-1 flex flex-col items-center gap-1 sm:border-r sm:border-[rgba(212,175,55,0.22)] sm:pr-6">
                  <p className="font-cinzel text-[9px] tracking-[0.4em] text-gold/60 uppercase mb-1">Date</p>
                  <p className="font-cinzel text-xl md:text-2xl font-semibold text-gold tracking-[0.08em]">5th July</p>
                  <p className="font-cinzel text-sm text-gold/70 tracking-[0.2em]">2026</p>
                  <p className="font-cormorant italic text-sm text-warm-text/55 mt-1">Sunday</p>
                </div>

                {/* Center ring icon */}
                <div className="hidden sm:flex flex-col items-center px-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="10" cy="14" r="7" stroke="#d4af37" strokeWidth="1.4" strokeOpacity="0.7" />
                    <circle cx="18" cy="14" r="7" stroke="#d4af37" strokeWidth="1.4" strokeOpacity="0.7" />
                  </svg>
                </div>

                {/* Venue */}
                <div className="flex-1 flex flex-col items-center gap-1 sm:pl-6">
                  <p className="font-cinzel text-[9px] tracking-[0.4em] text-gold/60 uppercase mb-1">Venue</p>
                  <p className="font-cinzel text-base md:text-lg font-semibold text-gold tracking-[0.06em]">Ashallapally</p>
                  <p className="font-cinzel text-sm text-gold/70 tracking-[0.12em]">Warangal</p>
                  <p className="font-cormorant italic text-sm text-warm-text/55 mt-1">Near Shivaji Statue</p>
                </div>
              </div>

            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
