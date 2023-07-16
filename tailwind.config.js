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
        'card-container':'#202022',
        'outer-space': '#3a3a3a',
      },
      fontFamily: {
        body: ['Poppins'],
      },
      screens: {
        'lx': '1250px',
        'nav-limit': '880px',
      },
      width: {
        '165': '165%',
        '220': '220%',
      },
      spacing: {
        '100': '100%',
      }
    },
  },
  plugins: [],
}

