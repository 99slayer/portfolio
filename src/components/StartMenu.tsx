import { useContext } from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';

function StartMenu() {
	const {
		startOpen,
		setStartOpen
	} = useContext(AppContext) as AppContextInterface;

	return (
		<div
			className='pb-16 absolute left-0 bottom-0 text-lg leading-[1.125rem] z-50'
			style={{ display: startOpen ? 'flex' : 'none' }}
			onMouseLeave={() => setStartOpen(false)}
		>
			<div
				className='flex flex-col gap-1'
			>
				<button
					className='flex justify-center items-center'
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-black bg-theme-secondary txt-bg-noise'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							className='size-[30px]'
							src='./icons/github-icon.png' alt='' />
						<p>GITHUB</p>
					</a>
				</button>
				<button
					className='flex justify-center items-center'
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-black bg-theme-secondary txt-bg-noise'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							className='size-[30px]'
							src='./icons/LinkedIn.png' alt='' />
						<p>LINKEDIN</p>
					</a>
				</button>
				<button
					className='flex justify-center items-center'
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-black bg-theme-secondary txt-bg-noise'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							className='size-[30px]'
							src='./icons/x-icon.png' alt='' />
						<p>X/TWITTER</p>
					</a>
				</button>
			</div>
		</div>
	);
}

export default StartMenu;
