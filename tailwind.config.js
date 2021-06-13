module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {colors: {
      cgblue: '#223669'
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
