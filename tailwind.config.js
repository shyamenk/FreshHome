/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#edf0f0',
        secondary: '#2a3343',
        third: '#d49836',
        forth: '#9c523c',
        text: '#949a9f',
        fifth: '#dec39d',
        sixth: '#c1c7cc',
        seven: '#caa292',
        eight: '#617265',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}
