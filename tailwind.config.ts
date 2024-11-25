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
    },
  },
  plugins: [],
};
export default config;
