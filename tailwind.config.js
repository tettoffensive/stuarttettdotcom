module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
      extend: {
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
          'army-green': '#475E32',
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
        }
    },
  },
  plugins: [],
}
