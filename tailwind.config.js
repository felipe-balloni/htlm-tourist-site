const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      background: "#F5F4F0",
      border: "#D9D9D9",
      primary: "#1B1B1B",
      secondary: "#333333",
      tertiary: "#696969",
      headline: "#E1624F",
      accent: {
        blue: "#0C51A7",
        orange: "#E95E10",
        pink: "#E5245E",
        purple: "#591B98"
      }
    },
    fontFamily: {
      'body': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ['14px'],
      base: ['16px'],
      lg: ['28px'],
      xl: ['32px'],
      "2xl": ['36px']
    },
    extend: {
      borderRadius: {
        "4xl": "1.75rem"
      }
    },
  },
  plugins: [],
}

