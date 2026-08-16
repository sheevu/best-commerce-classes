/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14213d",
          dark: "#0a1128",
          muted: "#4b5563",
          light: "#64748b",
        },
        brand: {
          blue: "#0756d8",
          blueDark: "#0544ab",
          blueLight: "#dff2ff",
          blueSky: "#eef8ff",
          orange: "#ff8a1f",
          orangeLight: "#fff2e5",
          gold: "#f59e0b",
          goldLight: "#fff8e6",
          mint: "#087851",
          mintLight: "#dff7eb",
          cream: "#fffaf1",
          border: "#dce3ee",
          surface: "#ffffff",
          navy: "#0f1d38",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Georgia", "Playfair Display", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(7, 86, 216, 0.12)",
        glowBlue: "0 10px 25px -5px rgba(7, 86, 216, 0.28)",
        glowAmber: "0 10px 25px -5px rgba(255, 138, 31, 0.28)",
        card: "0 4px 20px -2px rgba(15, 29, 56, 0.06)",
        cardHover: "0 20px 35px -5px rgba(15, 29, 56, 0.12)",
        notebook: "20px 24px 0px 0px #0756d8, 0 35px 60px rgba(18, 58, 121, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 8s ease-in-out infinite reverse",
        pulseSubtle: "pulseSubtle 3s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        glow: {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "0.9", transform: "scale(1.08)" },
        }
      }
    },
  },
  plugins: [],
}

