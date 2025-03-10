/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      lineHeight: {
        'nav': '1.5rem',
        '12': '3rem'
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleX(0)'},
          // '80%': {transform: 'scaleX(1.2)'},
          '100%': {transform: 'scaleX(1)'}
        },
        'close-menu': {
          '0%': {transform: 'scaleX(1)'},
          // '80%': {transform: 'scaleX(1.2)'},
          '100%': {transform: 'scaleX(0)'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-in-out backwards'
      }
    },
    colors: {
      'primary': '#353149',
      'secondary': '#8172C6',
      'text-color': '#3B3557',
      'bgcolor': '#F2F7FF',
      'primary-dark': '#C6C9FC',
      'secondary-dark': '#AA9CEB',
      'text-color-dark': '#D8DBFD',
      'bgcolor-dark': '#130F27'
    },
    fontFamily: {
      dmMono: ['DM Mono', 'Courier New', 'monospace'],
      dmSans: ['DM Sans', 'Arial', 'sans-serif'],
      spline: ['Spline Sans Mono', 'Courier New', 'monospace'],
      hanken: ['Hanken Grotesk', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: []
};
