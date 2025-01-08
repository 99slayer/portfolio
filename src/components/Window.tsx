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
	FileData,
	DisplayContextInterface
} from '../types';
import component from './component';
import { AppContext, DisplayContext } from '../context';
import files from '../files';

function Window({ name }: { name: string }) {
	const {
		visibleArr,
		activeArr,
		close,
		hide,
		setActive
	} = useContext(AppContext) as AppContextInterface;
	const { displaySize } = useContext(DisplayContext) as DisplayContextInterface;
	const { reposition } = hook.useReposition();
	const { resize } = hook.useResize();
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [windowData, setWindowData] = useState<FileData | null>(null);
	const [size, setSize] = useState<Size>({
		width: displaySize.width >= 1000 ? 500 : 300,
		height: 600
	});
	const [position, setPosition] = useState({
		x: displaySize.width / 2 - size.width / 2,
		y: 100
	});

	useLayoutEffect(() => {
		setSize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	}, []);

	useEffect(() => {
		const data: FileData | undefined = files.find((x) => {
			return x.name === name;
		});

		if (!data) return;

		setWindowData(data);
	}, [name]);

	function createContent(data: FileData | null) {
		if (!data) return;
		let element;

		switch (data.type) {
			case 'Text':
				element = <component.TextFile
					text={data.text}
				/>;
				break;

			case 'Project':
				element = <component.ProjectFile
					desc={data.description}
					links={data.links}
					images={data.images}
				/>;
				break;

			default:
				break;
		}

		return element;
	}

	return (
		<section
			className='p-1 flex absolute bg-theme-secondary'
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
			<div className='min-w-[200px] flex-1 flex relative'>
				<div className='min-w-[200px] flex-1 flex flex-col gap-1'>
					<div
						className='px-2 py-[2px] flex justify-between items-center gap-1 bg-theme-background hover:cursor-grab'
						style={{
							backgroundColor: `${activeArr[activeArr.length - 1] === name ?
								'var(--color-highlight)' :
								'var(--color-lowlight)'}`
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
								if (size.width >= displaySize.width) {
									const newSize = { width: 500, height: 700 };
									const pos = { x: initClick.x, y: initClick.y };

									const newPosition: Coordinates = reposition(e, initClick, pos, newSize);
									setSize(newSize);
									setPosition(newPosition);
									(e.target as HTMLDivElement).style.cursor = '';
									return;
								}

								const newPosition: Coordinates = reposition(e, initClick, position, size);
								setPosition(newPosition);
							};
							window.onmouseup = (e: MouseEvent) => {
								(e.target as HTMLDivElement).style.cursor = '';
								mouseDown = false;
							};
						}}
					>
						<p className='truncate capitalize'>{name}</p>
						<div className='flex gap-1'>
							<button
								className='w-[26px] h-[18px] flex justify-center items-center bg-theme-button'
								onMouseDown={(e) => e.stopPropagation()}
								onClick={() => {
									hide(name);
								}}
							>
								_
							</button>
							<button
								className='w-[26px] h-[18px] flex justify-center items-center bg-theme-button'
								onMouseDown={(e) => e.stopPropagation()}
								onClick={() => {
									setSize({
										width: displaySize.width,
										height: displaySize.height
									});
									setPosition({
										x: 0,
										y: 0
									});
								}}
							>
								[]
							</button>
							<button
								className='w-[26px] h-[18px] flex justify-center items-center bg-theme-button'
								onMouseDown={(e) => e.stopPropagation()}
								onClick={() => {
									close(name);
								}}
							>
								X
							</button>
						</div>
					</div>
					<div className='flex-1 p-2 flex overflow-y-auto bg-theme-primary'>
						{createContent(windowData)}
					</div>
				</div>
				<div
					className='w-[30px] h-[30px] absolute bottom-0 right-0 border-r-2 border-b-2 border-transparent hover:cursor-nwse-resize bg-[linear-gradient(135deg,_#FFFFFF00_70%,_var(--color-secondary)_70%)]'
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
