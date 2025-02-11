import { useRef, useState } from 'react';

function ProjectFile(
	{ windowSize, desc, links, images }: {
		windowSize: { width: number, height: number }
		desc: string,
		links: { name: string, link: string }[],
		images: string[]
	}
) {
	function createLinks(arr: { name: string, link: string }[]) {
		const links = [];

		for (let i = 0; i < arr.length; i++) {
			const linkData = arr[i];
			links.push(
				<li
					className='w-[175px] py-[1px] flex justify-center text-[0.5rem] leading-[0.5rem] bg-theme-button shadow-heavy-outset hover:bg-theme-button-hover active:bg-theme-button-click active:shadow-heavy-inset @[555px]:text-[0.7rem] @[555px]:leading-[0.7rem]'
					key={i}
				>
					<a
						href={linkData.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						{linkData.name}
					</a>
				</li>
			);
		}

		return links;
	}

	return (
		<div
			className='@container flex-1 p-2 text-[0.8rem] leading-[0.8rem] bg-theme-secondary horizontal-lines'
		>
			<div
				className='flex-1 flex flex-col gap-1'
			>
				<div className='flex-1 flex justify-center'>
					<div className='relative'>
						<ImageSlider images={images} windowSize={windowSize} />
						<div
							className='p-2 absolute bottom-1 left-4 right-4 border-[1px] border-black text-[0.6rem] leading-[0.6rem] bg-theme-secondary-transparent'
						>
							{desc}
						</div>
					</div>
				</div>
				<ul className='flex flex-col justify-center items-center gap-0 @[555px]:flex-row @[555px]:gap-1'>
					{createLinks(links)}
				</ul>
			</div>
		</div>
	);
}

function ImageSlider({ images, windowSize }: {
	images: string[],
	windowSize: { width: number, height: number }
}) {
	const leftRef = useRef<HTMLButtonElement>(null);
	const rightRef = useRef<HTMLButtonElement>(null);
	const [num, setNum] = useState<number>(0);

	return (
		<div
			className='flex gap-1 justify-center items-center overflow-hidden'
		>
			{
				images.length > 1 ?
					<button
						className='shadow-heavy-outset bg-theme-button hover:bg-theme-button-hover active:bg-theme-button-click button-noise focus:shadow-heavy-inset'
						ref={leftRef}
						onClick={() => {
							if (num - 1 < 0) {
								setNum(images.length - 1);
							} else setNum(num - 1);
						}}
						onMouseUp={() => leftRef.current!.blur()}
					>
						<span className='material-symbols-outlined size-5 flex justify-center items-center text-3xl'>
							arrow_left
						</span>
					</button> :
					<></>
			}

			<div
				className='p-[2px] flex bg-black pixel-corners-window'
			>
				<div
					className='p-[4px] flex bg-[linear-gradient(90deg,_transparent_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight)_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight),_var(--color-highlight))] pixel-corners-window'
				>
					<div
						className='p-[6px] flex justify-center items-center bg-theme-primary pixel-corners-window'
					>
						<img
							className='flex-1 object-contain pixel-corners-window'
							style={{
								imageRendering: 'initial',
								maxWidth: windowSize.width - 160,
								maxHeight: windowSize.height - 180
							}}
							src={images[num]}
							draggable='false'
						/>
					</div>
				</div>
			</div>

			{
				images.length > 1 ?
					<button
						className='shadow-heavy-outset bg-theme-button hover:bg-theme-button-hover active:bg-theme-button-click button-noise focus:shadow-heavy-inset'
						ref={rightRef}
						onClick={() => {
							if (num + 1 > images.length - 1) {
								setNum(0);
							} else setNum(num + 1);
						}}
						onMouseUp={() => rightRef.current!.blur()}
					>
						<span className='material-symbols-outlined size-5 flex justify-center items-center text-3xl'>
							arrow_right
						</span>
					</button> :
					<></>
			}
		</div>
	);
}

export default ProjectFile;
