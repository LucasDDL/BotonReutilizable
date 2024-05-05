import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary-0': '#1c223f',
      'primary-5': '#1e2545',
      'primary-10': '#21284b',
      'primary-15': '#232b51',
      'primary-20': '#262e56',
      'primary-25': '#28315c',
      'primary-30': '#2b3462',
      'primary-35': '#2d3768',
      'primary-40': '#303a6d',
      'primary-45': '#323d73',
      'primary-50': '#354079',
      'primary-55': '#36427c',
      'primary-60': '#394582',
      'primary-65': '#3b4887',
      'primary-70': '#3e4b8d',
      'primary-75': '#404e93',
      'primary-80': '#435199',
      'primary-85': '#45549e',
      'primary-90': '#4857a4',
      'primary-95': '#4a5aaa',
      'primary-100': '#4d5db0',
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
      sm: ['14px', {lineHeight: '20px'}],
      base: ['12px', {lineHeight: '18px'}],
      md: ['14px', {lineHeight: '22px'}],
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
