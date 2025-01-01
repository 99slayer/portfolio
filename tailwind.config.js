/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				theme: {
					'text': 'var(--color-text)',
					'background': 'var(--color-background)',
					'primary': 'var(--color-primary)',
					'secondary': 'var(--color-secondary)',
					'button': 'var(--color-button)',
					'highlight': 'var(--color-highlight)',
					'lowlight': 'var(--color-lowlight)'
				}
			}
		},
	},
	plugins: [],
}
