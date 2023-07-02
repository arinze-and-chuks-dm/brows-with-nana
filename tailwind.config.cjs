const theme = require("./src/config/theme.json");
let fontPrimary,
  fontPrimaryType,
  fontSecondary,
  fontSecondaryType,
  fontTertiary,
  fontTertiaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}
if (theme.fonts.font_family.tertiary) {
  fontTertiary = theme.fonts.font_family.tertiary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontTertiaryType = theme.fonts.font_family.tertiary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      content: {
        "leaf-up": "url('/images/leaf-up.svg')",
        "leaf-down": "url('/images/leaf-down.svg')",
        "location-pin-dark": "url('/images/location-pin-dark.svg')",
        phone: "url('/images/phone.svg')",
        email: "url('/images/email.svg')",
      },
      colors: {
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        body: theme.colors.default.theme_color.body,
        border: theme.colors.default.theme_color.border,
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
        logo: [fontTertiary, fontTertiaryType],
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animated"),
  ],
};
