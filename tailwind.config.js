module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: "all",
    content: ["./public/index.html", "./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        worksans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
