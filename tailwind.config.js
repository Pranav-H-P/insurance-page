/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {

      boxShadow: {
        'spread': '0 0px 20px rgba(0, 0, 0, 0.1)',
        'spread2': '0 0px 40px rgba(0, 0, 0, 0.3)'
      },

      screens: {  // the sample webpage image only shows the desktop,
                  //so I will design it desktop first
        extraSmall: { max: "400px" },
        
        mobile: { max: "625px" },

        tablet: { max: "860px" },
        
        laptop: { max: "1249px" },

        desktop: { min: "1250px"}
        
      },

      colors: {
        incepGreen: "#128f82",
        incepGrey: "#656565"
      }

    },
  },
  plugins: [],
}

