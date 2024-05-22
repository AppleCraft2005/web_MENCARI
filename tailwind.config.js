/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'calmGreen' : "#4CCD99",
        "darkCalmGreen" : "#2d9f71",
      },
      fontFamily: {
        Kanit : ['kanit'],
      },
    },
  },
  plugins: [],
}

