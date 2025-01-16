/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        custom: "700px"
      },
      colors: {
        black:{
          900: "#002e35"
        },
        blue: {
          500: "#012a5b",
          800: "#142f5f",
          200: "#3FDFD0"
        },
        gray: {
          200: "#e4e8ef"
        },
        white:{
          100: "#fafafc"
        },
        green: {
          200: "#3fe0cf"
        }
      }
    },
  },
  plugins: [],
}

