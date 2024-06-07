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
        'lx': '1290px',
        'nav-limit': '880px',
      },
      width: {
        '150':' 150px',
        '165': '165%',
        '220': '220%',
        '118' : '28rem',
        '175' : '40rem',
        '200' : '50.5rem',
        '124' : '96%'
      },
      height: {
        '150': '150px',
        '120' : '26rem',
      },
      spacing: {
        '100': '100%',
        '130': '130px',
      },
      animation: {
        fadeInOut: 'fadeInOut 1s ease-in-out', // Adjust the duration as needed
        expand: 'expand 0.5s ease-out',
      },
      fontSize: {
        '2xs': '.90rem',
      }
    },
  },
  plugins: [],
}

