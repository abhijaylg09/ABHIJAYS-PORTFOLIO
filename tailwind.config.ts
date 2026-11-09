import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        surface: "#0f172a",
        "surface-light": "#1e293b",
        primary: {
          DEFAULT: "#06b6d4", // Cyan
          dark: "#0891b2",
          light: "#22d3ee",
        },
        secondary: {
          DEFAULT: "#6366f1", // Indigo
          dark: "#4f46e5",
          light: "#818cf8",
        },
        accent: {
          DEFAULT: "#10b981", // Emerald
          dark: "#059669",
          light: "#34d399",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
