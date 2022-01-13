const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '768px',
        xs: '375px',
        ...defaultTheme.screens
      },
      maxWidth: {
        'app-body': '120rem'
      },
      zIndex: {
        '9999': '9999',
        '9998': '9998',
        '9997': '9997'
      },
      colors: {
        'black-600': '#00000099',
        'primary': '#f68b1e',
        'primary-dim': '#f9ae62',
        'secondary': '#00000033'
      },
      boxShadow: {
        'secondary': '0 0.4rem 0.8rem 0 #00000033'
      },
      gridTemplateRows: {
        'layout': '15% 75% 10%',
        'no-footer-layout':'15% 85%'
      },
      fontSize: {
        'home-brand': '5.6rem',
        'home-brand-res': 'calc(1rem + 12vw)'
      },
      fontFamily: {
        mont: ['Montserrat'],
        ssp: ['Source Sans Pro']
      },
      fontWeight: {
        thin: 100,
        'extra-light': 200,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}