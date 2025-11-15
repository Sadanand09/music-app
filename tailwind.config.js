/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "black-100": "#000000",
        "black-200": "#1A1A1A",
        "black-300": "#333333",

        "primary-100": "#EAF1FF",
        "primary-200": "#C9DCFF",
        "primary-300": "#0061FF",
      },
    },
  },
  plugins: [],
};
