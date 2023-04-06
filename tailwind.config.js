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
        'primary-bg': '#ffff72',
        'secondary': '#0000006b',
      },
      fontSize: {
        'xs': '1.6rem',
        'sm': '2.2rem',
        'md': '3.2rem',
        'lg': '4rem',
        'xl': '5.8rem',
        'xxl': '6rem'
      },
      maxWidth: {
        'bd-xs': '32rem',
        'bd-sm': '48rem',
        'bd-md': '76.8rem',
        'bd-lg': '99.2rem'
      },
      gridTemplateRows: {
        'bd-base': 'auto 1fr'
      },
      boxShadow: {
        'secondary': '0 0.4rem 0.8rem 0 #00000033'
      }
    },
  },
  plugins: [],
}