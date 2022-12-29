module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Srisakdi', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
};
