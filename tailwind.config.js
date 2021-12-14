module.exports = {
    content: [
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        maxWidth: {
          'app-body': '120rem'
        },
        zIndex: {
          '9999': '9999',
          '9998': '9998'
        },
        colors: {
          'black-600': '#00000099',
          'primary': '#f68b1e',
          'secondary': '#00000033'
        },
        boxShadow: {
          'secondary': '0 0.4rem 0.8rem 0 #00000033'
        },
        gridTemplateRows: {
          'layout': '20% 70% 10%'
        },
        fontSize: {
          'home-brand': '5.6rem'
        },
        fontFamily: {
          mont: ['Montserrat'],
          ssp: ['Source Sans Pro']
        },
        fontWeight: {
          thin: 100,
          'extra-light': 200,
          light: 300,
          regular: 400
        }
      },
    },
    plugins: [],
}