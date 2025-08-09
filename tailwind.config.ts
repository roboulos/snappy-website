import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Purple accent
        secondary: "#f97316", // Orange accent
        bgLight: "#f9fafb", // Light gray background
        bgDark: "#080d11", // Deep dark blue/black
        textHeading: "#111827", // Dark gray for headings
        textBody: "#6b7280", // Medium gray for body
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['56px', { lineHeight: '1.1' }],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        card: "0 1px 3px rgba(0,0,0,0.1)",
        lg: "0 10px 25px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;