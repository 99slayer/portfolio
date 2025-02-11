import { FileData } from './types';

const files: FileData[] = [
	{
		name: 'About Me',
		type: 'Text',
		text: `Hello, my name is Joe. I am a fullstack web developer.

I enjoy games, movies, and reading.

My favorite fruit is a tie between mango and pineapple.

Driving around looking cool in my lambo is super fun.

All the ladies want me lmao.`
	},
	{
		name: 'Site Info',
		type: 'Text',
		text: `You can think of this website kind of like your desktop.
		
- To checkout a project just click its icon.
		
- Windows can be dragged around by their headers and resized using a tab at the bottom right.

- Windows can be minimized/maximized and closed using the buttons on their header.`
	},
	{
		name: 'Squawker',
		type: 'Project',
		description: 'This project aims to replicate the core functionality of Twitter/X.',
		links: [
			{ name: 'FRONTEND REPO', link: 'https://github.com/99slayer/squawker-client' },
			{ name: 'BACKEND REPO', link: 'https://github.com/99slayer/squawker-api' },
			{ name: 'PROJECT DEMO', link: 'https://99slayer.github.io/squawker-client/' }
		],
		images: [
			'./images/project-1/circuit-board.jpg',
			'./images/project-1/eye.jpg',
			'./images/project-1/lollipop-cat.png'
		]
	},
	{
		name: 'Pig Latin Converter',
		type: 'Project',
		description: 'Converts your text into Pig Latin! Two clicks is all it takes to translate your text and copy the result.',
		links: [
			{ name: 'PROJECT REPO', link: 'https://github.com/99slayer/pl-converter' },
			{ name: 'PROJECT DEMO', link: 'https://99slayer.github.io/pl-converter/' }
		],
		images: [
			'./images/project-pl/pl-converter-1.png'
		]
	},
	{
		name: 'Memory Game',
		type: 'Project',
		description: 'A simple memory game. Remember which cards you have already eliminated until there are none left!',
		links: [
			{ name: 'PROJECT REPO', link: 'https://github.com/99slayer/odin-memory-card' },
			{ name: 'PROJECT DEMO', link: 'https://99slayer.github.io/odin-memory-card/' }
		],
		images: [
			'./images/project-1/circuit-board.jpg',
			'./images/project-1/eye.jpg',
			'./images/project-1/lollipop-cat.png'
		]
	},
	{
		name: 'theme-switcher',
		type: 'ThemeSwitcher'
	}
];

export default files;
