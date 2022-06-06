module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF6F00",

          "secondary": "#644F9C",

          "accent": "#F2F2F2",

          "neutral": "#404040",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
