/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(auto-fit, minmax(250px, 400px))'
      },
      colors: {
        'royal-blue': {
          '50': '#eff5ff',
          '100': '#dce7fd',
          '200': '#c1d6fc',
          '300': '#96bdfa',
          '400': '#659af5',
          '500': '#4175f0',
          '600': '#335de6',
          '700': '#2343d2',
          '800': '#2237ab',
          '900': '#213487',
          '950': '#192252',
      },
      }
    },
  },
  plugins: [],
}