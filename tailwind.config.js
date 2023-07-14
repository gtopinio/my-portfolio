/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'smokey-black': '#0F0F0F',
      },
      fontFamily: {
        body: ['Poppins'],
      }
    },
  },
  plugins: [],
}

