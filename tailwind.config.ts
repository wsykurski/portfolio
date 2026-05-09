/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./app/**/*.{vue,js,ts}', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'rgb(var(--rgb-canvas) / <alpha-value>)',
          soft: 'rgb(var(--rgb-canvas-soft) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--rgb-surface) / <alpha-value>)',
          elevated: 'rgb(var(--rgb-surface-elevated) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          muted: 'rgb(var(--rgb-ink-muted) / <alpha-value>)',
          subtle: 'rgb(var(--rgb-ink-subtle) / <alpha-value>)',
        },
        line: {
          DEFAULT: 'rgb(var(--rgb-line) / <alpha-value>)',
          soft: 'rgb(var(--rgb-line-soft) / <alpha-value>)',
        },
        accent: {
          olive: 'rgb(var(--rgb-accent-olive) / <alpha-value>)',
          khaki: 'rgb(var(--rgb-accent-khaki) / <alpha-value>)',
        },
        signal: {
          ok: 'rgb(var(--rgb-signal-ok) / <alpha-value>)',
          warn: 'rgb(var(--rgb-signal-warn) / <alpha-value>)',
          danger: 'rgb(var(--rgb-signal-danger) / <alpha-value>)',
        },
      },
      borderRadius: {
        ui: '0.75rem',
      },
      boxShadow: {
        ui: 'var(--shadow-ui)',
      },
      letterSpacing: {
        tactical: '0.08em',
      },
    },
  },
  plugins: [],
}
