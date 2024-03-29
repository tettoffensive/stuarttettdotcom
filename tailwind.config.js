/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const tailwindConfig = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      gap: {
        auto: 'calc(2rem + 1vw)',
      },
      fontFamily: {
        basier: ['Basier'],
        sans: [
          'Basier',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'army-green': {
          DEFAULT: '#475E32',
          light: '#859973',
          dark: '#403F33',
        },
        'almost-black': '#141413',
        'medium-gray': '#646B67',
      },
      fontSize: {
        h1: '3.5rem',
        h2: '2.25rem',
        h3: '1.83rem',
        h4: '1.1rem',
        h5: '1.1rem',
        h6: '1.1rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
