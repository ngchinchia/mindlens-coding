/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        'custom-shadow': '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: []
}
