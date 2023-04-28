/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EFEEE0",
        dark: "#1D2123",
        secondary: "#FACD66",
        primary: "#A4C7C6",
        "dark-alt": "#1A1E1F",
        alt: "#A4C7C6",
        "bg-color": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
