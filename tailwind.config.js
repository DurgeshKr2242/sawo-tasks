module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    screens: {
      "mobile-s": "320px",
      "mobile-m": "375px",
      "mobile-l": "425px",
      "tablet-s": "530px",
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        yellow: "#FCDC60",
      },
    },
  },
  plugins: [],
};
