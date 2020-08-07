const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "8xl": "90rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
