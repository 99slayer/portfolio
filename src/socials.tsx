import { SocialInterface } from './types';

const socials: SocialInterface[] = [
	{
		name: 'GITHUB',
		link: import.meta.env.VITE_GITHUB,
		icon:
			<svg
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='m23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1v-5h-1v-3h-2v1h-1v1h-1v-1h-4v1h-1v-1h-1v-1h-2v3h-1v5h1v1h1v1h2v2h-2v-1h-1v-1h-2v1h1v2h1v1h3v3h-1v-1h-2v-1h-1v-1h-1v-1h-1v-2h-1v-2h-1v-6h1v-2h1v-2h1v-1h1v-1h2v-1h2v-1h6v1h2v1h2v1h1v1h1v2h1v2z'
					fill='var(--color-trim)'
				/>
			</svg>
	},
	{
		name: 'X/TWITTER',
		link: import.meta.env.VITE_X,
		icon:
			<svg
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='m15.5 10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2z'
					fill='var(--color-trim)'
				/>
			</svg>
	},
	{
		name: 'EMAIL',
		link: 'mailto:' + import.meta.env.VITE_EMAIL,
		icon:
			<svg
				id='Envelope'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
			>
				<path
					d='m21,5v-1H3v1H1v14h1v1h20v-1h1V5h-2Zm-11,7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1Zm-6-5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v11H3V7h1Z'
					fill='var(--color-trim)'
				/>
			</svg>
	}
];

export default socials;
