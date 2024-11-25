import { BaseColors } from "@/types/theme";

export const isDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const colors = {
  background: "var(--background)",
  backgroundsecondary: "var(--background-secondary)",
  text: "var(--text)",
  highlighted: "var(--highlighted)",
  separator: "var(--separator)",
  separator2: "var(--separator2)",
  watergreen: "var(--water-green)",
  vibrantcoral: "var(--vibrant-coral)",
  brightamber: "var(--bright-amber)",
};

type ColorKey = keyof typeof colors;