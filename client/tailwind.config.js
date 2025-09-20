/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E0FFFF",
          100: "#B2FFFF",
          500: "#00FFFF",
          600: "#00CCCC",
          700: "#009999",
          DEFAULT: "#00FFFF",
        },
        secondary: {
          50: "#E6FFE6",
          100: "#B3FFB3",
          500: "#00FF00",
          600: "#00CC00",
          700: "#009900",
          DEFAULT: "#00FF00",
        },
      },
    },
  },
  plugins: [],
};
