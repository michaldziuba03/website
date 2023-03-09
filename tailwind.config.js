/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F6F9FF',
        'text': '#4C4F69',
        'heading': '#130303',
        'theme': '#1E66F5',
      },
      fontFamily: {
        'poppins': ["'Poppins'", "sans-serif"],
      }
    },
  },
  plugins: [],
}