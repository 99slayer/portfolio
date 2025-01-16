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
			className='pt-[10px] pr-[10px] pb-2 absolute left-0 bottom-0 text-[30px] leading-[30px] z-50'
			style={{ display: startOpen ? 'flex' : 'none' }}
			onMouseLeave={() => setStartOpen(false)}
		>
			<div
				className='px-2 flex gap-2'
			>
				<button
					className='flex justify-center items-center'
				>
					<a
						className='size-[60px] flex-1'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='./icons/github-icon.png' alt='' />
					</a>
				</button>
				<button
					className='flex justify-center items-center'
				>
					<a
						className='size-[60px] flex-1'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='./icons/LinkedIn.png' alt='' />
					</a>
				</button>
				<button
					className='flex justify-center items-center'
				>
					<a
						className='size-[60px] flex-1'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='./icons/x-icon.png' alt='' />
					</a>
				</button>
			</div>
		</div>
	);
}

export default StartMenu;
