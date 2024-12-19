/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      letterSpacing: {
        extraWide: '0.3rem', // Example of custom spacing
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif",],
        montserrat: ["Montserrat", "sans-serif",],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        'input[type="number"]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        'input[type="number"]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        'input[type="number"]': {
          '-moz-appearance': 'textfield',
        },
      });
    },
  ],
}
