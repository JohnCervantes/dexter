module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open-Sans", "sans-serif"],
      },

      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-right-to-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(150px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "img-fade-in": {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            position: "fixed",
            top: "20%",
            left: "25%",
            //transform: "translate(50%,50%)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        bloom: {
          "0%": {
            filter: "grayscale(0.8)",
          },
          "40%": {
            filter: "grayscale(0.5)",
          },
          "100%": {
            filter: "grayscale(0)",
          },
        },
        grow: {
          "0%": {
            opacity: "0.9",
            transform: "scale(1)",
          },
          "40%": {
            opacity: "0.99",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1.1)",
          },
        },
        shrink: {
          "0%": {
            opacity: "0.9",
            transform: "scale(1)",
          },
          "40%": {
            opacity: "0.99",
          },
          "100%": {
            opacity: "1",
            transform: "scale(0.8)",
          },
        },
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
        "fade-in": "fade-in 1s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-right-to-left": "fade-in-right-to-left 1s ease-out 300ms",
        spin: "spin infinite 5s linear",
        "img-fade-in": "img-fade-in 1s ease-out",
        "img-grow": "grow 1s ease-out",
        "img-shrink": "shrink 1s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// /* Zoom Out #1 */
// .hover03 figure img {
// 	-webkit-transform: scale(1.5);
// 	transform: scale(1.5);
// 	-webkit-transition: .3s ease-in-out;
// 	transition: .3s ease-in-out;
// }
// .hover03 figure:hover img {
// 	-webkit-transform: scale(1);
// 	transform: scale(1);
// }
