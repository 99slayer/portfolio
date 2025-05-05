import {
	useContext,
	useRef
} from 'react';
import { AppContext } from '../context';
import { AppContextInterface, ThemeInterface } from '../types';
import themes from '../themes';
import hook from '../hooks/hook';

function ThemeMenu() {
	const {
		themesOpen,
		cycleThemeMenu,
		themeTabs,
		setTheme
	} = useContext(AppContext) as AppContextInterface;
	const ref = useRef<HTMLDivElement | null>(null);

	hook.useDetectOutside(
		themesOpen,
		ref,
		cycleThemeMenu,
		['themes-btn', 'themes-cont', 'themes-overlay', 'themes-img']
	);

	function createThemeButtons(arr: ThemeInterface[]) {
		const buttons = [];

		for (let i = 0; i < arr.length; i++) {
			const colorName = arr[i].name;
			const colors = arr[i].colors;

			buttons.push(
				<button
					className='flex-1 px-[0.1rem] flex border-[1px] bg-theme-primary hover:brightness-[1.1] transition-transform'
					style={{
						backgroundImage: `linear-gradient(10deg, ${colors.primary} 50%, ${colors.secondary} 50%)`,
						borderColor: colors.primary,
						color: colors.textColor,
						textShadow: `${colors.textShadow} 2px -2px`,
						transform: `translateX(${themeTabs ? '0' : '-100'}%)`,
						transitionDelay: `${i * 100}ms`
					}}
					key={colorName}
					title={colorName}
					onClick={() => setTheme(colorName)}
				>
					<p
						className='flex-1 pt-[0.1rem] px-1 text-[1.25rem] leading-[1.25rem] text-center'
					>
						{colorName}
					</p>
				</button>
			);
		}

		return buttons;
	}

	return (
		<div
			className='flex flex-col items-stretch gap-1 absolute bottom-[1.85rem] left-0 z-50'
			style={{ display: themesOpen ? 'flex' : 'none' }}
			ref={ref}
		>
			{createThemeButtons(themes)}
		</div>
	);
}

export default ThemeMenu;
