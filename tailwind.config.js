/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Dancing:["Dancing Script", "cursive"],
        Open:[ "Coming Soon", "cursive"]
      }
    },
  },
  plugins: [],
}