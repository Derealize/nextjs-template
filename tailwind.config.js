const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "required"],
      borderColor: ["required", "first"],
      textColor: ["required"],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("required", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`required${separator}${className}`)}:required`;
        });
      });
    }),
  ],
};
