import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'custom-red': '#08F',
  			'custom-gray': '#FBFBFB',
  			'custom-gray-2': '#C5C5C5',
  			'custom-gray-3': '#242729',
  			'custom-yellow': '#FFC013',
  			'custom-blue': '#08FBF7',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		letterSpacing: {
  			custom: '14px',
  			'custom-2': '1px',
  			'custom-3': '4px',
  			'custom-4': '5px'
  		},
  		fontSize: {
  			custom: '13.5px',
  			'custom-2': '52px',
  			'custom-3': '16px',
  			'custom-4': '32px'
  		},
  		fontFamily: {
  			sans: [
  				'Roboto',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			custom: '900',
  			'custom-2': '500'
  		},
  		boxShadow: {
  			custom: '0 0 30px 3px rgba(0, 0, 0, 0.1)'
  		},
  		transitionDuration: {
  			'600': '600ms',
        	'2000': '2000ms',
        	'3000': '5000ms'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
