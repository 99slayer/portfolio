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

	hook.useDetectOutside(
		ref,
		closeMenu,
		['start-btn', 'start-img']
	);

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
			className='flex-col gap-1 absolute left-0 bottom-[1.85rem] text-lg leading-[1.125rem] z-50'
			style={{ display: open ? 'flex' : 'none' }}
			ref={ref}
		>

			<button
				className='flex justify-center items-center transition-transform'
				style={{
					transform: `translateX(${tabs ? '0' : '-100'}%)`
				}}
			>
				<a
					className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-theme-trim bg-theme-primary'
					href=''
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='size-[30px]'>
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='m23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1v-5h-1v-3h-2v1h-1v1h-1v-1h-4v1h-1v-1h-1v-1h-2v3h-1v5h1v1h1v1h2v2h-2v-1h-1v-1h-2v1h1v2h1v1h3v3h-1v-1h-2v-1h-1v-1h-1v-1h-1v-2h-1v-2h-1v-6h1v-2h1v-2h1v-1h1v-1h2v-1h2v-1h6v1h2v1h2v1h1v1h1v2h1v2z'
								fill='var(--color-trim)'
							/>
						</svg>
					</div>
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
					className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-theme-trim bg-theme-primary'
					href=''
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='size-[30px]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
						>
							<path
								d='m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z' fill='var(--color-trim)'
							/>
						</svg>
					</div>
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
					className='flex-1 p-[.1rem] px-2 flex items-center gap-1 border-[2px] border-l-0 border-theme-trim bg-theme-primary'
					href=''
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='size-[30px]'>
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='m15.5 10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2z'
								fill='var(--color-trim)'
							/>
						</svg>
					</div>
					<p>X/TWITTER</p>
				</a>
			</button>
		</div>
	);
}

export default StartMenu;
