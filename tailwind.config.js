/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#E0D8B0',
        'color-secondary': '#CE9461',
        'color-tertiary': '#DEA057',
        'color-quatinary': '#FCFFE7',
        'color-project': '#C46613',
      },
    },
  },
  plugins: [],
}
