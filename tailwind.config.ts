/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#EC6724",
          700: "#cb5518",
        },
        gray: "#D9D9D9",
        black: "#000000",
        white: "#F5F5F5",
        red: "#FF0000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

