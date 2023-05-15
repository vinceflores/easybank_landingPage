/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Dark_Blue: "hsl(233, 26%, 24%)",
        Lime_Green: "hsl(136, 65%, 51%)",
        Bright_Cyan: "hsl(192, 70%, 51%)",
        Grayish_Blue: "hsl(233, 8%, 62%)",
        Light_Grayish_Blue:" hsl(220, 16%, 96%)",
        Very_Light_Gray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)"
      },
      backgroundImage:{
        'header_desktop':"url('/src/images/bg-intro-desktop.svg')",
        'header_mobile':"url('/src/images/bg-intro-mobile.svg')",
      }
    },
    fontFamily: {
      main: ['Public Sans', 'sans-serif']
    }
  },
  plugins: [],
}

