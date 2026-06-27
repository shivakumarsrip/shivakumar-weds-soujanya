import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#120d08',
        card: '#1b130f',
        gold: '#d4af37',
        'light-gold': '#f4e6c2',
        'warm-text': '#f8f3e8',
        accent: '#b98633',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
        cinzel: ['var(--font-cinzel)', 'serif'],
        luxury: ['var(--font-marcellus)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'petal-fall': 'petalFall linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite alternate',
        shimmer: 'shimmer 3s linear infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-16px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-5vh) translateX(0px) rotate(0deg)', opacity: '0' },
          '5%': { opacity: '0.85' },
          '95%': { opacity: '0.55' },
          '100%': { transform: 'translateY(105vh) translateX(80px) rotate(540deg)', opacity: '0' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 8px rgba(212,175,55,0.2), 0 0 16px rgba(212,175,55,0.1)' },
          '100%': { boxShadow: '0 0 24px rgba(212,175,55,0.7), 0 0 48px rgba(212,175,55,0.35)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0%, 0%)' },
          '100%': { transform: 'scale(1.12) translate(-2%, -2%)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f4e6c2 50%, #b98633 100%)',
      },
      boxShadow: {
        gold: '0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.15)',
        'gold-sm': '0 0 10px rgba(212,175,55,0.25)',
        card: '0 8px 40px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
