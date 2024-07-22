/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        gradientStart: '#5097fa',
        gradientEnd: '#5363ff',
      },
      backgroundImage: {
        'gradient-to-r-primary': 'linear-gradient(to right, #5097fa, #5363ff)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
