import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context';
import { AppContextInterface } from '../../types';

function ThemeSwitcher() {
	const {
		themes,
		theme,
		setTheme
	} = useContext(AppContext) as AppContextInterface;
	const ref = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState<boolean>(false);
	const width = '295';

	function createThemeButtons(arr: string[]) {
		const buttons = [];

		for (let i = 0; i < arr.length; i++) {
			const x = arr[i];
			buttons.push(
				<button
					className='w-[60px] h-[60px] flex justify-center items-center rounded-md bg-theme-button'
					style={{
						boxShadow: `${theme === x ? 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset' : 'none'}`
					}}
					key={x}
					onClick={() => setTheme(x)}
				>
					{x}
				</button>
			);
		}

		const div =
			<div
				className='p-2 flex flex-col gap-2 bg-theme-primary'
				ref={ref}
			>
				{buttons}
			</div>;

		return div;
	}

	return (
		<div
			className='flex flex-col absolute right-1 top-0 transition-transform'
			style={{
				transform: `translateY(${open ? '0' : '-' + width}px)`
			}}
		>
			{createThemeButtons(themes)}
			<button
				className='h-[38px] rounded-br-[30px_20px] rounded-bl-[30px_20px] bg-theme-button'
				onClick={() => setOpen(!open)}
			></button>
		</div>
	);
}

export default ThemeSwitcher;
