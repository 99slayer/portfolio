import {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';
import hook from '../hooks/hook';

function StartMenu() {
	const {
		startOpen,
		setStartOpen
	} = useContext(AppContext) as AppContextInterface;
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState<boolean>(false);
	const [tabs, setTabs] = useState<boolean>(false);

	const closeMenu = useCallback(() => {
		setStartOpen(false);
	}, [setStartOpen]);

	hook.useDetectOutside(ref, closeMenu, ['start-btn']);

	useEffect(() => {
		if (startOpen) {
			setOpen(true);
			setTimeout(() => {
				setTabs(true);
			}, 201);
		} else {
			setTabs(false);
			setTimeout(() => { setOpen(false); }, 300);
		}
	}, [startOpen]);

	return (
		<div
			className='pt-4 pr-4 pb-16 absolute left-0 bottom-0 text-lg leading-[1.125rem] z-50'
			style={{ display: open ? 'flex' : 'none' }}
			ref={ref}
		>
			<div
				className='flex flex-col gap-1'
			>
				<button
					className='flex justify-center items-center transition-transform'
					style={{
						transform: `translateX(${tabs ? '0' : '-100'}%)`
					}}
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-black bg-theme-secondary txt-bg-noise'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							className='size-[30px]'
							src='./icons/github-icon.png' alt=''
						/>
						<p>GITHUB</p>
					</a>
				</button>
				<button
					className='flex justify-center items-center transition-transform delay-100'
					style={{
						transform: `translateX(${tabs ? '0' : '-100'}%)`
					}}
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-black bg-theme-secondary txt-bg-noise'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							className='size-[30px]'
							src='./icons/LinkedIn.png' alt=''
						/>
						<p>LINKEDIN</p>
					</a>
				</button>
				<button
					className='flex justify-center items-center transition-transform delay-200'
					style={{
						transform: `translateX(${tabs ? '0' : '-100'}%)`
					}}
				>
					<a
						className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-black bg-theme-secondary txt-bg-noise'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							className='size-[30px]'
							src='./icons/x-icon.png' alt=''
						/>
						<p>X/TWITTER</p>
					</a>
				</button>
			</div>
		</div>
	);
}

export default StartMenu;
