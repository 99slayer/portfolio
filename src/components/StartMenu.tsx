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
