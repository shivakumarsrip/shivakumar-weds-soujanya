'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'
import GoldenDivider from './ui/GoldenDivider'
import { siteConfig } from '@/lib/site-config'

export default function DesignerCredit() {
  const { credit } = siteConfig

  return (
    <section className="relative bg-bg overflow-hidden">
      {/* Ornamental transition divider from the wedding content into the credit section */}
      <div className="pt-12 md:pt-16 pb-6 md:pb-8 flex justify-center">
        <GoldenDivider />
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-14 md:pb-20 relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <p className="font-cinzel text-[9px] md:text-[10px] tracking-[0.4em] text-gold/70 uppercase mb-4">
            Crafted with Passion
          </p>

          <p className="font-cormorant italic text-sm md:text-base text-warm-text/50 tracking-wide mb-1">
            Designed &amp; Developed by
          </p>
          <h3
            className="font-luxury text-gold-gradient uppercase leading-tight mb-6 tracking-[0.12em] text-[1.65rem] sm:text-[2rem] md:text-[2.625rem]"
          >
            {credit.name}
          </h3>

          <GoldenDivider className="mb-6" />

          <p className="font-cormorant italic text-sm md:text-base text-warm-text/45 tracking-wide mb-9 max-w-sm mx-auto">
            Creating Timeless Digital Invitations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
            <CreditButton href={credit.instagramUrl} label="Instagram" icon={<InstagramIcon />} />
            <CreditButton href={credit.whatsappUrl} label="WhatsApp" icon={<WhatsAppIcon />} />
          </div>

          <GoldenDivider className="mb-7" />

          <p className="font-inter text-center text-[10px] text-warm-text/35 tracking-widest">
            &copy; 2026 Nyala Soujanya &amp; Sunkaraboina Shivakumar Wedding Invitation
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CreditButton({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon?: React.ReactNode
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, boxShadow: '0 0 16px rgba(212,175,55,0.2)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass-card text-gold/75 hover:text-light-gold hover:border-gold/55 inline-flex items-center gap-2 px-4 md:px-5 py-[5px] md:py-[7px] rounded-full font-cinzel text-[9px] md:text-[10px] tracking-[0.22em] uppercase font-medium transition-colors duration-300"
    >
      {icon}
      {label}
      <ArrowUpRight size={12} strokeWidth={2.2} />
    </motion.a>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M4 20.5l1.3-4.7A8.4 8.4 0 1 1 8.8 19L4 20.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.9 9.7c.15-.35.3-.36.45-.36.12 0 .24 0 .35.005.11.005.26-.04.4.31.15.35.5 1.24.55 1.33.05.09.08.2.02.32-.06.12-.09.2-.18.3-.09.11-.19.24-.27.33-.09.09-.19.19-.08.37.11.19.5.86 1.08 1.4.74.68 1.37.9 1.56.99.19.09.3.08.42-.05.12-.13.5-.58.63-.78.13-.2.26-.16.44-.1.18.07 1.14.54 1.34.64.2.1.33.15.38.23.05.09.05.5-.11.98-.16.48-.94.9-1.31.95-.34.05-.76.07-1.23-.08a10.6 10.6 0 0 1-1-.37c-1.67-.72-2.76-2.4-2.85-2.51-.08-.11-.68-.9-.68-1.72 0-.82.43-1.22.58-1.39z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
