/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					dark: '#0F172A',
					primary: '#7C3AED',
					accent: '#10B981',
				}
			},
			fontFamily: {
				sans: ['Inter Variable', 'sans-serif'],
				display: ['CalSans', 'Inter Variable', 'sans-serif'],
			}
		},
	},
	plugins: [],
}