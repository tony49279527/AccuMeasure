import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C447C",
          light: "#185FA5",
        },
        accent: "#378ADD",
        cta: {
          DEFAULT: "#C2410C",
          hover: "#9A3412",
        },
        dark: "#2C2C2A",
        body: "#444441",
        muted: "#5F5E5A",
        "bg-light": "#F1EFE8",
        "bg-white": "#FFFFFF",
        success: "#1D9E75",
        danger: "#E24B4A",
        border: "rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        xl: "12px",
        lg: "8px",
      },
      maxWidth: {
        "7xl": "1280px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
