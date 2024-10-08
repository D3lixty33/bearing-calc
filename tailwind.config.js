/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl' : '25px'
      },
      marginLeft: {
        'ml-90' : '90%',
        'ml-100': '100%'
      },
      marginTop : {
        'mt-18' : '68px'
      },
      margin: {
        '90' : '65%',
        '100': '67.8%',
      },
      height: {
        'h-1500' : '1500px'
      }    
    },
  },
  plugins: [],
};
