/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      outlineWidth: {
        20: '20px',
      },
      maxWidth: {
        '400': '400px',
      },
      spacing: {
        '95': '368px',
      },
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}
