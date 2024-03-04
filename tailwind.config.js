/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &")
      },
      {
        theme: {
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      }
    ),
  ],
}

