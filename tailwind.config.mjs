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
				poppins: ['Poppins', 'sans-serif'],
				bebas: ['Bebas Neue', 'cursive'],
				playfair: ['Playfair Display Variable', 'sans-serif'],
				belgrano: ['Belgrano', 'serif'],
				montserrat: ['Montserrat Variable', 'sans-serif'],
				oswald: ['Oswald Variable', 'sans-serif'],
				quattrocento: ['Quattrocento', 'serif'],
				merriweather: ['Merriweather', 'serif'],
				plus: ['Plus Jakarta Sans Variable', 'sans-serif'],
				barlow: ['Barlow', 'sans-serif'],
			},
			colors: {
				smoke: {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#454545',
					'300': '#383838',
					'400': '#313131',
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
				},
				headers:{
					primero:{
						primario:"#7edad2",
						claro:"#f9f9f9",
						letters:"#424241",
						paraghap:"#909090",
					},
					segundo:{
						primario:"#515DEF",
						secundario:"#1BCFF6",
					},
					tercero: {
						primario:"#9B9A78",
						letters:"#313131"
					},
					cuarto: {
						primario:"#FA504D",
						letters:"#2E2F38",
						blur:"#68F3F6"
					},
					quinto: {
						primario:"#F38160",
						secundario:"#F0B70D",
						letters:"#403C39"
					},
					sexto: {
						primario:"#264065",
						secundario:"#A9D6CB",
						letters:"#070D15"
					},
					septimo: {
						primario:"#DEDAD5",
					},
					octavo:{
						primario:"#DC0155",
						letters:"#333333"
					},
					noveno:{
						primario:"#CAC6BB",
						borders:"#CAC6BB"
					},
					decimo: {
						primario:"#2B2D38",
						secundario:"#DB2A6B",
						purple: "#6E1FED",
						blue: "#60D3D9",
						orange: "#FF7E29",
						yellow: "#F4B840",
					}
				},
				footers: {
					primero:{
						backg:"#CBED9F",
						primario:"#87DB1C",
						letters:"#040505"
					},
					tercero:{
						bgPhone: "#37383C",
					},
					cuarto: {
						backg: "#22242A",
					},
					quinto: {
						backg: "#31135E",
					},
				},
				landings: {
					primera: {
						letters: "#13183F",
						paraghap: "#83869A",
						btnhover: "#666CA3",
						links: "#F74780",
					},
					segunda: {
						orange: '#F16718',
						blue: '#162542',
						gray: '#E8EFF2',
						paragraphy: '#7B8BAD',
					}
				}
			},
			backgroundImage: {
				quinto: "linear-gradient(90deg, rgba(252,0,255,1) 0%, rgba(0,219,222,1) 100%)",
				"primera-landing-light": "linear-gradient(0deg, #F02AA6, #FF6F48)",
				"primera-landing-dark": "linear-gradient(0deg, #F02AA6, #4851FF)",
				"gray-gradient": "linear-gradient(180deg, #F9FAFB 0%, #ffffff 8%, #ffffff 30%, #f0f1ff 100%)",
			}
		},
	},
	plugins: [],
}
