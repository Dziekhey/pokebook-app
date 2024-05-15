/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E85382',
        blue: '#39BADF',
        yellow: '#E1A725'
      }
    },
  },
  plugins: [],
}