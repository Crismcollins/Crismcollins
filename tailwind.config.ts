import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundsecondary: "var(--background-secondary)",
        text: "var(--text)",
        highlighted: "var(--highlighted)",
        separator: "var(--separator)",
        separator2: "var(--separator2)",
        watergreen: "var(--water-green)",
        vibrantcoral: "var(--vibrant-coral)",
        brightamber: "var(--bright-amber)",
      },
      animation: {
        blink: 'blink 1.3s step-start infinite',
        slideUp: 'slideUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        slideUp: {
          '0%': { transform: 'translateY(600%)' },
          '60%': { transform: 'translateY(-40%)' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
