module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      'm': '571px',
      't': '769px',
      'l': '1041px',
      'd': '1281px',
    },
  
    extend: {

      backgroundImage: {
        'img1': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },      colors: {
        amazonBlue: {
          light: "#232F£E",
          DEFAULT: "#131921",
        },
        amazonYellow: {
          hover: "#dda71df7",
          DEFAULT: "#FFD231",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
