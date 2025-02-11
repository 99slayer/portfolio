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
	const minWidth: number = 310;
	const minHeight: number = 220;
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
			className='p-[2px] flex absolute bg-black pixel-corners-window'
			ref={ref}
			style={{
				top: `${position.y}px`,
				left: `${position.x}px`,
				width: `${size.width}px`,
				height: `${size.height}px`,
				display: `${visibleArr.includes(name) ? 'flex' : 'none'}`,
				zIndex: `${activeArr.findIndex(x => x === name) + 1}`,
				filter: activeArr[activeArr.length - 1] === name ? 'brightness(1)' : 'brightness(0.8)'
			}}
			onMouseDown={() => setActive(name)}
		>
			<div
				className='flex-1 p-[4px] flex bg-[linear-gradient(90deg,_transparent_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight)_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight),_var(--color-highlight))] pixel-corners-window'
			>
				<div className='flex-1 p-[8px] flex bg-theme-primary pixel-corners-window'>
					<div className='flex-1 flex relative'>
						<div className='flex-1 flex flex-col gap-[6px]'>
							<div
								className='rc flex items-end gap-[6px] cursor-custom-grab'
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
									className='size-7 flex justify-center items-center border-[4px] border-t-theme-lowlight border-r-theme-highlight border-b-theme-highlight border-l-theme-lowlight bg-theme-secondary horizontal-lines'
								>
									<img
										className={
											`${windowData?.type === 'Text' ?
												'h-6 min-w-7 p-[0.1rem]' :
												'h-7 min-w-8 p-[0.05rem] translate-x-[-1px]'
											}`
										}
										src={
											windowData?.type === 'Text' ?
												'./icons/text-file-icon.png' :
												'./icons/project-file-icon.png'
										}
										draggable='false'
										alt=''
									/>
								</div>

								<div
									className='rc flex-1 w-[220px] py-[0.1rem] px-1 flex justify-between items-center border-[4px] border-t-theme-lowlight border-r-theme-highlight border-b-theme-highlight border-l-theme-lowlight bg-theme-secondary horizontal-lines cursor-custom-grab'
								>
									<p
										className={'rc truncate capitalize'}
										style={{
											textShadow: '2px 2px var(--color-highlight)'
										}}
									>
										{name}
									</p>
									<div className='flex gap-[4px]'>
										<button
											className='w-[32px] h-[28px] pb-[5px] flex justify-center items-center bg-theme-button shadow-heavy-outset hover:bg-theme-button-hover active:bg-theme-button-click active:shadow-heavy-inset button-noise'
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
											className='w-[32px] h-[28px] pt-[4px] flex justify-center items-center text-sm font-bold bg-theme-button shadow-heavy-outset hover:bg-theme-button-hover active:bg-theme-button-click active:shadow-heavy-inset button-noise'
											ref={maximizeRef}
											onMouseDown={(e) => e.stopPropagation()}
											onMouseUp={() => maximizeRef.current!.blur()}
											onClick={() => {
												setSize({
													width: displaySize.width,
													height: displaySize.height - taskbarRef.current!.offsetHeight
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
											className='w-[32px] h-[28px] flex justify-center items-center bg-theme-button shadow-heavy-outset hover:bg-theme-button-hover active:bg-theme-button-click active:shadow-heavy-inset button-noise'
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
							<div className='flex-1 flex pixel-corners-window'>
								<div
									className='flex-1 p-[4px] flex bg-[linear-gradient(transparent_calc(100%_-_12px),_var(--color-highlight)_calc(100%_-_12px)),_linear-gradient(90deg,_transparent_calc(100%_-_12px),_var(--color-highlight)_calc(100%_-_12px)),_linear-gradient(var(--color-lowlight),_var(--color-lowlight))] pixel-corners-window'
								>
									<div
										className='flex-1 flex bg-transparent pixel-corners-window'
									>
										{createContent(windowData)}
									</div>
								</div>
							</div>
						</div>
						<div
							className='size-6 absolute bottom-0 right-0 border-r-[12px] border-b-[12px] border-transparent cursor-custom-grab bg-[linear-gradient(135deg,_#FFFFFF00_76%,_var(--color-highlight)_76%)]'
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
				</div>
			</div>
		</section>
	);
}

export default Window;
