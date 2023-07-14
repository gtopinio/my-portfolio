/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'smokey-black': '#0F0F0F',
        'mirage-gray': '#1e1e20',
        'gray-container': '#2b2b2d',
      },
      fontFamily: {
        body: ['Poppins'],
      }
    },
  },
  plugins: [],
}

