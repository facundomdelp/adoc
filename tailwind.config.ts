import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    colors: {
      white: '#ffffff',
      bordeaux: '#791919',
      black: '#180101',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'navbar-fade-in': {
          from: { top: '-100%' },
          to: { top: '0' },
        },
        'slide-up': {
          from: { transform: 'translateY(50px)', opacity: '0' },
          '50%': { opacity: '0' },
          to: { transform: 'translateY(0px)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'navbar-fade-in': 'navbar-fade-in 1.5s ease-in-out both',
        'slide-up': 'slide-up 1s ease-out both',
        'fade-in': 'fade-in 1s ease-in-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
