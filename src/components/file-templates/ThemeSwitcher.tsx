import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context';
import { AppContextInterface } from '../../types';

function ThemeSwitcher() {
	const width: number = 145;
	const {
		themes,
		theme,
		setTheme
	} = useContext(AppContext) as AppContextInterface;
	const ref = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState<boolean>(false);
	const [hover, setHover] = useState<boolean>(false);

	function createThemeButtons(arr: string[]) {
		const buttons = [];

		for (let i = 0; i < arr.length; i++) {
			const x = arr[i];
			buttons.push(
				<button
					className={`size-5 flex justify-center items-center rounded-sm ${theme === x ? 'shadow-inset' : 'shadow-outset'}`}
					key={x}
					title={x}
					onClick={() => setTheme(x)}
				>

				</button>
			);
		}

		const div =
			<div
				className='flex gap-2 bg-theme-primary'
				ref={ref}
			>
				{buttons}
			</div>;

		return div;
	}

	return (
		<div
			className='py-2 flex items-center gap-2 absolute right-0 top-0 transition-transform'
			style={{
				transform: `translateX(${open ? '0' : + width}px)`
			}}
			onMouseLeave={() => {
				setOpen(false);
				setHover(false);
			}}
		>
			<button
				className='size-12 flex justify-center items-center'
				title='theme picker'
				onClick={() => setOpen(!open)}
				onMouseOver={() => setHover(true)}
			>
				<img src={hover ? './gifs/color-wheel.gif' : './icons/color-wheel.png'} alt='' />
			</button>
			{createThemeButtons(themes)}

		</div>
	);
}

export default ThemeSwitcher;
