/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'grow-shrink': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        'grow-shrink1': 'grow-shrink 5s ease-in-out infinite',
        'grow-shrink2': 'grow-shrink 4s ease-in-out infinite',
        'grow-shrink3': 'grow-shrink 7s ease-in-out infinite',
      },
      colors: {
        'primary': '#212428',
        'secondary': '#1E2024',
        'secondary-text': '#FF0A38',
        'primary-text': '#C4CFDE',

      },
      boxShadow: {
        'custom-1': '10px 10px 10px -10px rgba(0, 0, 0, 0.2)',
        'custom-2': '10px 15px 10px -10px rgba(0, 0, 0, 0.1)',
        'custom-3': '0 5px 5px -2px #111111',
      }
    },
  },
  plugins: [],
}

