const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

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
        lime: colors.lime,
        violet: colors.violet,
        "light-blue": colors.lightBlue,
        amber: colors.amber,
      },
      height: {
        18: "4.5rem",
      },
      boxShadow: {
        "offset-black": "2px 2px black",
        "offset-lime": "2px 2px lime",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["first"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // plugin(function ({ addVariant, e }) {
    //   addVariant("required", ({ modifySelectors, separator }) => {
    //     modifySelectors(({ className }) => {
    //       return `.${e(`required${separator}${className}`)}:required`;
    //     });
    //   });
    // }),
  ],
};
