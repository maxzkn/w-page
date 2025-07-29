import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-cormorant-garamond)',
        secondary: 'var(--font-cinzel)',
      },
      fontSize: {
        banner: ['3.052rem', { lineHeight: '1.1' }],
        headline: ['1.953rem', { lineHeight: '2.25rem' }],
        main: ['1.25rem', { lineHeight: '1.75rem' }],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      colors: {
        primary: colors.slate[800],
        backgroundPrimary: colors.zinc[50],
        backgroundSecondary: colors.zinc[300],
        accent: colors.pink[500],
      },
    },
  },
  plugins: [],
};

export default config;
