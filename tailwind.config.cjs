/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { primary:"#2a1erb",},
  },
  plugins: [],
};

module.exports = config;
// module.exports = {
//   "rules": {
//     "@typescript-eslint/no-unsafe-assignment": "error"
//   }
// };