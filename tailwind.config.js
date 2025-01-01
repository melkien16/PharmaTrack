/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#0111fa",
          900: "#1a29fb",
          800: "#3441fb",
          700: "#4d58fc",
          600: "#6770fc",
          500: "#8088fd",
          400: "#99a0fd",
          300: "#b3b8fe",
          200: "#e6e7ff",
          100: "#ffffff",
          shade: "#010caf",
        },
        secondary: {
          default: "#00fa5d",
          900: "#33fb7d",
          800: "#4dfc8e",
          700: "#66fc9e",
          600: "#80fdae",
          500: "#99fdbe",
          400: "#b3fece",
          300: "#ccfedf",
          200: "#e6ffef",
          100: "#ffffff",
          shade: "#007d2f",
        },
        
      },
      backgroundImage: {
        primary: "linear-gradient(90deg, #0111fa 0%, #00fa5d 100%)",
        secondary: "linear-gradient(90deg, #00fa5d 0%, #fa00d6 100%)",
        tertiary: "linear-gradient(90deg, #fa00d6 0%, #0111fa 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
    },
  },
},
  plugins: [],
};
