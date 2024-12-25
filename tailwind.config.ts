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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-red': '#E63D30',
      },
      letterSpacing: {
        'custom': '14px',
        'custom-2': '1px',
      },
      fontSize: {
        'custom': '13.5px',
        'custom-2': '52px',
        'custom-3': '18px',
        'custom-4': '32px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
