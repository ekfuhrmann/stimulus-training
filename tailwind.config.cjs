// IMPORTANT: PostCSS Converts all `px` values to `rem`
const pxPair = (value) => ({ [value]: `${value}px` });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "<sm": { max: "549.98px" },
      "<md": { max: "767.98px" },
      "<lg": { max: "1023.98px" },
      "<xl": { max: "1439.98px" },
    },
    colors: {
      initial: "initial",
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#D4D5D6",
        200: "#A9ABAD",
        300: "#7F8083",
        400: "#54565A",
        500: "#292C31",
        600: "#212327",
        700: "#191A1D",
        800: "#101214",
        900: "#08090A",
      },
      blue: {
        "00": "#F5F9FF",
        50: "#E6EFFF",
        100: "#D8E4FB",
        200: "#B1CAF7",
        300: "#8BAFF4",
        400: "#6495F0",
        500: "#3D7AEC",
        600: "#3162BD",
        700: "#25498E",
        800: "#18315E",
        900: "#0C182F",
      },
      red: {
        100: "#F6DAD4",
        200: "#EDB5A8",
        300: "#E4907D",
        400: "#DC6A52",
        500: "#D34526",
        600: "#A9371F",
        700: "#7E2A17",
        800: "#541C0F",
        900: "#2A0E08",
      },
      green: {
        50: "#D6F6E9",
        100: "#CFF1E7",
        200: "#9FE3CF",
        300: "#70D5B7",
        400: "#40C79E",
        500: "#10B986",
        600: "#0D946B",
        700: "#0A6F51",
        800: "#064A36",
        900: "#03251B",
      },
      primary: {
        text: "#08090A",
      },
      secondary: {
        text: "#54565A",
      },
    },
    spacing: {
      ...pxPair(0),
      ...pxPair(8),
      ...pxPair(16),
      ...pxPair(20),
      ...pxPair(24),
      ...pxPair(28),
      ...pxPair(32),
      ...pxPair(40),
      ...pxPair(48),
      ...pxPair(56),
    },
    fontSize: {
      sm: ["12px", 1.375],
      md: ["14px", 1.42],
      lg: ["16px", 1.33],
      xl: ["32px", 1.33],
    },
    extend: {
      opacity: {
        4: "0.04",
        8: "0.08",
      },
      lineHeight: {
        0: "0",
      },
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./config/tailwind/inputs.js"),
    require("./config/tailwind/variants.js"),
  ],
};
