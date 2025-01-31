import { useRef, useState } from 'react';

function ProjectFile(
	{ desc, links, images }: {
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
				<li className='flex gap-1' key={i}>
					<p>{linkData.name + ':'}</p>
					<a href={linkData.link}>
						{linkData.link}
					</a>
				</li>
			);
		}

		return links;
	}

	return (
		<div
			className='flex-1 p-2 pb-[20px] flex flex-col justify-start items-center gap-2 bg-theme-secondary horizontal-lines'
		>
			<ImageSlider images={images} />
			<div>{desc}</div>
			<ul>
				{createLinks(links)}
			</ul>
		</div>
	);
}

function ImageSlider({ images }: { images: string[] }) {
	const leftRef = useRef<HTMLButtonElement>(null);
	const rightRef = useRef<HTMLButtonElement>(null);
	const [num, setNum] = useState<number>(0);

	return (
		<div className='flex gap-1 justify-center items-center'>
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
			</button>

			<div
				className='p-[2px] flex bg-black pixel-corners-window'
			>
				<div
					className='p-[4px] flex bg-[linear-gradient(90deg,_transparent_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight)_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight),_var(--color-highlight))] pixel-corners-window'
				>
					<div
						className='max-w-[600px] p-[6px] flex justify-center items-center bg-theme-primary pixel-corners-window'
					>
						<img
							className='flex-1 w-[100%] object-contain pixel-corners-window'
							src={images[num]}
							draggable='false'
						/>
					</div>
				</div>
			</div>

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
			</button>
		</div>
	);
}

export default ProjectFile;
