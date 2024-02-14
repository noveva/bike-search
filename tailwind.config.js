/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#00a9e0"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        '2xl': '4rem',
      },
    },
  },
  plugins: [],
}

