import { FileData } from './types';

const files: FileData[] = [
	{
		name: 'text-window',
		type: 'Text',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit tincidunt massa, sit amet congue sem fermentum sit amet. Phasellus lobortis est diam. Donec egestas, quam vel facilisis gravida, metus erat accumsan metus, eu convallis purus nunc in nisi. Nam non mi vel eros venenatis elementum. Aenean laoreet bibendum eros vel aliquam. Pellentesque non nisi sit amet eros consectetur mollis. Praesent sit amet odio eu ligula tempor suscipit non ut sapien. Nunc ut quam orci. Nam tempus commodo dignissim. Mauris sodales sodales lacus nec pellentesque. Pellentesque nec hendrerit sapien. Etiam vel nulla ultricies, dictum ex at, scelerisque purus.'
	},
	{
		name: 'project-window',
		type: 'Project',
		description: 'This project is super cool!',
		links: [
			{ name: 'LINK 1', link: 'link-1' },
			{ name: 'LINK 2', link: 'link-2' }
		],
		images: [
			'./images/project-1/circuit-board.jpg',
			'./images/project-1/eye.jpg',
			'./images/project-1/lollipop-cat.png'
		]
	}
];

export default files;
