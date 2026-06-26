'use client'

import { useMemo } from 'react'

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
  driftX: number
  color: string
}

const PETAL_COLORS = [
  '#e8728c',
  '#d4608a',
  '#f0a0b0',
  '#c95878',
  '#e89aaa',
  '#f4c4c8',
]

function PetalSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1 C10 1 18 8 17 15 C16 20 12 25 10 25 C8 25 4 20 3 15 C2 8 10 1 10 1Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M10 1 C10 1 16 9 15 16 C14 21 11 24 10 25 C11 25 17 20 17 15 C18 8 10 1 10 1Z"
        fill={color}
        fillOpacity="0.45"
      />
      <path
        d="M10 3 C10 3 9.5 12 10 20"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function FloatingPetals() {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: (i * 4.7 + Math.sin(i * 2.3) * 12) % 100,
      delay: (i * 1.7) % 18,
      duration: 9 + (i * 1.3) % 10,
      size: 8 + (i * 3) % 10,
      opacity: 0.45 + (i % 4) * 0.12,
      driftX: -30 + (i * 13) % 80,
      color: PETAL_COLORS[i % PETAL_COLORS.length],
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            opacity: p.opacity,
            animation: `petalFall ${p.duration}s ${p.delay}s linear infinite`,
            '--drift-x': `${p.driftX}px`,
          } as React.CSSProperties}
        >
          <PetalSVG color={p.color} size={p.size} />
        </div>
      ))}
    </div>
  )
}
