/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0E9A8B",   // Emerald Teal
          secondary: "#2E9E8F", // Lighter Teal
          dark: "#0A0F1D",      // Deep Ink Blue
          cream: "#FDF8EF",     // Warm Cream
          gold: "#FFB800",      // Warm Amber Gold
          lightGreen: "#D6F4E5",// Soft Green Tint
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
        serifDisplay: ["Playfair Display", "serif"],
      },
      boxShadow: {
        neo: "4px 4px 0px 0px #0A0F1D",
        neoBrand: "4px 4px 0px 0px #0E9A8B",
        neoLarge: "8px 8px 0px 0px #0A0F1D",
        neoGold: "4px 4px 0px 0px #FFB800",
      }
    },
  },
  plugins: [],
}
