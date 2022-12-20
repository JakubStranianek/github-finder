/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "myBlue": "#0079FF",
        "mySilver": "#697C9A",
        "myRockBlue": "#4B6A9B",
        "myDarkGrey": "#2B3442",
        "myLightWhite": "#F6F8FF",
        "myWhite": "#FEFEFE",
        "myDarkModeBlack": "#141D2F",
        "myDarkModeBlue": "#1E2A47",        
      },

      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
    },
  },
  plugins: [],
}