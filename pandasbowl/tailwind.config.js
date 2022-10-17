module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
     extend: {
      spacing: {
        '128': '32rem',
      }
    }
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
    require("daisyui")
  ],
  content: [
      './src/**/*.{html,js}',
      "./node_modules/flowbite/**/*.js",
      './node_modules/tw-elements/dist/js/**/*.js'
  ]

};