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
					'secondary-transparent': 'var(--color-secondary-transparent)',
					'button': 'var(--color-btn)',
					'button-hover': 'var(--color-btn-hover)',
					'button-click': 'var(--color-btn-click)',
					'highlight': 'var(--color-highlight)',
					'lowlight': 'var(--color-lowlight)'
				}
			},
			cursor: {
				'custom-default': 'url(./cursors/cursor-default-32.png) 1 3, default',
				'custom-grab': 'url(./cursors/cursor-grab-32.png) 1 3, grab',
				'custom-grabbing': 'url(./cursors/cursor-grabbing-32.png) 1 3, grabbing',
			}
		},
	},
	plugins: [
		require('@tailwindcss/container-queries')
	],
}
