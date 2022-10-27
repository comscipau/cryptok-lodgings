/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFCE08",
        surface_muted: "#FAFCFF",
        surface_cryptok: "#0D0D0D",
      },
      backgroundImage: {
        banner: "url('/src/assets/BANNER_1.png')",
        banner_mobile: "url('/src/assets/CROWDMOBILE_2.png')",
        ticket: "url('/src/assets/BLANK_TICKET_1.png')",
        ticket_mobile: "url('/src/assets/BLANK_TICKET_MOBILE.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
