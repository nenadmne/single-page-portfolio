/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "650px",
        lg: "1100px",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4.5rem",
      "5xl": "5rem",
    },
  },

  plugins: [],
};
