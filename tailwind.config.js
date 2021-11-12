module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open-Sans", "sans-serif"],
      },
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
    },
    animation: {
      "fade-in": "fade-in 0.3s ease-out",
      "fade-in-up": "fade-in-up 0.8s ease-out",
      "fade-in-right-to-left": "fade-in-right-to-left 1s ease-out 300ms",
      spin: "spin infinite 5s linear",
      "img-fade-in": "img-fade-in 1s ease-out",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
