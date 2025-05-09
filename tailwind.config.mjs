/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      width: {
        '84': '21rem',
      },
      height: {
        '90': '22rem',
      },
      colors: {

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}