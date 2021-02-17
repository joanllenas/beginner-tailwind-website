const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      teal: colors.teal,
      orange: colors.orange,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
