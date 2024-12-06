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
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'bounce-delayed': 'bounce 3s infinite 0.5s',
        'wiggle': 'wiggle 3s infinite',
        'float': 'float 8s infinite',
        'float-delayed': 'float 8s infinite 2s',
        'float-slow': 'float 10s infinite 1s',
        'pulse-delayed': 'pulse 4s infinite 1s',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

