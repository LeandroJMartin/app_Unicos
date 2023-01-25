configCss = require('./src/styles/configcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: configCss.colors.blue,
      },
    },
    fontSize: {
      xs: ['10px', '16px'],
      sm: ['12px', '18px'],
      base: ['14px', '20px'],
      lg: ['18px', '26px'],
      xl: ['24px', '32px'],
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
