const theme = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss/defaultTheme').Theme}
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#039cd2',
        secondary: '#e2007a',
      },
      fontFamily: {
        sans: ['Montserrat', ...theme.fontFamily.sans],
      },
      boxShadow: {
        kbm: '0 15px 0 0 #fff, 0 0 15px 0 hsl(0deg 0% 57% / 20%)',
      },
    },
  },
};
