import type { Config } from 'tailwindcss'

export default {
  content: [ "**.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "figtree": "Figtree, sans-serif"
      },
      "colors": {
        primaryYellow: "hsl(47, 88%, 63%)", // light blue
        primaryGrey: "hsl(0, 0%, 50%)",
        primaryBlack: "hsl(0, 0%, 7%)"
      },
      boxShadow: {
        card: ".6rem .5rem 0 hsl(0, 0%, 7%)",
        cardDk: ".8rem .8rem 0 hsl(0, 0%, 7%)",
        cardDown: "1.5rem 1.2rem 0 hsl(0, 0%, 5%)"
      },
      screens: {
        "mHover": {
          raw: "(hover:hover)"
        }
      }
    },
  },
  plugins: [],
} satisfies Config

