/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/bg-image.png')",
      }
    },
  },
  daisyui: {
    themes:[
      "light",
      "dark",
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}
