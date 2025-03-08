/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
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
