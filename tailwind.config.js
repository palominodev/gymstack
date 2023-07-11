/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}