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
	const [aboutMeHover, setAboutMeHover] = useState<boolean>(false);
	const [squawkerHover, setSquawkerHover] = useState<boolean>(false);
	const [plHover, setPLHover] = useState<boolean>(false);
	const [memoryHover, setMemoryHover] = useState<boolean>(false);

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
				className='flex-1 p-4 pr-[5.7rem] relative flex overflow-hidden'
				ref={ref}
			>
				<div
					className='flex-1 grid grid-cols-[repeat(auto-fit,_minmax(160px,_180px))] grid-rows-[repeat(auto-fit,_210px)] max-[560px]:grid-rows-[repeat(auto-fit,_190px)]'
				>
					<button
						className='flex flex-col items-center'
						onClick={() => {
							const name = 'Pig Latin Converter';
							open(name);
						}}
						onMouseOver={() => setPLHover(true)}
						onMouseLeave={() => setPLHover(false)}
					>
						<img
							className='size-20 max-[560px]:size-[4.4rem] object-contain'
							src={plHover ? './gifs/⅊.gif' : './icons/⅊.png'}
							draggable='false'
							alt=''
						/>
						<p
							className='max-w-[4.8rem] p-[0.2rem] border-[2px] border-black text-[0.7rem] leading-[0.7rem] bg-theme-secondary text-center txt-bg-noise'
						>PIG LATIN CONVERTER</p>
					</button>

					<button
						className='flex flex-col items-center'
						onClick={() => {
							const name = 'Squawker';
							open(name);
						}}
						onMouseOver={() => setSquawkerHover(true)}
						onMouseLeave={() => setSquawkerHover(false)}
					>
						<img
							className='size-20 max-[560px]:size-[4.4rem] object-contain'
							src={squawkerHover ? './gifs/squawker.gif' : './icons/squawker.png'}
							draggable='false'
							alt=''
						/>
						<p
							className='max-w-[4.8rem] p-[0.2rem] border-[2px] border-black text-[0.7rem] leading-[0.7rem] bg-theme-secondary text-center txt-bg-noise'
						>SQUAWKER</p>
					</button>

					<button
						className='flex flex-col items-center'
						onClick={() => {
							const name = 'Memory Game';
							open(name);
						}}
						onMouseOver={() => setMemoryHover(true)}
						onMouseLeave={() => setMemoryHover(false)}
					>
						<img
							className='size-20 max-[560px]:size-[4.4rem] object-contain'
							src={memoryHover ? './gifs/brain.gif' : './icons/brain.png'}
							draggable='false'
							alt=''
						/>
						<p
							className='max-w-[4.8rem] p-[0.2rem] border-[2px] border-black text-[0.7rem] leading-[0.7rem] bg-theme-secondary text-center txt-bg-noise'
						>MEMORY GAME</p>
					</button>

					<button
						className='flex flex-col items-center'
						onClick={() => {
							const name = 'About Me';
							open(name);
						}}
						onMouseOver={() => setAboutMeHover(true)}
						onMouseLeave={() => setAboutMeHover(false)}
					>
						<img
							className='size-20 max-[560px]:size-[4rem] object-contain'
							src={aboutMeHover ? './gifs/about-me.gif' : './icons/about-me.png'}
							draggable='false'
							alt=''
						/>
						<p
							className='max-w-[4.8rem] p-[0.2rem] border-[2px] border-black text-[0.7rem] leading-[0.7rem] bg-theme-secondary text-center txt-bg-noise'
						>ABOUT ME</p>
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
