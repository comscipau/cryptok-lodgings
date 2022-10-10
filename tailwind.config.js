/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFCE08",
        surface_muted: "#FAFCFF",
        surface_cryptok: "#0D0D0D",
      },
      fontFamily: {
        poppins: ["Poppins", "normal"],
      },
    },
  },
  plugins: [],
}