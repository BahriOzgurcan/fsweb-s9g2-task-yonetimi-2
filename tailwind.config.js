/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "alert-red": "#ffd9d4",
        "standart-blue": "#92aee3",
        "standart-green": "#a0d263",
      }
    },
  },
  plugins: [],
}

