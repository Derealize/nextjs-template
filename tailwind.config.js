// https://github.com/tailwindlabs/tailwindcss-forms/issues/31#issuecomment-763461787
// const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./derealize-jit.html",
  ],
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
      backgroundImage: {},
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
