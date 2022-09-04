/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#56e39f",
        secondary: "#f05d5e",
        dark: "#0f110c",
        "gray-dark": "#272932",
      },
    },
  },
  plugins: [],
};
