/** @type {import('tailwindcss').Config} */
export default {
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
        veryLightGray: "#F7F8FA",
        lightGray: "#E5EAEF",
      },
    },
  },
  plugins: [],
};
