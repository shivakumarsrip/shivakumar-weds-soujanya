'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

type FormState = {
  name: string
  phone: string
  guests: string
  attending: 'yes' | 'no' | ''
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

export default function RSVPSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    guests: '',
    attending: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    if (!form.guests) e.guests = 'Please select number of guests'
    if (!form.attending) e.attending = 'Please indicate attendance'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="rsvp" className="relative py-24 md:py-32 bg-bg overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle
            title="RSVP"
            subtitle="We can't wait to celebrate with you. Kindly let us know your presence."
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* ── Left: Form ── */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="glass-card rounded-2xl p-7 md:p-9">
              {submitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Name */}
                  <Field
                    label="Full Name(s)"
                    error={errors.name}
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(v) => update('name', v)}
                    type="text"
                  />

                  {/* Phone */}
                  <Field
                    label="Phone Number"
                    error={errors.phone}
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(v) => update('phone', v)}
                    type="tel"
                  />

                  {/* Guests */}
                  <div>
                    <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/60 uppercase mb-2 block">
                      Number of Guests
                    </label>
                    <select
                      title="Number of Guests"
                      aria-label="Number of Guests"
                      value={form.guests}
                      onChange={(e) => update('guests', e.target.value)}
                      className={`w-full bg-bg/70 text-warm-text/80 rounded-lg px-4 py-3 font-inter text-sm border outline-none transition-all duration-300 ${
                        errors.guests
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-[rgba(212,175,55,0.25)] focus:border-gold/70 focus:shadow-[0_0_14px_rgba(212,175,55,0.18)]'
                      }`}
                    >
                      <option value="" disabled>Select</option>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n} className="bg-[#1b130f]">
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    {errors.guests && <FieldError msg={errors.guests} />}
                  </div>

                  {/* Attending */}
                  <div>
                    <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/60 uppercase mb-3 block">
                      Will you be attending?
                    </label>
                    <div className="flex gap-6">
                      {(['yes', 'no'] as const).map((val) => (
                        <label key={val} className="flex items-center gap-2.5 cursor-pointer group">
                          <div
                            onClick={() => update('attending', val)}
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              form.attending === val
                                ? 'border-gold bg-gold/20'
                                : 'border-[rgba(212,175,55,0.35)] group-hover:border-gold/60'
                            }`}
                          >
                            {form.attending === val && (
                              <div className="w-2 h-2 rounded-full bg-gold" />
                            )}
                          </div>
                          <span className="font-inter text-sm text-warm-text/70">
                            {val === 'yes' ? 'Will Attend' : 'Unable to Attend'}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.attending && <FieldError msg={errors.attending} />}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/60 uppercase mb-2 block">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Your wishes for the couple..."
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="w-full bg-bg/70 text-warm-text/80 rounded-lg px-4 py-3 font-inter text-sm border border-[rgba(212,175,55,0.25)] focus:border-gold/70 focus:shadow-[0_0_14px_rgba(212,175,55,0.18)] outline-none resize-none transition-all duration-300 placeholder:text-warm-text/30"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(212,175,55,0.45)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-accent via-gold to-accent font-cinzel text-[11px] tracking-[0.3em] uppercase text-bg font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-gold-sm"
                    style={{
                      backgroundSize: '200% auto',
                      animation: submitting ? 'shimmer 1.5s linear infinite' : 'none',
                    }}
                  >
                    {submitting ? 'Sending...' : 'Submit RSVP'}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* ── Right: Decorative panel ── */}
          <ScrollReveal delay={0.2} direction="left">
            <DecorativePanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  placeholder,
  value,
  onChange,
  type,
}: {
  label: string
  error?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  type: string
}) {
  return (
    <div>
      <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/60 uppercase mb-2 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-bg/70 text-warm-text/85 rounded-lg px-4 py-3 font-inter text-sm border outline-none transition-all duration-300 placeholder:text-warm-text/30 ${
          error
            ? 'border-red-500/60 focus:border-red-400'
            : 'border-[rgba(212,175,55,0.25)] focus:border-gold/70 focus:shadow-[0_0_14px_rgba(212,175,55,0.18)]'
        }`}
      />
      {error && <FieldError msg={error} />}
    </div>
  )
}

function FieldError({ msg }: { msg: string }) {
  return <p className="mt-1.5 font-inter text-[10px] text-red-400/80">{msg}</p>
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 gap-5 text-center"
    >
      <CheckCircle size={48} className="text-gold" />
      <h3 className="font-script font-bold text-4xl text-gold-gradient">Thank You!</h3>
      <p className="font-cormorant italic text-warm-text/65 text-base leading-relaxed max-w-xs">
        Your RSVP has been received. We look forward to celebrating with you on our special day.
      </p>
      <div className="flex items-center gap-3 mt-2">
        <div className="h-px w-8 bg-gold/40" />
        <div className="w-1.5 h-1.5 bg-gold rotate-45" />
        <div className="h-px w-8 bg-gold/40" />
      </div>
    </motion.div>
  )
}

function DecorativePanel() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.25)] min-h-[460px] flex items-end"
      style={{
        background: 'linear-gradient(180deg, #2a1808 0%, #1b130f 60%, #120d08 100%)',
      }}
    >
      {/* Arch frame decoration */}
      <div
        className="absolute inset-x-8 top-8 bottom-16 rounded-t-full border border-[rgba(212,175,55,0.25)]"
        style={{ borderBottomWidth: 0 }}
      />
      <div
        className="absolute inset-x-12 top-12 bottom-16 rounded-t-full border border-[rgba(212,175,55,0.15)]"
        style={{ borderBottomWidth: 0 }}
      />

      {/* Warm golden glow at center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 35%, rgba(212,175,55,0.12) 0%, rgba(180,100,30,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Flower petals decoration */}
      {[
        { bottom: '10%', left: '-5%', size: 90, rotate: -20 },
        { bottom: '8%', right: '-3%', size: 80, rotate: 25 },
        { bottom: '25%', left: '2%', size: 50, rotate: 10 },
      ].map((f, i) => (
        <FlowerDecor key={i} {...f} />
      ))}

      {/* Center text */}
      <div className="relative z-10 w-full text-center px-8 pb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold/40" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="h-px w-10 bg-gold/40" />
        </div>
        <p className="font-cormorant italic text-xl md:text-2xl text-warm-text/80 leading-relaxed">
          Your presence will make our day
        </p>
        <p className="font-cormorant italic text-xl md:text-2xl text-warm-text/80 leading-relaxed mb-4">
          truly special.
        </p>
        <HeartIcon />
      </div>
    </div>
  )
}

function FlowerDecor({
  bottom,
  left,
  right,
  size,
  rotate,
}: {
  bottom: string
  left?: string
  right?: string
  size: number
  rotate: number
}) {
  return (
    <div
      className="absolute pointer-events-none opacity-50"
      style={{ bottom, left, right, width: size, height: size, transform: `rotate(${rotate}deg)` }}
    >
      <svg viewBox="0 0 60 60" fill="none">
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse
            key={i}
            cx="30"
            cy="30"
            rx="8"
            ry="22"
            fill={i % 2 === 0 ? '#e8728c' : '#f0a0b8'}
            fillOpacity="0.7"
            transform={`rotate(${a} 30 30)`}
          />
        ))}
        <circle cx="30" cy="30" r="6" fill="#f4e6c2" fillOpacity="0.9" />
      </svg>
    </div>
  )
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#d4af37" className="mx-auto opacity-80">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
