import GoldenDivider from './GoldenDivider'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ label, title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className="font-cinzel text-[10px] md:text-xs tracking-[0.35em] text-[#d4af37]/80 uppercase mb-2">
          {label}
        </p>
      )}
      <h2 className="font-script font-bold text-5xl md:text-6xl lg:text-7xl text-gold-gradient mb-4 leading-tight">
        {title}
      </h2>
      <GoldenDivider className="mb-4" />
      {subtitle && (
        <p className="font-cormorant text-sm md:text-base text-[#f8f3e8]/60 tracking-wide italic">
          {subtitle}
        </p>
      )}
    </div>
  )
}
