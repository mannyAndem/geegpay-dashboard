/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#26282C",
        gray: "#DADDDD",
        smokeGray: "#FAFAFA",
        veryLightGray: "#F7F8FA",
        lightGray: "#E5EAEF",
        darkGray: "#9CA4AB",
        green: "#34CAA5",
        red: "#ED544E",

        // dark mode colors:
        darkBlue: "#092635",
        darkGreen: "#1B4242",
        paleGreen: "#5C8374",
        lightGreen: "#9EC8B9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
