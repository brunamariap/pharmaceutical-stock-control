/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3180BB",
        white: "#FFFFFF",
        gray: "#676767",
        black: "#3D3D3D",
        "background-color": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
