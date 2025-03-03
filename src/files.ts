import { FileData } from './types';

const files: FileData[] = [
	{
		name: 'Site Info',
		type: 'Text',
		text: `You can think of this website kind of like your desktop.

To checkout a project just click it's icon.

Windows can be dragged around by their headers and resized using the tab at the bottom right.

Windows can be minimized/maximized and closed using the buttons on their headers.

You can find links to my socials at the bottom left as well as a theme changer.

Thanks for stopping by!  =)`
	},
	{
		name: 'Pig Latin Converter',
		iconName: 'pl-converter',
		type: 'Project',
		description: 'Converts your text into Pig Latin! Two clicks is all it takes to translate your text and copy the result.',
		links: [
			{ name: 'Project Repo', link: 'https://github.com/99slayer/pl-converter' },
			{ name: 'Project Demo', link: 'https://99slayer.github.io/pl-converter/' }
		],
		images: [
			'./images/project-pl/pl-1.png'
		]
	},
	{
		name: 'Squawker',
		iconName: 'squawker',
		type: 'Project',
		description: 'Squawker was my final project for The Odin Project. It aims to replicate the core functionality of X/Twitter.',
		links: [
			{ name: 'Frontend Repo', link: 'https://github.com/99slayer/squawker-client' },
			{ name: 'Backend Repo', link: 'https://github.com/99slayer/squawker-api' },
			{ name: 'Project Demo', link: 'https://99slayer.github.io/squawker-client/' }
		],
		images: [
			'./images/project-squawker/squawker-1.png',
			'./images/project-squawker/squawker-2.png'
		]
	},
	{
		name: 'Memory Game',
		iconName: 'memory-game',
		type: 'Project',
		description: 'A simple memory game. Remember which cards you have already eliminated until there are none left!',
		links: [
			{ name: 'Project Repo', link: 'https://github.com/99slayer/odin-memory-card' },
			{ name: 'Project Demo', link: 'https://99slayer.github.io/odin-memory-card/' }
		],
		images: [
			'./images/project-memory-game/memory-game-1.png'
		]
	},
	{
		name: 'About Me',
		type: 'Text',
		text: 'BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH'
	}
];

export default files;
