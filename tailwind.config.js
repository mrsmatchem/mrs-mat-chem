/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "rgb(250, 19, 158)",
      secondary: "rgb(5, 4, 83)",
      "primary-blue": "#4472c4",
      "secondary-blue": "#323946",
    },
    extend: {},
  },
  plugins: [],
};
