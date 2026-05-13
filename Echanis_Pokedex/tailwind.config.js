/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pokeRed:    '#fe0065',
        pokeBg:     '#f2f2f2',
        pokeScreen: '#98cb98',
        pokeGray:   '#9e9d9d',
        pokeBtn:    '#585858',
        pokeBlue:   '#7ca9f7',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}