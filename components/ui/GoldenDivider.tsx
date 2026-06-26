export default function GoldenDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#d4af37]" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
        <path
          d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5L10 2Z"
          fill="#d4af37"
          fillOpacity="0.9"
        />
        <circle cx="10" cy="10" r="2" fill="#f4e6c2" />
      </svg>
      <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#d4af37]" />
    </div>
  )
}
