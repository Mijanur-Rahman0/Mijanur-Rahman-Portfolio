import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#6366f1", // Indigo
          dark: "#4f46e5",
        },
        accent: {
          DEFAULT: "#10b981", // Emerald
          glow: "#34d399",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
      }
    },
  },
  plugins: [],
} satisfies Config;
