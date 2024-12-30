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
				className='flex-1 p-2 relative flex bg-white'
				ref={ref}
			>
				<div className='flex-1 flex items-start gap-2'>
					<button
						className='p-2 bg-gray-400'
						onClick={() => {
							const name = 'text-window';
							open(name);
						}}
					>
						text-window
					</button>
					<button
						className='p-2 bg-gray-400'
						onClick={() => {
							const name = 'project-window';
							open(name);
						}}
					>
						project-window
					</button>
				</div>
				{createWindows(openArr)}
			</div>
		</DisplayContext.Provider>
	);
}

export default Display;
