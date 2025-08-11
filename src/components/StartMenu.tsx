import {
	useContext,
	useRef
} from 'react';
import { AppContext } from '../context';
import { AppContextInterface, SocialInterface } from '../types';
import hook from '../hooks/hook';
import socials from '../socials';

function StartMenu() {
	const {
		startOpen,
		cycleStartMenu,
		startTabs
	} = useContext(AppContext) as AppContextInterface;
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	hook.useDetectOutside(
		startOpen,
		ref,
		cycleStartMenu,
		['start-li', 'start-btn']
	);

	function createStartButtons(arr: SocialInterface[]) {
		const buttons: JSX.Element[] = [];

		for (let i = 0; i < arr.length; i++) {
			const social = arr[i];

			buttons.push(
				<button
					className='flex justify-center items-center transition-transform'
					style={{
						transform: `translateX(${startTabs ? '0' : '-100'}%)`,
						transitionDelay: `${i * 100}ms`
					}}
					key={social.name}
					title={social.name}
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-theme-trim bg-theme-primary'
						href={social.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='size-[30px]'>
							{social.icon}
						</div>
						<p>{social.name}</p>
					</a>
					{social.name === 'EMAIL' ?
						<div
							className='size-[43px] ml-[4px] p-[4px] flex justify-center items-center border-[2px] border-theme-trim bg-theme-primary'
							title='copy email'
							onClick={() => {
								navigator.clipboard.writeText(import.meta.env.VITE_EMAIL);
							}}
						>
							<svg
								id="Copy"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<polygon points="16 20 16 22 15 22 15 23 3 23 3 22 2 22 2 6 3 6 3 5 6 5 6 20 16 20" fill='var(--color-trim)' />
								<path d="m16,7V1h-8v1h-1v16h1v1h13v-1h1V7h-6Zm4,10h-11V3h5v6h6v8Z" fill='var(--color-trim)' />
								<polygon points="22 5 22 6 17 6 17 1 18 1 18 2 19 2 19 3 20 3 20 4 21 4 21 5 22 5" fill='var(--color-trim)' />
							</svg>
						</div> :
						<></>
					}
				</button>
			);
		}

		return buttons;
	}

	return (
		<div
			className='flex-col gap-1 absolute left-0 bottom-[1.85rem] text-lg leading-[1.125rem] z-50'
			style={{ display: startOpen ? 'flex' : 'none' }}
			ref={ref}
		>
			{createStartButtons(socials)}
		</div>
	);
}

export default StartMenu;
