/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        startIn: "fadeIn 1s ease-out forwards",
      },
    },
    fontFamily: {
      myFont: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
    },
    keyframes: {
      fadeIn: {
        from: {
          opacity: "0",
          transform: "translateY(1rem)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
  },
  plugins: [],
};
