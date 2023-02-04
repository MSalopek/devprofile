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
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          ".btn": {
            "transition-duration": "100ms",
          }
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          ".btn": {
            "transition-duration": "1000ms",
          }
        },
      }
    ],
    darkMode: ['class', '[data-theme="dark"]']
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}
