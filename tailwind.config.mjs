/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes:{
				"loop": {
					"100%": { transform: "translateX(calc(-50% - var(--extra-width)))" }
				},
				"loop-reverse": {
					"0%": { transform: "translateX(calc(-50% - var(--extra-width)))" },
					"100%": { transform: "translateX(0)" }
				},
				"ping-rotate": {
					"0%": { transform: "rotate(0deg); opacity: 0" },
					"100%": { transform: "rotate(-180deg); opacity: 1" }
				}
			},
			animation: {
				loop: "loop linear infinite",
				"loop-reverse": "loop-reverse linear infinite",
				"ping-rotate": "ping-rotate 3s cubic-bezier(0, 0, 0.2, 1) infinite"
			},
			fontFamily: {
				cinzel: ['Cinzel Variable', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				smoke: {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#1f1f1f',
					'500': '#282828',
					'600': '#252525',
					'700': '#191919',
					'800': '#161616',
					'900': '#101010',
					'950': '#050505',
				},
				teal: {
					'50': '#f0fdfa',
					'100': '#ccfbf1',
					'200': '#99f6e4',
					'300': '#5eead4',
					'400': '#2dd4bf',
					'500': '#14b8a6',
					'600': '#0d9488',
					'700': '#0f766e',
					'800': '#115e59',
					'900': '#134e4a',
					'950': '#042f2e',
				}
			}
		},
	},
	plugins: [],
}
