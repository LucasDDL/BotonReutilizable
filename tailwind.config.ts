import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary-0': '#240505',
      'primary-5': '#360808',
      'primary-10': '#480a0a',
      'primary-15': '#5a0c0c',
      'primary-20': '#6b0f0f',
      'primary-25': '#7d1212',
      'primary-30': '#8f1414',
      'primary-35': '#a11717',
      'primary-40': '#b31919',
      'primary-45': '#c51c1c',
      'primary-50': '#d71e1e',
      'primary-55': '#e12828',
      'primary-60': '#e33a3a',
      'primary-65': '#e64c4c',
      'primary-70': '#e95e5e',
      'primary-75': '#eb7070',
      'primary-80': '#ee8282',
      'primary-85': '#C5BCED',
      'primary-90': '#D8D2F3',
      'primary-95': '#ECE9F9',
      'neutral-5': '#040404',
      'neutral-10': '#090909',
      'neutral-15': '#0D0D0D',
      'neutral-20': '#121212',
      'neutral-25': '#161616',
      'neutral-30': '#1A1A1A',
      'neutral-35': '#1F1F1F',
      'neutral-40': '#1F1F1F',
      'neutral-45': '#282828',
      'neutral-50': '#2C2C2C',
      'neutral-55': '#414141',
      'neutral-60': '#565656',
      'neutral-65': '#6B6B6B',
      'neutral-70': '#808080',
      'neutral-75': '#969696',
      'neutral-80': '#ABABAB',
      'neutral-85': '#C0C0C0',
      'neutral-90': '#D5D5D5',
      'neutral-95': '#EAEAEA',
    },
    fontSize: {
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
    },
  },
  plugins: [],
};
export default config;
