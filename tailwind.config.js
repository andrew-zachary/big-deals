/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f68b1e',
        'primary-dark': '#0ea5e9',
        'primary-dim': '#f9ae62',
        'primary-dim-dark': '#82d8ff',
        'secondary': '#810e0e',
        'primary-bg': 'white',
        'primary-bg-dark': '#0f172a',
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
        'base': '0 0.4rem 0.4rem  #810e0e',
        'base-dark': '0 0 0.6rem 0 white',
      }
    },
  },
  plugins: [],
}