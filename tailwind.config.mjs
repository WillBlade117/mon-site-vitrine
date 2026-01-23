/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Merriweather', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				'artisan-bg': '#FDFBF7',
				'artisan-text': '#2C2420',
				'artisan-muted': '#5E544F',
				'artisan-accent': '#A64D2E',
				'artisan-accent-hover': '#8A3F25',
			}
		},
	},
	plugins: [],
}