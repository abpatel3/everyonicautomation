/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#A52027",
          "primary-hover": "#8B1B21",
          secondary: "#534A4C",
          "secondary-hover": "#3F3739",
          dark: "#171516",
          black: "#0D0C0D",
          white: "#FFFFFF",
          offwhite: "#F7F7F6",
          gray: "#F0EEEE",
          border: "#DED9DA",
          muted: "#766F71",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        industrial:
          "0 4px 20px -2px rgba(13, 12, 13, 0.08), 0 2px 6px -1px rgba(165, 32, 39, 0.04)",
        "industrial-lg":
          "0 12px 32px -4px rgba(13, 12, 13, 0.12), 0 4px 12px -2px rgba(165, 32, 39, 0.08)",
        "red-glow": "0 0 25px -5px rgba(165, 32, 39, 0.4)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
