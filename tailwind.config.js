/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {  // the sample webpage image only shows the desktop,
                  //so I will design it desktop first

        mobile: { max: "479px" },

        tablet: { max: "767px" },
        
        desktop: { min: "768px" },
        
      },

      colors: {
        incepGreen: '#128f82'
      }

    },
  },
  plugins: [],
}

