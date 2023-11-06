/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "650px",
        lg: "1200px",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      md: "1.2rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4.5rem",
      "5xl": "5rem",
    },
    colors: {
      green: "rgb(78, 225, 160)",
      black: "rgba(21, 21, 21, 0.7)",
      grey: "rgb(36, 36, 36)",
      white: "white",
      lightgray: "lightgray",
    },
    letterSpacing: {
      tight: "-0.2rem",
      normal: "1px",
      slightly_wider: "2px",
      wide: "0.2rem",
    },
  },

  plugins: [],
};
