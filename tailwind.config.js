/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			boxShadow: {
				'header': '1px 1px 2px rgb(37, 37, 37, 0.5) inset, -1px -1px 2px rgb(37, 37, 37, 0.5) inset',
				'smooth-outset': '-2px -2px 4px var(--color-trim) inset, 2px 2px 4px var(--color-shadow-highlight) inset',
				'smooth-inset': '2px 2px 4px var(--color-trim) inset',
				'btn': '1px 1px var(--color-trim)',
				'btn-click': '1px 1px var(--color-highlight) inset',
			},
			colors: {
				theme: {
					'text': 'var(--color-text)',
					'text-highlight': 'var(--color-text-highlight)',
					'background': 'var(--color-background)',
					'primary': 'var(--color-primary)',
					'secondary': 'var(--color-secondary)',
					'trim': 'var(--color-trim)',
					'highlight': 'var(--color-highlight)'
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
