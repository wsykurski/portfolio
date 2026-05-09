/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0B0F14',
          soft: '#0F1620',
        },
        surface: {
          DEFAULT: '#121A24',
          elevated: '#172231',
        },
        ink: {
          DEFAULT: '#E6EDF6',
          muted: '#A6B0BE',
          subtle: '#7D8796',
        },
        line: {
          DEFAULT: '#233246',
          soft: '#1B2738',
        },
        accent: {
          olive: '#7E8F3E',
          khaki: '#B7B07A',
        },
        signal: {
          ok: '#34D399',
          warn: '#FBBF24',
          danger: '#F87171',
        },
      },
      borderRadius: {
        ui: '0.75rem',
      },
      boxShadow: {
        ui: '0 1px 0 0 rgba(255,255,255,0.04), 0 18px 40px -24px rgba(0,0,0,0.85)',
      },
      letterSpacing: {
        tactical: '0.08em',
      },
    },
  },
  plugins: [],
}
