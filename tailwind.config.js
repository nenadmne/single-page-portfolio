/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "650px",
        lg: "1200px",
      },
      animation: {
        blurIn: "blurIn 1s ease-out forwards",
      },
      keyframes: {
        blurIn: {
          "0%": { opacity: 0, width: "0%", filter: "blur(20px)" },
          "100%": { opacity: 1, width: "100%", filter: "blur(0px)" },
        },
      },
      backgroundImage: {
        darkPurple:
          "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
      },
    },
    fontSize: {
      xs: "0.6rem",
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
      purple: "rgb(133, 76, 230)",
      lightPurple: "rgba(133, 76, 230, 0.082)",
      black: "rgba(21, 21, 21, 0.7)",
      lighterBlack: "rgba(26, 26, 26)",
      dark: "#242424",
      grey: "rgb(36, 36, 36)",
      white: "white",
      lightgray: "rgba(242, 243, 244, 0.5)",
      bio: "rgb(217, 217, 217)",
    },
    letterSpacing: {
      tight: "-0.2rem",
      normal: "1px",
      slightly_wider: "2px",
      wide: "0.2rem",
    },
    boxShadow: {
      shadow: "4px 4px 4px green",
    },
  },
};
