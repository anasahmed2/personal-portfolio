/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0c14',
          800: '#11141f',
          700: '#181c2b',
        },
        accent: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
        },
        neon: {
          cyan: '#22d3ee',
          violet: '#a855f7',
          pink: '#f472b6',
          lime: '#a3e635',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45,212,191,0.18), 0 20px 60px -20px rgba(13,148,136,0.45)',
        'glow-lg': '0 0 80px -20px rgba(20,184,166,0.5)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, rgba(5,6,10,0.9))',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'aurora-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -8%) scale(1.15)' },
          '66%': { transform: 'translate(-6%, 6%) scale(0.95)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-8%, 6%) scale(1.1)' },
          '66%': { transform: 'translate(8%, -6%) scale(0.9)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'aurora-1': 'aurora-1 22s ease-in-out infinite',
        'aurora-2': 'aurora-2 26s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
    },
  },
  plugins: [],
}
