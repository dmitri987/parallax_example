const defaultTheme = require('tailwindcss/defaultTheme');
// console.log(defaultTheme);

module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['"Mulish"', 'sans-serif'],
      },
      fontSize: {
        'heading': 'clamp(2.5rem, calc(3vw+1.25rem), 5.5rem)',
        'p': [ 'clamp(1.25rem, calc(1.25vw + 0.5rem), 3rem)', '1.25' ],
      }
    }
  }
}

