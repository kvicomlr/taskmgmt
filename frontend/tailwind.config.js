/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#002868",
        yellowColor: "#ffc000",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        textColor: "#4E545F",
        headingColor: "#0f0f0f"
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
      zIndex:{
        '100': '100',
        '102': '102',
        '103': '103',
        '104': '104',
        '105': '105',

      }
    },
  },
  plugins: [],
};
