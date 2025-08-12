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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
  				rgb: '59, 126, 161' // Deep Teal for gradients
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				rgb: '94, 107, 141' // Sophisticated Slate
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))',
  				rgb: '229, 183, 56' // Gold
  			},
  			'brand-copper': {
  				DEFAULT: 'hsl(var(--brand-copper))',
  				rgb: '199, 127, 52' // Copper
  			},
  			bgLight: '#f9fafb',
  			bgDark: '#080d11',
  			textHeading: '#111827',
  			textBody: '#6b7280',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(135deg, #3B7EA1 0%, #5E6B8D 100%)',
  			'gradient-accent': 'linear-gradient(135deg, #E5B738 0%, #C77F34 100%)',
  			'gradient-premium': 'linear-gradient(135deg, #3B7EA1 0%, #E5B738 50%, #5E6B8D 100%)',
  			'gradient-glass-primary': 'linear-gradient(135deg, rgba(59, 126, 161, 0.15) 0%, rgba(94, 107, 141, 0.15) 100%)',
  			'gradient-glass-accent': 'linear-gradient(135deg, rgba(229, 183, 56, 0.15) 0%, rgba(199, 127, 52, 0.15) 100%)'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'-apple-system',
  				'sans-serif'
  			],
  			serif: ['Merriweather', 'serif'],
  			mono: ['JetBrains Mono', 'monospace']
  		},
  		fontSize: {
  			'5xl': [
  				'48px',
  				{
  					lineHeight: '1.1'
  				}
  			],
  			'6xl': [
  				'56px',
  				{
  					lineHeight: '1.1'
  				}
  			]
  		},
  		boxShadow: {
  			sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  			card: '0 1px 3px rgba(0,0,0,0.1)',
  			lg: '0 10px 25px rgba(0,0,0,0.08)'
  		},
  		borderRadius: {
  			DEFAULT: '8px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			container: '1200px'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;