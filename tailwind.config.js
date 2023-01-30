configCss = require('./src/styles/configcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: configCss.colors.blue,
        blue2: configCss.colors.blue2,
      },
      backgroundImage: {
        whiteBoard: "url('/bg-dot.jpg')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        '2xl': '0',
      },
    },
  },
  plugins: [],
};
