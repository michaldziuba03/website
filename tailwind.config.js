/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/common/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // light theme variant:
        'body': '#F6F9FF',
        'body-darken': '#E3E9F3',
        'paragraph': '#4C4F69',
        'heading': '#130303',
        'primary': '#1E66F5',
        // dark theme variant:
        'body-dark': '#11111B',
        'body-darken-dark': '#000611',
        'paragraph-dark': '#CDD6F4',
        'heading-dark': '#FAFAFA',
        'primary-dark': '#89B4FA',
      },
      fontFamily: {
        'poppins': ["'Poppins'", "sans-serif"],
      }
    },
  },
  plugins: [],
}