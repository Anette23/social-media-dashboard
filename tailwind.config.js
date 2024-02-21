/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        youTube: "hsl(348, 97%, 39%)",
        darkToggle: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
        lightToggle: "hsl(230, 22%, 74%)",

        // DARK THEME
        veryDarkBlueBG: "hsl(230, 17%, 14%)",
        veryDarkBlue: "hsl(232, 19%, 15%)",
        darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        desaturatedBlue: "hsl(228, 34%, 66%)",
        white: "hsl(0, 0%, 100%)",

        // LIGHT THEME
        whiteBG: "hsl(0, 0%, 100%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        lightGrayishBlue: "hsl(227, 47%, 96%)",
        darkGrayishBlue: "hsl(228, 12%, 44%)",
        veryDarkBlueText: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
  darkMode:'class',
};
