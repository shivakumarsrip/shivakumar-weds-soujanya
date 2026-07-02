'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
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
  const [lightboxFamily, setLightboxFamily] = useState<(typeof FAMILIES)[0] | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!lightboxFamily) return
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxFamily(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxFamily])

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
              <FamilyCard family={family} onOpen={() => setLightboxFamily(family)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxFamily && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-4"
            onClick={() => setLightboxFamily(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxFamily.name}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full max-h-[90dvh] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.35)] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80dvh]">
                <Image
                  src={lightboxFamily.image}
                  alt={lightboxFamily.name}
                  fill
                  className="object-contain"
                />
              </div>
              <button
                ref={closeButtonRef}
                onClick={() => setLightboxFamily(null)}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[rgba(18,13,8,0.8)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-warm-text/80 hover:text-gold hover:border-gold/60 transition-all backdrop-blur-sm"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function FamilyCard({
  family,
  onOpen,
}: {
  family: (typeof FAMILIES)[number]
  onOpen: () => void
}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.2)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center gap-5"
    >
      <div
        className="group relative overflow-hidden border-2 border-[rgba(212,175,55,0.45)] shadow-[0_8px_40px_rgba(0,0,0,0.55)] w-[min(340px,calc(100vw-3rem))] h-[220px] sm:w-[420px] sm:h-[280px] rounded-2xl cursor-pointer"
        style={{ background: 'linear-gradient(180deg, #3a2010 0%, #1b130f 100%)' }}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label={`View ${family.name} in full`}
        onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      >
        <div className="absolute inset-1.5 overflow-hidden z-10 rounded-xl">
          <Image
            src={family.image}
            alt={family.name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            style={{ filter: 'sepia(10%) saturate(110%) brightness(0.95)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(18,13,8,0.65) 100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120d08]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
            <div className="w-11 h-11 rounded-full border border-gold/70 bg-[rgba(18,13,8,0.6)] flex items-center justify-center backdrop-blur-sm">
              <ZoomIn size={18} className="text-gold" />
            </div>
          </div>
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
