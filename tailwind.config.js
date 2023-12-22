/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A42A8",
        secondary: "#F7F7F7",
        blueAeroFont: "#255DC4",
        greenconfirm: "#00C853",
      },
      boxShadow: {
        containerShadow: "0px 0px 8.173px 0px rgba(0, 0, 0, 0.20)",
      }
    },
  },
  plugins: [],
};
