/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pr: '#3550DC',
        gen2: 'rgba(166, 166, 166, 1)',
      },
      fontSize: {
        twenFour: '24px',
        thirSix: '36px',
      },
      spacing: {
        screen80: '80vh',
      },
      screens: {
        xxsm2: '400px',
        xxsm: '200px',
        xsm: '600px',
      },
    },
  },
  plugins: [],
}
