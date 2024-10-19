/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        game: ['"Press Start 2P"', 'ui-sans-serif'],
        body: ['"PT Sans"', 'ui-sans-serif']
      }
    }
  },
  plugins: []
};
