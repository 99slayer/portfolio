import React, {
	useContext,
	useLayoutEffect,
	useRef,
	useState
} from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import component from './component';
import { AppContext, DisplayContext } from '../context';
import { AppContextInterface, Size } from '../types';

function Display() {
	const { openArr, open } = useContext(AppContext) as AppContextInterface;
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [displaySize, setDisplaySize] = useState<Size>({
		width: 0,
		height: 0
	});

	useLayoutEffect(() => {
		setDisplaySize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	}, []);

	useResizeObserver(ref, () => {
		setDisplaySize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	});

	function createWindows(arr: string[]) {
		const windows = [];

		for (let i = 0; i < arr.length; i++) {
			const name = arr[i];
			windows.push(
				<component.Window key={name} name={name} />
			);
		}

		return windows;
	}

	return (
		<DisplayContext.Provider value={{ displaySize }}>
			<div
				className='flex-1 p-2 relative flex bg-theme-background'
				ref={ref}
			>
				<div className='flex-1 flex items-start gap-2'>
					<button
						onClick={() => {
							const name = 'text-window';
							open(name);
						}}
					>
						<img className='w-auto h-20' src='./icons/dank_laugh.png' alt='' />
					</button>
					<button
						onClick={() => {
							const name = 'project-window';
							open(name);
						}}
					>
						<img className='size-20' src='./icons/px-bird.png' alt='' />
					</button>
					<button>
						<img className='size-20' src='./icons/px-cog.png' alt='' />
					</button>
				</div>

				{createWindows(openArr)}
				<component.ThemeSwitcher />
				<component.StartMenu />
			</div>
		</DisplayContext.Provider>
	);
}

export default Display;
