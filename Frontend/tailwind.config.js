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
      colors: {
        sky: {
          500: '#0EA5E9', // Keeping the Blue from the logo 'S'
        },
        slate: {
          900: '#111827', // The Deep Dark from the logo text
        },
        brand: {
          blue: '#0EA5E9',
          purple: '#8B5CF6',
          pink: '#EC4899',
          orange: '#F97316',
          dark: '#111827',
        },
        premium: {
          slate: '#111827',
          sky: '#0EA5E9',
          rose: '#EC4899',
          glass: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
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
