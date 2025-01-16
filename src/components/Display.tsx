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
	const [hover, setHover] = useState<boolean>(false);
	const [hover2, setHover2] = useState<boolean>(false);
	const [hover3, setHover3] = useState<boolean>(false);
	const [hover4, setHover4] = useState<boolean>(false);

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
				className='flex-1 p-4 relative flex overflow-hidden'
				ref={ref}
			>
				<div className='flex items-start gap-4'>
					<button
						onClick={() => {
							const name = 'text-window';
							open(name);
						}}
						onMouseOver={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<img className='size-28 object-contain' src={hover ? './gifs/about-me.gif' : './icons/about-me.png'} alt='' />
					</button>

					<button
						onClick={() => {
							const name = 'project-window';
							open(name);
						}}
						onMouseOver={() => setHover2(true)}
						onMouseLeave={() => setHover2(false)}
					>
						<img className='size-28 object-contain' src={hover2 ? './gifs/squawker.gif' : './icons/squawker.png'} alt='' />
					</button>

					<button
						onMouseOver={() => setHover3(true)}
						onMouseLeave={() => setHover3(false)}
					>
						<img className='size-28 object-contain' src={hover3 ? './gifs/⅊.gif' : './icons/⅊.png'} alt='' />
					</button>

					<button
						onMouseOver={() => setHover4(true)}
						onMouseLeave={() => setHover4(false)}
					>
						<img className='size-28 object-contain' src={hover4 ? './gifs/brain.gif' : './icons/brain.png'} alt='' />
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
