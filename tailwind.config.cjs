/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["montserrat", "sans-serif"],
        secondary: ["source sans pro", "sans-serif"],
        logo: ["dancing script", "cursive"],
      },
      height: {
        // TODO: remove this when tailwindcss 4.0 releases with string[] support
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"].join(
          ", "
        ),
      },
    },
  },
  plugins: [],
};
