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
		taskbarRef,
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
	const minimizeRef = useRef<HTMLButtonElement>(null);
	const maximizeRef = useRef<HTMLButtonElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);
	const [windowData, setWindowData] = useState<FileData | null>(null);
	const minWidth: number = 600;
	const minHeight: number = 600;
	const [size, setSize] = useState<Size>({
		width: Math.max(((displaySize.width >= 900 ? 50 : 70) / 100) * displaySize.width, minWidth),
		height: Math.max(((displaySize.width >= 700 ? 60 : 50) / 100) * displaySize.height, minHeight)
	});
	const [position, setPosition] = useState({
		x: 20,
		y: 20
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
					windowSize={size}
					iconName={data.iconName}
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
			className='flex absolute border-[1px] border-theme-trim bg-theme-primary shadow-[2px_2px_var(--color-trim)]'
			ref={ref}
			style={{
				top: `${position.y}px`,
				left: `${position.x}px`,
				width: `${size.width}px`,
				height: `${size.height}px`,
				display: `${visibleArr.includes(name) ? 'flex' : 'none'}`,
				zIndex: `${activeArr.findIndex(x => x === name) + 1}`,
				filter: activeArr[activeArr.length - 1] === name ? 'brightness(1)' : 'brightness(0.9)'
			}}
			onMouseDown={() => setActive(name)}
		>
			<div className='flex-1 flex flex-col relative'>
				<div
					className='rc flex items-center gap-[6px] cursor-custom-grab'
					onMouseDown={(e) => {
						(e.target as HTMLDivElement).classList.add('cursor-custom-grabbing');
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
								return;
							}
							const newPosition: Coordinates = reposition(e, initClick, position, size);
							setPosition(newPosition);
						};
						window.onmouseup = () => {
							const cursorElements = document.querySelectorAll('.rc');
							cursorElements.forEach(el => el.classList.remove('cursor-custom-grabbing'));
							mouseDown = false;
						};
					}}
				>
					<div
						className='rc flex-1 w-[220px] py-[0.2rem] px-[0.1rem] flex justify-between items-stretch shadow-header cursor-custom-grab'
					>
						<div
							className={`rc flex-1 w-[220px] flex justify-between items-stretch ${activeArr[activeArr.length - 1] === name ? 'horizontal-lines' : ''}`}
						>
							<div
								className='w-[104px] py-[0.06rem] flex flex-col justify-between'
							/>
							<p
								className='rc px-2 truncate text-[0.74rem] leading-[0.72rem] font-semibold capitalize bg-theme-primary'
							>
								{name}
							</p>
							<div className='mr-2 px-1 flex items-center gap-[4px] bg-theme-primary'>
								<button
									className='w-[28px] h-[20px] pb-[5px] flex justify-center items-center border-[1px] border-theme-trim text-[0.7rem] leading-[0.7rem] shadow-btn bg-theme-primary active:bg-theme-highlight active:text-theme-text-highlight active:shadow-none'
									ref={minimizeRef}
									onMouseDown={(e) => e.stopPropagation()}
									onMouseUp={() => minimizeRef.current!.blur()}
									onClick={() => {
										hide(name);
									}}
								>
									_
								</button>
								<button
									className='w-[28px] h-[20px] flex justify-center items-center border-[1px] border-theme-trim text-[0.7rem] leading-[0.7rem] font-bold shadow-btn bg-theme-primary active:bg-theme-highlight active:text-theme-text-highlight active:shadow-none'
									ref={maximizeRef}
									onMouseDown={(e) => e.stopPropagation()}
									onMouseUp={() => maximizeRef.current!.blur()}
									onClick={() => {
										setSize({
											width: displaySize.width,
											height: displaySize.height - taskbarRef.current!.offsetHeight - 2
										});
										setPosition({
											x: 0,
											y: 0
										});
									}}
								>
									▭
								</button>
								<button
									className='w-[28px] h-[20px] flex justify-center items-center border-[1px] border-theme-trim text-[0.7rem] leading-[0.7rem] shadow-btn bg-theme-primary active:bg-theme-highlight active:text-theme-text-highlight active:shadow-none'
									ref={closeRef}
									onMouseDown={(e) => e.stopPropagation()}
									onMouseUp={() => closeRef.current!.blur()}
									onClick={() => {
										close(name);
									}}
								>
									X
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='flex-1 flex border-t-[2px] border-t-theme-trim'>
					{createContent(windowData)}
				</div>

				<div className='h-[30px] border-t-[1px] border-t-theme-trim' />

				<div
					className='size-6 absolute bottom-0 right-0 border-r-[4px] border-b-[4px] border-transparent cursor-custom-grab bg-[linear-gradient(135deg,_#FFFFFF00_80%,_var(--color-trim)_80%)]'
					style={{
						filter: 'brightness(1.2)'
					}}
					onMouseDown={(e) => {
						(e.target as HTMLDivElement).classList.remove('cursor-custom-grab');
						(e.target as HTMLDivElement).classList.add('cursor-custom-grabbing');
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
							(e.target as HTMLDivElement).classList.remove('cursor-custom-grabbing');
							(e.target as HTMLDivElement).classList.add('cursor-custom-grab');
							mouseDown = false;
						};
					}}
				/>
			</div>
		</section>
	);
}

export default Window;
