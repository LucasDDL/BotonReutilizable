import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary-5': '#060313',
      'primary-10': '#0C0627',
      'primary-15': '#12093A',
      'primary-20': '#180C4E',
      'primary-25': '#1F1061',
      'primary-30': '#251374',
      'primary-35': '#2B1688',
      'primary-40': '#31199B',
      'primary-45': '#371CAF',
      'primary-50': '#2011A6',
      'primary-55': '#5035C8',
      'primary-60': '#644CCE',
      'primary-65': '#7762D4',
      'primary-70': '#8B79DA',
      'primary-75': '#9E8FE1',
      'primary-80': '#B1A5E7',
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
