/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-p': 'hsl(1, 90%, 64%)',
        'blue-p': 'hsl(219, 85%, 26%)',
        'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'grayish-blue': 'hsl(219, 14%, 63%)',
        'dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'very-dark-blue': 'hsl(224, 21%, 14%)'
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
