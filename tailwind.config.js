/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '.theme-dark'],
  theme: {
    extend: {
      colors: {
        'body': 'var(--color-base)',
        'body-dark': 'var(--color-base-dark)',
        'paragraph': 'var(--color-paragraph)',
        'heading': 'var(--color-heading)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        'poppins': ["'Poppins'", "sans-serif"],
      }
    },
  },
  plugins: [],
  safelist: ['theme-dark'],
}
