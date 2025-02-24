import React, {
	useContext,
	useLayoutEffect,
	useRef,
	useState
} from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import component from './component';
import { AppContext, DisplayContext } from '../context';
import { AppContextInterface, FileData, Size } from '../types';
import files from '../files';

function Display() {
	const { openArr } = useContext(AppContext) as AppContextInterface;
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

	function createDisplayIcons(arr: FileData[]) {
		const displayIcons: JSX.Element[] = [];

		for (let i = 0; i < arr.length; i++) {
			const file = arr[i];
			if (file.name === 'Site Info') continue;
			displayIcons.push(
				<DisplayIcon
					key={file.name}
					iconName={file.name}
					iconType={file.type}
				/>
			);
		}

		return displayIcons;
	}

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
				<div
					className='flex-1 grid grid-cols-[repeat(auto-fit,_minmax(100px,_140px))] grid-rows-[repeat(auto-fit,_100px)] max-[560px]:grid-rows-[repeat(auto-fit,_100px)]'
				>
					{createDisplayIcons(files)}
				</div>

				{createWindows(openArr)}
				<component.ThemeMenu />
				<component.StartMenu />
			</div>
		</DisplayContext.Provider>
	);
}

function DisplayIcon(
	{ iconName, iconType }: {
		iconName: string,
		iconType: string
	}) {
	const { open } = useContext(AppContext) as AppContextInterface;
	const [iconActive, setIconActive] = useState<boolean>(false);

	return (
		<button
			className='flex flex-col items-center gap-1'
			onClick={() => open(iconName)}
			onMouseDown={() => setIconActive(true)}
			onMouseUp={() => setIconActive(false)}
		>
			<img
				className='size-[1.3rem] object-contain'
				src={
					iconType === 'Project' ?
						'./icons/project-file-icon.png' :
						'./icons/text-file-icon.png'
				}
				draggable='false'
				alt={`${iconName} icon`}
			/>
			<div className='max-w-[120px] leading-[0.6rem]'>
				<span
					className='px-[0.1rem] font-[family-name:Geneva] tracking-normal text-[0.9rem] box-decoration-clone'
					style={{
						color: iconActive ? 'var(--color-text-highlight)' : 'var(--color-text)',
						backgroundColor: iconActive ? 'var(--color-highlight)' : 'var(--color-background)'
					}}
				>
					{iconName}
				</span>
			</div>
		</button>
	);
}

export default Display;
