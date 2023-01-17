configCss = require('./src/styles/configcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: configCss.colors.green,
      },
    },
    container: {
      center: true,
    },
    backgroundImage: {
      backicon: configCss.backgroundImg.backicon,
    },
  },
  plugins: [],
};
