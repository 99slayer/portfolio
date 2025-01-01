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
			className='flex flex-col gap-2 bg-theme-primary'
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
			className='flex items-center gap-2'
		>
			<button
				className='justify-self-start w-[20px] h-[20px] p-1 flex justify-center items-center text-xl'
				onClick={() => {
					if (num - 1 < 0) {
						setNum(images.length - 1);
					} else setNum(num - 1);
				}}
			>
				{'<'}
			</button>

			<div className='justify-self-center'>
				<img src={images[num]} />
			</div>

			<button
				className='justify-self-end w-[20px] h-[20px] p-1 flex justify-center items-center text-xl'
				onClick={() => {
					if (num + 1 > images.length - 1) {
						setNum(0);
					} else setNum(num + 1);
				}}
			>
				{'>'}
			</button>
		</div>
	);
}

export default ProjectFile;
