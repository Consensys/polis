/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        first: ["Inter"],
      },
      backgroundImage: {
        "light-pattern": "url('/light-bg.webp')",
        "dark-pattern": "url('/dark-bg.webp')",
        "secondbg-white": "url('/secondbg-white.webp')",
        "secondbg-dark": "url('/secondbg-dark.webp')",
      },
      colors: {
        primary: "#202328",
        secondary: "#454C57",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
