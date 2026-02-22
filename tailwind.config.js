/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#A855F7", // Purple 500
        secondary: "#D1D5DB", // Gray 300
        background: "#111827", // Gray 900
        card: "#1F2937", // Gray 800
        hover: "#374151", // Gray 700
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

