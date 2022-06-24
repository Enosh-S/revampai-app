
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
      styled: true,
      themes: [
        {
          mytheme: {

            "primary": "#49deff",

            "secondary": "#ffbd59",

            "accent": "#F471B5",

            "neutral": "#1D283A",

            "base-100": "#023047",

            "info": "#8ecae6",

            "success": "#2BD4BD",

            "warning": "#fb8500",

            "error": "#FB6F84",
          },
        },
      ],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}
