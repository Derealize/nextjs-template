const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false'
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
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant, e }) {
      addVariant("required", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`required${separator}${className}`)}:required`;
        });
      });
    }),
  ],
};
