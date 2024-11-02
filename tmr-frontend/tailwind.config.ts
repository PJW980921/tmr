import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // => @media (max-width: 1119px) { ... }
      md: { max: '1480px' }, // tablet

      // => @media (max-width: 743px) { ... }
      sm: { max: '768px' }, // mobile
    },
    extend: {
      fontFamily: {
        bmEuljiro: ['var(--font-bm-euljiro)'],
        bmHannaAir: ['var(--font-bm-hanna_air)'],
        bmHannaPro: ['var(--font-bm-hanna_pro)'],
      },
    },
    colors: {
      blue: {
        2: '#2FA3F1',
      },
      white: {
        F: '#FFFFFF',
      },
      black: {
        2: '#2B2B2B',
      },
      gray: {
        9: '#9D9D9D',
      },
    },
  },
  plugins: [],
};
export default config;
