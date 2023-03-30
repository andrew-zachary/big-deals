/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'bd-xs': '32rem',
        'bd-sm': '48rem',
        'bd-md': '76.8rem',
        'bd-lg': '99.2rem'
      },
      gridTemplateRows: {
        'bd-base': 'min-content 1fr min-content'
      }
    },
  },
  plugins: [],
}