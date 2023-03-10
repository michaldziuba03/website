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
        'error': '#d20f39',
        'mauve': '#8839ef',
        'flamingo': '#dd7878',
        'teal': '#179299',
        'lavender': '#7287fd',
        'peach': '#E75400',
        // brand colors:
        'nestjs': '#E0234E',
        'tor': '#60048E',
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