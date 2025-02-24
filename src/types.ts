import React from 'react';

export interface Coordinates {
	x: number;
	y: number;
}

export interface Size {
	width: number;
	height: number;
}

export interface ThemeInterface {
	name: string;
	colors: {
		primary: string;
		secondary: string;
		textColor: string;
		textShadow: string;
	};
}

interface ProjectFileData {
	ref?: React.RefObject<HTMLDivElement>;
	name: string;
	iconName: string;
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
	taskbarRef: React.RefObject<HTMLUListElement>;
	imgModalRef: React.RefObject<HTMLDialogElement>;
	img: string | null;
	setImg: React.Dispatch<React.SetStateAction<string | null>>;
	startOpen: boolean;
	setStartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	themesOpen: boolean;
	setThemesOpen: React.Dispatch<React.SetStateAction<boolean>>;
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
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
