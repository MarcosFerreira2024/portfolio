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
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        border: "var(--border)",
      },
      fontSize:{
        title: ["var(--font-title)", "1.2"], 
        subtitle: ["var(--font-subtitle)", "1.25"], 
      },
      maxWidth:{
        container: "var(--container)"
      },
      fontFamily: {
        subtitle: ['"Roboto Mono"', "monospace"],
        title: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
