module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: theme => ({
        "signature-color": "#fac25b",
      }),
      backgroundColor: theme => ({
        "signature-color": "#fac25b",
      }),
      textColor: theme => ({
        "signature-color": "#fac25b",
      }),
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
