'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const GALLERY_IMAGES = [
  { id: 1, src: '/images/1.jpeg', alt: 'Pre Wedding Photo 1' },
  { id: 2, src: '/images/2.jpeg', alt: 'Pre Wedding Photo 2' },
  { id: 3, src: '/images/3.jpeg', alt: 'Ceremony Photo 1' },
  { id: 4, src: '/images/4.jpeg', alt: 'Celebrations Photo 1' },
  { id: 5, src: '/images/5.jpeg', alt: 'Ceremony Photo 2' },
  { id: 6, src: '/images/6.jpeg', alt: 'Celebrations Photo 2' },
  { id: 7, src: '/images/7.jpeg', alt: 'Pre Wedding Photo 3' },
  { id: 8, src: '/images/8.jpeg', alt: 'Pre Wedding Photo 4' },
  { id: 9, src: '/images/9.jpeg', alt: 'Ceremony Photo 3' },
  { id: 10, src: '/images/10.jpeg', alt: 'Celebrations Photo 3' },
  { id: 11, src: '/images/rings.jpeg', alt: 'Wedding Rings' },
]

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!lightboxImage) return
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxImage])

  return (
    <section id="gallery" className="relative pt-16 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Gallery_Bg.png"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg/72" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Gallery" className="mb-8 md:mb-12" />
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.05}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.28)] bg-card aspect-[3/4]"
                onClick={() => setLightboxImage(img)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${img.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d08]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-11 h-11 rounded-full border border-gold/70 bg-[rgba(18,13,8,0.6)] flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn size={18} className="text-gold" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[rgba(212,175,55,0.55)] transition-all duration-400 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImage.alt}
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
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <button
                ref={closeButtonRef}
                onClick={() => setLightboxImage(null)}
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
