'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const FILTERS = ['All', 'Pre Wedding', 'Ceremony', 'Celebrations']

const GALLERY_IMAGES = [
  { id: 1, src: '/images/1.PNG', category: 'Pre Wedding', alt: 'Photo 1' },
  { id: 2, src: '/images/2.PNG', category: 'Pre Wedding', alt: 'Photo 2' },
  { id: 3, src: '/images/3.PNG', category: 'Ceremony', alt: 'Photo 3' },
  { id: 4, src: '/images/4.PNG', category: 'Celebrations', alt: 'Photo 4' },
  { id: 5, src: '/images/5.PNG', category: 'Ceremony', alt: 'Photo 5' },
  { id: 6, src: '/images/6.PNG', category: 'Celebrations', alt: 'Photo 6' },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null)

  const filtered =
    activeFilter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeFilter)

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Gallery" className="mb-12" />
        </ScrollReveal>

        {/* Filter buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {FILTERS.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full font-cinzel text-[10px] tracking-[0.22em] uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gold text-bg shadow-[0_0_18px_rgba(212,175,55,0.4)]'
                    : 'border border-[rgba(212,175,55,0.3)] text-warm-text/65 hover:border-gold/60 hover:text-gold/80'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl border border-[rgba(212,175,55,0.2)] bg-card"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/5' }}
                onClick={() => setLightboxImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: 'sepia(12%) saturate(115%) brightness(0.9)' }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d08]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-10 h-10 rounded-full border border-gold/70 bg-[rgba(18,13,8,0.6)] flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn size={16} className="text-gold" />
                  </div>
                </div>
                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[rgba(212,175,55,0.5)] transition-all duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more */}
        <ScrollReveal delay={0.2} className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 26px rgba(212,175,55,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full border border-[rgba(212,175,55,0.4)] text-warm-text/75 font-cinzel text-[10px] tracking-[0.28em] uppercase hover:border-gold/70 hover:text-gold transition-all duration-300"
          >
            View More Photos
          </motion.button>
        </ScrollReveal>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.35)] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                  style={{ filter: 'sepia(10%) saturate(110%) brightness(0.95)' }}
                />
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[rgba(18,13,8,0.8)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-warm-text/80 hover:text-gold hover:border-gold/60 transition-all backdrop-blur-sm"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-0 inset-x-0 py-3 px-5 bg-gradient-to-t from-[rgba(18,13,8,0.9)] to-transparent">
                <p className="font-cinzel text-[10px] tracking-widest text-gold/70 uppercase">
                  {lightboxImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
