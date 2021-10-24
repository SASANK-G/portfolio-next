module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        Pop: "'Poppins', sans-serif",
      },
      dropShadow: {

        'special': '10px 0px 10px rgba(53, 51, 51, 0.836)',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
