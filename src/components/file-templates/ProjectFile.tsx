import { useContext, useState } from 'react';
import { AppContext } from '../../context';
import { AppContextInterface, Size } from '../../types';

function ProjectFile(
	{ windowSize, iconName, desc, links, images }: {
		windowSize: Size,
		iconName: string,
		desc: string,
		links: { name: string, link: string }[],
		images: string[]
	}
) {
	const { imgModalRef, setImg } = useContext(AppContext) as AppContextInterface;
	const [hover, setHover] = useState<boolean>(false);

	function createLinks(arr: { name: string, link: string }[]) {
		const links = [];

		for (let i = 0; i < arr.length; i++) {
			const linkData = arr[i];
			links.push(
				<li
					className='w-[130px] py-[1px] flex justify-center text-[0.5rem] leading-[0.5rem] bg-theme-primary border-[1px] border-theme-trim shadow-btn active:shadow-btn-click active:bg-theme-highlight active:text-theme-text-highlight @[360px]:text-[0.7rem] @[360px]:leading-[0.7rem] @[360px]:w-[175px]'
					key={i}
				>
					<a
						href={linkData.link}
						target='_blank'
						rel='noopener noreferrer'
						draggable={false}
					>
						{linkData.name}
					</a>
				</li>
			);
		}

		return links;
	}

	function createImgBtns(arr: string[]) {
		const btns = [];

		for (let i = 0; i < arr.length; i++) {
			btns.push(
				<button
					className='border-[1px] border-theme-trim shadow-btn active:shadow-none active:bg-theme-trim active:text-theme-primary'
					key={arr[i]}
					onClick={() => {
						setImg(arr[i]);
						setTimeout(() => {
							imgModalRef.current!.showModal();
						}, 50);
					}}
				>
					<div
						className='py-[0.1rem] pr-[0.2rem] flex justify-center items-center gap-[0.1rem] relative'
					>
						<div
							className='absolute top-0 right-0 bottom-0 left-0 bg-theme-primary opacity-20'
						/>
						<img
							src='./icons/img-icon.ico'
							draggable='false'
							alt='Image file icon.'
						/>
						<p
							className='font-[family-name:Geneva] tracking-normal truncate'
						>
							{`IMG-${i + 1}.png`}
						</p>
					</div>
				</button>
			);
		}

		return btns;
	}

	return (
		<div
			className='@container flex-1 flex flex-col text-[0.8rem] leading-[0.8rem] bg-theme-primary'
		>
			<div className='flex border-b-[1px] border-b-theme-trim'>
				<div
					className='p-1 relative border-r-[1px] border-r-theme-trim'
					onPointerOver={() => setHover(true)}
					onPointerLeave={() => setHover(false)}
				>
					<div
						className='absolute top-1 left-1 bottom-1 right-1 bg-theme-primary opacity-20'
					/>
					<img
						className='max-w-[4rem] max-h-[4rem] border-[1px] border-theme-trim object-contain'
						src={hover ? `./gifs/${iconName}.gif` : `./icons/${iconName}.png`}
						draggable='false'
						alt='Spinning project icon.'
					/>
				</div>
				<ul
					className='self-start p-2 flex flex-col justify-center items-center gap-1'
				>
					{createLinks(links)}
				</ul>
			</div>
			<div
				className='p-[0.2rem] pb-[0.24rem] flex gap-[0.2rem] border-b-[1px] border-b-theme-trim'
			>
				{createImgBtns(images)}
			</div>
			<p
				className='p-1 px-2 text-[1.1rem] leading-[0.8rem] font-[family-name:Geneva] tracking-normal overflow-auto'
				style={{
					height: `${windowSize.height - 256}px`
				}}
			>
				{desc}
			</p>
		</div>
	);
}

export default ProjectFile;
