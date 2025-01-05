/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "white":"#ffffff",
      "black":"#000000",
      "gray":"#b6b8b6",
    }
  },
  plugins: [],
}