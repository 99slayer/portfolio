/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			boxShadow: {
				'heavy-inset': '2px 2px var(--color-lowlight) inset, -2px -2px var(--color-highlight) inset',
				'heavy-outset': '-2px -2px var(--color-lowlight) inset, 2px 2px var(--color-highlight) inset',
			},
			colors: {
				theme: {
					'text': 'var(--color-text)',
					'background': 'var(--color-background)',
					'primary': 'var(--color-primary)',
					'secondary': 'var(--color-secondary)',
					'button': 'var(--color-btn)',
					'button-hover': 'var(--color-btn-hover)',
					'button-click': 'var(--color-btn-click)',
					'highlight': 'var(--color-highlight)',
					'lowlight': 'var(--color-lowlight)'
				}
			}
		},
	},
	plugins: [],
}
