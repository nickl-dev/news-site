/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        georgia: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
