const plugin = require("tailwindcss/plugin");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        teal: colors.teal,
        cyan: colors.cyan,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
      },
      height: {
       '18': '4.5rem',
      }
    },
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
