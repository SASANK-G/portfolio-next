module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    
    extend: {

      fontFamily: {
        Festive: ['Festive', 'cursive'],
        Poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        yellows:{
          DEFAULT : 'rgb(255, 180, 0)',
        },
      },

       boxShadow: {
       'xxl': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',


      }
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
