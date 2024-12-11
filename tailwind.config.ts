import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2A9D8F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#64E5D9",
          foreground: "#0F1115",
        },
        accent: {
          DEFAULT: "#1A1E23",
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "flow-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
        "flow-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
      animation: {
        "flow-left": "flow-left 8s ease-in-out infinite",
        "flow-right": "flow-right 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;