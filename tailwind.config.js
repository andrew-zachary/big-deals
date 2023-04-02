/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f68b1e',
        'primary-dim': '#f9ae62',
        'primary-bg': '#ffffff',
        'secondary': '#00000033',
      },
      fontSize: {
        'sm': '2.2rem'
      },
      maxWidth: {
        'bd-xs': '32rem',
        'bd-sm': '48rem',
        'bd-md': '76.8rem',
        'bd-lg': '99.2rem'
      },
      gridTemplateRows: {
        'bd-base': 'min-content 1fr min-content'
      },
      boxShadow: {
        'secondary': '0 0.4rem 0.8rem 0 #00000033'
      }
    },
  },
  plugins: [],
}