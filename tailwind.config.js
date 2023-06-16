/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      backgroundImage: theme =>({
        'wave-pattern': 'url(../resource/img/wave-white.png)',
        'wave-pattern-dots': 'url(../resource/img/pattern-white-dots.png)',
        'pattern-characters-red': 'url(../resource/img/pattern-characters-red.png)',
        'character-mario': 'url(../resource/img/character-l.png)',
        'wave-pink': 'url(../resource/img/wave-pink.png)',
        'yellow-dots': 'url(../resource/img/pattern-yellow-dots.png)',

      })
    },
  },
  plugins: [],
}

