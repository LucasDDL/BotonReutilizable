import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: '#080106', // neutral-900
      white: '#f9f4f8', // neutral-50
      transparent: "transparent",
      current: 'currentColor',
      primary: {
        DEFAULT: "#0017a6",
        50: "#e9eafb",
        100: "#c6caf5",
        200: "#a0a8ee",
        300: "#7785e8",
        400: "#5769e2",
        500: "#344ddb",
        600: "#2f44d0",
        700: "#233ac3",
        800: "#182eb8",
        900: "#0017a6",
      },
      neutral: {
        DEFAULT: "#484447",
        50: "#f9f4f8",
        100: "#ede8ec",
        200: "#ded9dd",
        300: "#c9c4c8",
        400: "#a39ea2",
        500: "#817c7f",
        600: "#5a5659",
        700: "#484447",
        800: "#2b272a",
        900: "#080106",
      },
      red: {
        DEFAULT: "#bb1b23",
        50: "#ffebef",
        100: "#ffced4",
        200: "#f09b9e",
        300: "#e77478",
        400: "#f25357",
        500: "#f8423d",
        600: "#e9393c",
        700: "#d72f36",
        800: "#ca282f",
        900: "#bb1b23",
      },
      green: {
        DEFAULT: "#00762f",
        50: "#e5f4e9",
        100: "#c1e4c8",
        200: "#99d2a5",
        300: "#6ec182",
        400: "#4db468",
        500: "#26a74e",
        600: "#1c9945",
        700: "#0f873a",
        800: "#00762f",
        900: "#00571c",
      }
    },
    fontSize: {
      lbl: ['12px', { lineHeight: '14px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['12px', { lineHeight: '18px' }],
      md: ['14px', { lineHeight: '22px' }],
      lg: ['18px', { lineHeight: '32px' }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-fira)']
      },
    },
  },
  plugins: [],
};
export default config;
