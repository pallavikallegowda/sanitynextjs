module.exports = {
  purge: ['./pages/**/*.js,ts,jsx,tsx', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '28rem',
        144: '32rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
