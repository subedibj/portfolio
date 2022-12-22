/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primaryGreen: "#31B991",
        darkGreen: "#238669",
        bgBlack: "#1C1C1C",
        headingBlack: "#000000",
        textLightBlack: "#333333",
        descriptionGray: "#C8C8C8",
        textGray: "#535353",
        borderGray: "#CECECE",
        bgLightGreen: "#F2FFFB",
      },
    },
  },
  plugins: [],
};
