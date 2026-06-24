/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './views/**/*.ejs'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          body: 'var(--c-body)',
          card: 'var(--c-card)',
        },
        ink: {
          main: 'var(--c-main)',
          muted: 'var(--c-muted)',
          subtle: 'var(--c-subtle)',
        },
        edge: 'var(--c-edge)',
        rule: 'var(--c-rule)',
        inv: {
          bg: 'var(--c-inv-bg)',
          fg: 'var(--c-inv-fg)',
          muted: 'var(--c-inv-muted)',
          dim: 'var(--c-inv-dim)',
        },
      },
      borderWidth: { 3: '3px', 6: '6px' },
      letterSpacing: {
        'tracking-2': '-0.04em',
        'tracking-1': '-0.02em',
        'tracking-0.5': '-0.01em',
      },
    },
  },
  plugins: [],
}
