import { ThemeInterface } from './types';

const themes: ThemeInterface[] = [
	{
		name: 'DEFAULT',
		colors: {
			primary: 'black',
			secondary: 'white',
			textColor: 'white',
			textShadow: 'black'
		}
	},
	{
		name: 'PURPLE',
		colors: {
			primary: '#6a2cbd',
			secondary: '#c5a1ff',
			textColor: '#c5a1ff',
			textShadow: '#6a2cbd'
		}
	},
	{
		name: 'RED',
		colors: {
			primary: '#1d1d1d',
			secondary: '#f1152b',
			textColor: '#f1152b',
			textShadow: '#1d1d1d'
		}
	},
	{
		name: 'BLUE',
		colors: {
			primary: '#3737d3',
			secondary: '#7dadf5',
			textColor: '#7dadf5',
			textShadow: '#3737d3'
		}
	}
];

export default themes;
