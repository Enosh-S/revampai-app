
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
      themes: ["night", "winter"],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}
