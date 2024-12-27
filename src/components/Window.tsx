import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from 'react';
import hook from '../hooks/hook';
import {
	AppContextInterface,
	Coordinates,
	Size,
	FileInfo
} from '../types';
import { AppContext } from '../context';
import files from '../files';

function Window({ name }: { name: string }) {
	const {
		visibleArr,
		activeArr,
		close,
		hide,
		setActive
	} = useContext(AppContext) as AppContextInterface;
	const { reposition } = hook.useReposition();
	const { resize } = hook.useResize();
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [windowData, setWindowData] = useState<FileInfo | null>(null);
	const [size, setSize] = useState<Size>({
		width: 300,
		height: 300
	});
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});

	useLayoutEffect(() => {
		setSize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	}, []);

	useEffect(() => {
		const data: FileInfo | undefined = files.find((x) => {
			return x.name === name;
		});

		if (!data) return;

		setWindowData(data);
	}, [name]);

	return (
		<section
			className='p-1 flex absolute bg-gray-700'
			ref={ref}
			style={{
				top: `${position.y}px`,
				left: `${position.x}px`,
				width: `${size.width}px`,
				height: `${size.height}px`,
				display: `${visibleArr.includes(name) ? 'flex' : 'none'}`,
				zIndex: `${activeArr.findIndex(x => x === name) + 1}`
			}}
			onMouseDown={() => setActive(name)}
		>
			<div className='flex-1 flex relative'>
				<div className='flex-1 flex flex-col'>
					<div
						className='px-2 flex items-center bg-white hover:cursor-grab'
						style={{
							backgroundColor: `${activeArr[activeArr.length - 1] === name ? 'white' : 'gray'}`
						}}
						onMouseDown={(e) => {
							(e.target as HTMLDivElement).style.cursor = 'grabbing';
							let mouseDown = true;
							const initClick: Coordinates = {
								x: e.pageX,
								y: e.pageY
							};
							window.onmousemove = (e: MouseEvent) => {
								if (!mouseDown) return;
								const newPosition: Coordinates = reposition(e, initClick, position, size);
								setPosition(newPosition);
							};
							window.onmouseup = (e: MouseEvent) => {
								(e.target as HTMLDivElement).style.cursor = '';
								mouseDown = false;
							};
						}}
					>
						<p>{name}</p>
						<div className='ml-auto flex gap-2'>
							<button
								className='w-[20px] h-[20px] flex justify-center items-center text-white bg-red-500'
								onClick={() => {
									hide(name);
								}}
							>
								_
							</button>
							<button
								className='w-[20px] h-[20px] flex justify-center items-center text-white bg-red-500'
								onClick={() => {
									close(name);
								}}
							>
								X
							</button>
						</div>
					</div>
					<div
						className='flex-1 p-2 flex bg-gray-300 overflow-y-auto'
					>
						{/* {CONTENT} */}
					</div>
				</div>
				<div
					className='w-[30px] h-[30px] absolute bottom-0 right-0 border-r-2 border-b-2 border-transparent hover:cursor-nwse-resize bg-[linear-gradient(135deg,_#FFFFFF00_65%,_#374151_65%)]'
					onMouseDown={(e) => {
						let mouseDown = true;
						const initClick = {
							x: e.clientX,
							y: e.clientY
						};

						window.onmousemove = (e: MouseEvent) => {
							if (!mouseDown) return;
							const newSize = resize(e, initClick, position, size);
							setSize(newSize);
						};
						window.onmouseup = () => {
							mouseDown = false;
						};
					}}
				></div>
			</div>
		</section>
	);
}

export default Window;
