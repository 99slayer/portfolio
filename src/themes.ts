import { ThemeInterface } from './types';

const themes: ThemeInterface[] = [
	{
		name: 'DEFAULT',
		colors: {
			primary: '#616161',
			secondary: '#c0c0c0',
			textColor: '#252525',
			textShadow: '#c0c0c0'
		},
		bg: './backgrounds/default-bg.jpeg'
	},
	{
		name: 'PURPLE',
		colors: {
			primary: '#8070C5',
			secondary: '#CAC4CE',
			textColor: '#242038',
			textShadow: '#8070C5'
		},
		bg: './backgrounds/purple-bg.jpg'
	},
	{
		name: 'RED',
		colors: {
			primary: '#C20114',
			secondary: '#1d1d1d',
			textColor: '#ECEBF3',
			textShadow: '#C20114'
		},
		bg: './backgrounds/red-bg.jpg'
	},
	{
		name: 'BLUE',
		colors: {
			primary: '#2A2A72',
			secondary: '#81d1ff',
			textColor: '#81d1ff',
			textShadow: '#232528'
		},
		bg: './backgrounds/blue-bg.png'
	}
];

export default themes;
