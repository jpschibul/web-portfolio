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
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        medium: '1.25',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '2.2rem',
        '4xl': '3.2rem',
        '5xl': '3.8rem'
      },
      lineHeight: {
        'nav': '1.5rem',
        'normal': '100%',
        'loose': '3rem'
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
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(157deg, rgba(178, 197, 255, 0.8) 27.21%, rgba(149, 135, 217, 0.8) 65.92%, rgba(189, 143, 236, 0.8) 79.17%)',
        'light-gradient':
          'linear-gradient(157deg, rgba(178, 197, 255, 0.8) 27.21%, rgba(149, 135, 217, 0.8) 65.92%, rgba(189, 143, 236, 0.8) 79.17%)',
        'dark-gradient':
          'linear-gradient(139deg, rgba(34, 27, 68, 0.30) 19.77%, rgba(129, 114, 198, 0.30) 43.67%, rgba(158, 112, 205, 0.30) 78.14%);'
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
