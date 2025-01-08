import { useState } from 'react';

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
				<li className='flex gap-2' key={i}>
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
			className='flex-1 flex flex-col items-center gap-2 bg-theme-primary'
		>
			<ImageSlider images={images} />
			<div className='text-xl'>{desc}</div>
			<ul>
				{createLinks(links)}
			</ul>
		</div>
	);
}

function ImageSlider({ images }: { images: string[] }) {
	const [num, setNum] = useState<number>(0);

	return (
		<div
			className='max-w-[600px] py-2 flex gap-1 justify-center items-center'
		>
			<button
				onClick={() => {
					if (num - 1 < 0) {
						setNum(images.length - 1);
					} else setNum(num - 1);
				}}
			>
				<span className='material-symbols-outlined size-5 flex justify-center items-center text-3xl bg-theme-button'>
					arrow_left
				</span>
			</button>

			<div className='flex justify-center items-center'>
				<img className='h-[100%] object-contain' src={images[num]} />
			</div>

			<button
				onClick={() => {
					if (num + 1 > images.length - 1) {
						setNum(0);
					} else setNum(num + 1);
				}}
			>
				<span className='material-symbols-outlined size-5 flex justify-center items-center text-3xl bg-theme-button'>
					arrow_right
				</span>
			</button>
		</div>
	);
}

export default ProjectFile;
