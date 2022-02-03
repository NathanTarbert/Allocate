const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange: "#FE5F55",
      blue: {
        dark: "#1D3557",
        oil: "#457B9D",
        medium: "#A8DADC",
        light: "#BCF8EC",
      },
      beije: "#F1FAEE",
      white: "#FFFFFF",
    },
    fontSize: {
      xs: ["9px", "120%"],
      sm: ["11px", "120%"],
      base: ["14px", "120%"],
      md: ["18px", "120%"],
      lg: ["22px", "120%"],
      xl: ["34px", "120%"],
      xxl: ["56px", "120%"],
      hero: ["76px", "120%"],
    },
  },
  plugins: [],
};
