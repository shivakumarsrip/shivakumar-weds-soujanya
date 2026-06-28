'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const FAMILIES = [
  {
    name: "Shivakumar's Family",
    image: '/images/Groom%20Family.jpeg',
  },
  {
    name: "Soujanya's Family",
    image: '/images/Bride%20Family.jpeg',
  },
]

export default function FamilySection() {
  return (
    <section id="family" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/Gallery_Bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/72" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Family" className="mb-8 md:mb-16" />
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {FAMILIES.map((family, i) => (
            <ScrollReveal key={family.name} delay={i * 0.15} direction={i === 0 ? 'right' : 'left'}>
              <FamilyCard family={family} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FamilyCard({ family }: { family: (typeof FAMILIES)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.2)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center gap-5"
    >
      <div
        className="relative overflow-hidden border-2 border-[rgba(212,175,55,0.45)] shadow-[0_8px_40px_rgba(0,0,0,0.55)] w-[min(340px,calc(100vw-3rem))] h-[220px] sm:w-[420px] sm:h-[280px] rounded-2xl"
        style={{ background: 'linear-gradient(180deg, #3a2010 0%, #1b130f 100%)' }}
      >
        <div className="absolute inset-1.5 overflow-hidden z-10 rounded-xl">
          <Image
            src={family.image}
            alt={family.name}
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            style={{ filter: 'sepia(10%) saturate(110%) brightness(0.95)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(18,13,8,0.65) 100%)' }}
          />
        </div>

        {/* Decorative corner accents */}
        <svg className="absolute top-2 left-2 z-20 opacity-70" width="28" height="28" viewBox="0 0 28 28">
          <path d="M2 14 Q2 2 14 2" stroke="#d4af37" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="4" cy="4" r="1.5" fill="#d4af37" fillOpacity="0.6" />
        </svg>
        <svg className="absolute top-2 right-2 z-20 opacity-70" width="28" height="28" viewBox="0 0 28 28">
          <path d="M26 14 Q26 2 14 2" stroke="#d4af37" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="24" cy="4" r="1.5" fill="#d4af37" fillOpacity="0.6" />
        </svg>
        <svg className="absolute bottom-2 left-2 z-20 opacity-70" width="28" height="28" viewBox="0 0 28 28">
          <path d="M2 14 Q2 26 14 26" stroke="#d4af37" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="4" cy="24" r="1.5" fill="#d4af37" fillOpacity="0.6" />
        </svg>
        <svg className="absolute bottom-2 right-2 z-20 opacity-70" width="28" height="28" viewBox="0 0 28 28">
          <path d="M26 14 Q26 26 14 26" stroke="#d4af37" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="24" cy="24" r="1.5" fill="#d4af37" fillOpacity="0.6" />
        </svg>
      </div>

      <h3 className="font-cinzel text-base md:text-lg font-semibold text-gold tracking-[0.12em] text-center">
        {family.name}
      </h3>
    </motion.div>
  )
}
