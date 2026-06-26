'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const EVENTS = [
  {
    day: 3,
    month: 'JUL',
    year: 2026,
    title: 'Sangeet',
    date: 'Friday, 6:00 PM Onwards',
    description: 'An evening of music, dance and unlimited fun!',
    image: 'https://picsum.photos/seed/sangeet-event/280/190',
    icon: <MusicIcon />,
  },
  {
    day: 4,
    month: 'JUL',
    year: 2026,
    title: 'Mehendi',
    date: 'Saturday, 10:00 AM Onwards',
    description: "Let's celebrate love with colors of mehendi.",
    image: 'https://picsum.photos/seed/mehendi-event/280/190',
    icon: <HennaIcon />,
  },
  {
    day: 5,
    month: 'JUL',
    year: 2026,
    title: 'Wedding',
    date: 'Sunday, 9:30 AM Onwards',
    venue: 'Near Shivaji Statue, Ashallapally, Warangal',
    description: "The prettiest day to say 'I do' and begin forever.",
    image: 'https://picsum.photos/seed/wedding-ceremony/280/190',
    icon: <TempleIcon />,
  },
  {
    day: 5,
    month: 'JUL',
    year: 2026,
    title: 'Reception',
    date: 'Sunday, 7:00 PM Onwards',
    venue: 'Near Shivaji Statue, Ashallapally, Warangal',
    description: 'An evening to celebrate their new beginning.',
    image: 'https://picsum.photos/seed/reception-event/280/190',
    icon: <CelebIcon />,
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="relative py-24 md:py-32 bg-bg overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Events" className="mb-16" />
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {EVENTS.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <EventCard event={event} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, index }: { event: (typeof EVENTS)[number]; index: number }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow:
          '0 16px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.45), 0 0 28px rgba(212,175,55,0.12)',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex items-stretch gap-0 rounded-2xl border border-[rgba(212,175,55,0.25)] bg-card overflow-hidden shadow-card"
    >
      {/* Date badge */}
      <div
        className="flex-shrink-0 flex flex-col items-center justify-center px-5 py-6 min-w-[80px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.05) 100%)',
          borderRight: '1px solid rgba(212,175,55,0.2)',
        }}
      >
        <span className="font-cinzel text-3xl font-bold text-gold leading-none">{event.day}</span>
        <span className="font-cinzel text-[10px] tracking-[0.2em] text-gold/70 mt-1">{event.month}</span>
        <span className="font-cinzel text-[9px] tracking-wider text-warm-text/40 mt-0.5">{event.year}</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center gap-4 p-5 md:p-6">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.06) 100%)',
            border: '1px solid rgba(212,175,55,0.35)',
          }}
        >
          {event.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-gold leading-tight mb-1">
            {event.title}
          </h3>
          <p className="font-cinzel text-[9px] md:text-[10px] tracking-[0.2em] text-warm-text/50 uppercase mb-1.5">
            {event.date}
          </p>
          {'venue' in event && event.venue && (
            <p className="flex items-center gap-1.5 font-inter text-[10px] text-gold/60 mb-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {event.venue}
            </p>
          )}
          <p className="font-inter text-xs md:text-sm text-warm-text/65 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Event image */}
      <div className="flex-shrink-0 relative hidden sm:block" style={{ width: '160px', minHeight: '110px' }}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          style={{
            filter: 'sepia(20%) saturate(120%) brightness(0.88)',
            borderLeft: '1px solid rgba(212,175,55,0.18)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(27,19,15,0.4) 0%, transparent 40%)' }}
        />
      </div>
    </motion.div>
  )
}

function MusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function HennaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
}

function TempleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CelebIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <path d="M8 22l4-11 4 11" />
      <path d="M12 11C12 11 8 7 8 4a4 4 0 0 1 8 0c0 3-4 7-4 7z" />
      <line x1="6" y1="22" x2="18" y2="22" />
    </svg>
  )
}
