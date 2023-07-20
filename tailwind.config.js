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
        '150':' 150px',
        '165': '165%',
        '220': '220%',
        '118' : '28rem',
        '175' : '40rem',
      },
      height: {
        '150': '150px',
      },
      spacing: {
        '100': '100%',
        '130': '130px',
      },
      animation: {
        fadeInOut: 'fadeInOut 1s ease-in-out', // Adjust the duration as needed
      },
      fontSize: {
        '2xs': '.85rem',
      }
    },
  },
  plugins: [],
}

