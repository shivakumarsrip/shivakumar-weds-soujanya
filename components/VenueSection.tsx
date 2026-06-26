'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const VENUE_FEATURES = [
  {
    icon: <AccessIcon />,
    title: 'Easy Accessibility',
    subtitle: 'Well Connected',
  },
  {
    icon: <ParkingIcon />,
    title: 'Ample Parking',
    subtitle: 'Available',
  },
  {
    icon: <ComfortIcon />,
    title: 'Guest Comfort',
    subtitle: 'Our Priority',
  },
  {
    icon: <StarIcon />,
    title: 'Memorable Experience',
    subtitle: 'Guaranteed',
  },
]

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-24 md:py-32 bg-bg overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Venue" className="mb-14" />
        </ScrollReveal>

        {/* Map + Venue image row */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Map */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.25)] bg-card shadow-card venue-map" style={{ minHeight: '320px' }}>
              <iframe
                src="https://maps.google.com/maps?q=Near+Shivaji+Statue,Hanamkonda,Warangal,Telangana&z=14&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
                className="opacity-90"
              />
              {/* Get Directions button overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a
                  href="https://maps.google.com/?q=Near+Shivaji+Statue,Hanamkonda,Warangal,Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 0 22px rgba(212,175,55,0.45)' }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-bg font-cinzel text-[10px] tracking-[0.22em] uppercase font-semibold shadow-gold-sm"
                  >
                    <Navigation size={13} strokeWidth={2.5} />
                    Get Directions
                  </motion.button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Venue image */}
          <ScrollReveal delay={0.15} direction="left">
            <div
              className="relative rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.25)] shadow-card bg-card"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="https://picsum.photos/seed/venue-night/700/450"
                alt="Wedding venue"
                fill
                className="object-cover"
                style={{ filter: 'sepia(15%) saturate(120%) brightness(0.88)' }}
              />
              {/* Venue info overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 40%, rgba(18,13,8,0.88) 100%)',
                }}
              />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-cinzel text-[10px] tracking-[0.25em] text-gold/80 uppercase mb-1">
                  Wedding Venue
                </p>
                <h3 className="font-cormorant text-xl font-semibold text-warm-text/90 mb-0.5">
                  Near Shivaji Statue
                </h3>
                <p className="font-inter text-xs text-warm-text/55">
                  Ashallapally, Warangal, Telangana
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VENUE_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(212,175,55,0.5)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.1)',
                }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-5 flex flex-col items-center text-center gap-3 border border-[rgba(212,175,55,0.18)]"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.05) 100%)',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <p className="font-cinzel text-[10px] tracking-[0.18em] text-gold/80 uppercase mb-1">
                    {feature.title}
                  </p>
                  <p className="font-inter text-[11px] text-warm-text/50">{feature.subtitle}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function AccessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="5" r="1" />
      <path d="M9 20l3-8 3 8" />
      <path d="M6 10l3 1 1-4 2 4 3-1" />
    </svg>
  )
}

function ParkingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}

function ComfortIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
