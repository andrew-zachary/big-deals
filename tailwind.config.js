module.exports = {
    content: [
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        zIndex: {
          '9999': '9999',
          '9998': '9998'
        },
        colors: {
          'black-600': '#00000099',
          'primary': '#f68b1e',
          'secondary': '#f5f5f5'
        },
        boxShadow: {
          'primary': '0 4px 8px 0 rgb(0 0 0 / 20%)'
        },
        gridTemplateRows: {
          'layout': '20% 70% 10%'
        },
        fontSize: {
          'home-brand': '5.6rem'
        }
      },
    },
    plugins: [],
}