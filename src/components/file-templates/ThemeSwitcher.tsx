import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context';
import { AppContextInterface, ThemeInterface } from '../../types';
import themes from '../../themes';

function ThemeSwitcher() {
	const height: number = 203;
	const {
		theme,
		setTheme
	} = useContext(AppContext) as AppContextInterface;
	const ref = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState<boolean>(false);
	const [hover, setHover] = useState<boolean>(false);

	function createThemeButtons(arr: ThemeInterface[]) {
		const buttons = [];

		for (let i = 0; i < arr.length; i++) {
			const colorName = arr[i].name;
			const colors = arr[i].colors;

			buttons.push(
				<div
					className='flex justify-end items-center gap-1 bg-theme-secondary'
					key={colorName}
				>

					<button
						className='flex-1 px-[0.1rem] flex justify-stretch items-stretch bg-theme-primary hover:brightness-[1.1]'
						style={{
							backgroundImage: `linear-gradient(10deg, ${colors.primary} 50%, ${colors.secondary} 50%)`,
							boxShadow: colorName === theme ?
								'-2px -2px black, -2px 0 black, 0 -2px black' :
								'0px 2px black, -2px -2px white, 2px -2px white, -2px 0px white, -2px 2px black',
							color: colors.textColor,
							textShadow: `${colors.textShadow} 2px -2px`,
							filter: colorName === theme ? 'brightness(0.95)' : ''
						}}
						title={colorName}
						onClick={() => setTheme(colorName)}
					>
						<p
							className='flex-1 text-xl leading-[1.25rem] text-center'
							style={{
								transform: colorName === theme ? 'translateY(4px)' : 'translateY(2px)'
							}}
						>
							{colorName}
						</p>
					</button>
				</div >
			);
		}

		const div =
			<div
				className='pt-2 flex flex-col gap-[0.4rem]'
				ref={ref}
			>
				{buttons}
			</div>;

		return div;
	}

	return (
		<div
			className='pl-4 flex flex-col items-center gap-2 absolute right-0 top-0 transition-transform'
			style={{
				transform: `translateY(${open ? '0' : - height}px)`,
				zIndex: hover ? '100' : ''
			}}
			onMouseLeave={() => {
				setOpen(false);
				setHover(false);
			}}
		>
			{createThemeButtons(themes)}
			<button
				className='size-12 flex justify-center items-center'
				title='theme picker'
				onClick={() => setOpen(!open)}
				onMouseOver={() => setHover(true)}
			>
				<img
					src={hover ? './gifs/color-wheel.gif' : './icons/color-wheel.png'}
					draggable='false'
					alt=''
				/>
			</button>
		</div>
	);
}

export default ThemeSwitcher;
