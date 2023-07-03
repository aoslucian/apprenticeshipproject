/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
         primary: "#2a1erb",
        },
      },
  },
  plugins: [],
};

module.exports = config;

