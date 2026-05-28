/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1e',
          900: '#0d1424',
          800: '#111827',
          700: '#1a2035',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradientShift 12s ease infinite',
        shimmer: 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,229,255,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0,229,255,0.5)' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,229,255,0.25)',
        'glow-lg': '0 0 40px rgba(0,229,255,0.35)',
        'glow-lime': '0 0 20px rgba(163,230,53,0.25)',
      },
    },
  },
  plugins: [],
}

