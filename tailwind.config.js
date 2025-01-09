/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        game: ['"Press Start 2P"', 'ui-sans-serif'],
        body: ['"PT Sans"', 'ui-sans-serif'],
        legend: ['"UnifrakturCook"', 'serif'],
        story: ['"Macondo Swash Caps"', 'serif']
      },
      colors: {
        'ltShamrock-100': '#279A51',
        'ltShamrock-200': '#218345',
        'ltShamrock-300': '#186233',
        dkShamrock: '#186333',
        'ltDeepSky-100': '#1FB4FF',
        'ltDeepSky-200': '#00A3F5',
        'ltDeepSky-300': '#0088CC',
        'ltViolet-100': '#4C4B63'
      }
    }
  },
  plugins: []
};
