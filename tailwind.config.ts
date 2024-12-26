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
        'custom-gray': '#FBFBFB',
        'custom-gray-2': '#C5C5C5',
        'custom-yellow': '#FFC013',
      },
      letterSpacing: {
        'custom': '14px',
        'custom-2': '1px',
        'custom-3': '4px',
        'custom-4': '5px',

      },
      fontSize: {
        'custom': '13.5px',
        'custom-2': '52px',
        'custom-3': '16px',
        'custom-4': '32px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },

      fontWeight: {
        'custom': '900',
        'custom-2': '500',
      },
      boxShadow: {
        'custom': '0 0 30px 3px rgba(0, 0, 0, 0.1)', 
      },
      transitionDuration: {
        '600': '600ms' 
      }
    },
  },
  plugins: [],
} satisfies Config;
