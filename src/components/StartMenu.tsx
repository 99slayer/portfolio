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
			className='pt-[10px] pr-[10px] absolute left-0 bottom-0 text-[30px] leading-[30px]'
			style={{ display: startOpen ? 'flex' : 'none' }}
			onMouseLeave={() => setStartOpen(false)}
		>
			<div
				className='p-[1px] flex flex-col gap-[1px] bg-slate-400'
			>
				<button
					className='flex bg-slate-300 hover:bg-slate-500'
				>
					<a
						className='px-6 flex-1'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						link-1
					</a>
				</button>
				<button
					className='flex bg-slate-300 hover:bg-slate-500'
				>
					<a
						className='px-6 flex-1'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						link-2
					</a>
				</button>
				<button
					className='flex bg-slate-300 hover:bg-slate-500'
				>
					<a
						className='px-6 flex-1'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						link-3
					</a>
				</button>
				<button
					className='flex bg-slate-300 hover:bg-slate-500'
				>
					<a
						className='px-6 flex-1'
						href=''
					>
						link-4
					</a>
				</button>
			</div>
		</div>
	);
}

export default StartMenu;
