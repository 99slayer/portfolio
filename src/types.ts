export interface Coordinates {
	x: number;
	y: number;
}

export interface Size {
	width: number;
	height: number;
}

interface ProjectFileData {
	name: string;
	type: 'Project';
	description: string;
	links: { name: string, link: string }[];
	images: string[];
}

interface TextFileData {
	name: string;
	type: 'Text';
	text: string;
}

export type FileData = ProjectFileData | TextFileData;

export interface AppContextInterface {
	startOpen: boolean;
	setStartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	openArr: string[];
	visibleArr: string[];
	activeArr: string[];
	open: (name: string) => void;
	close: (name: string) => void;
	show: (name: string) => void;
	hide: (name: string) => void;
	setActive: (name: string) => void;
}

export interface DisplayContextInterface {
	displaySize: Size;
}
