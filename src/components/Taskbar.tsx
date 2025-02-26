import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';

function Taskbar() {
	const {
		taskbarRef,
		startOpen,
		setStartOpen,
		themesOpen,
		setThemesOpen,
		openArr,
		open,
		visibleArr,
		activeArr,
		show,
		hide,
		setActive
	} = useContext(AppContext) as AppContextInterface;
	const [hours, setHours] = useState<number>(getHrs());
	const [minutes, setMinutes] = useState<number | string>(getMins());
	const [AMPM, setAMPM] = useState<string>(getAMPM());

	useEffect(() => {
		setInterval(() => {
			setHours(getHrs());
			setMinutes(getMins());
			setAMPM(getAMPM());
		}, 1000);
	}, []);

	function getHrs() {
		const date: Date = new Date();
		let hrs: number = date.getHours();

		if (hrs > 12) {
			hrs -= 12;
		}

		return hrs;
	}

	function getMins() {
		const date: Date = new Date();
		let mins: number | string = date.getMinutes();

		if (mins < 10) {
			mins = '0' + mins;
		}

		return mins;
	}

	function getAMPM() {
		const date: Date = new Date();
		const hrs: number = date.getHours();

		if (hrs <= 12) {
			return 'AM';
		} else {
			return 'PM';
		}
	}

	function createTabs(arr: string[]) {
		const tabs = [];

		for (let i = 0; i < arr.length; i++) {
			const name = arr[i];
			const active = activeArr[activeArr.length - 1] === name;

			tabs.push(
				<li
					className='w-[240px] min-w-[40px] flex truncate border-[2px] border-l-[0px] border-t-[0px] border-theme-trim text-[0.5rem] leading-[0.5rem] bg-theme-secondary button-noise @[480px]:text-[0.7rem] @[480px]:leading-[0.7rem]'
					style={{
						boxShadow: active ? '2px 2px 4px var(--color-trim) inset' : '-1px -1px 4px var(--color-trim) inset, 1px 1px 4px var(--color-shadow-highlight) inset'
					}}
					key={name}
					onClick={() => {
						if (activeArr[activeArr.length - 1] !== name && visibleArr.includes(name)) {
							setActive(name);
						} else if (visibleArr.includes(name)) {
							hide(name);
						} else {
							show(name);
							setActive(name);
						}
					}}
				>
					<button
						className='flex-1 w-[200px] truncate'
					>
						<p
							className='px-1 truncate'
							style={{
								transform: active ? 'translateY(2px)' : ''
							}}
						>
							{name}
						</p>
					</button>
				</li>
			);
		}

		tabs.push();

		return tabs;
	}

	return (
		<div
			className='@container flex absolute left-0 right-0 bottom-0 border-t-[2px] border-t-theme-trim bg-theme-background'
		>
			<ul
				className='flex-1 min-w-[100%] flex items-stretch overflow-hidden'
				ref={taskbarRef}
			>
				<li className='bg-theme-secondary button-noise'>
					<button
						className='size-5 flex justify-center items-center border-[2px] border-l-[0px] border-t-[0px] border-theme-trim shadow-smooth-outset active:shadow-smooth-inset @[480px]:size-6'
						id='start-btn'
						onClick={() => setStartOpen(!startOpen)}
					>
						<svg
							className='p-[7px] active:translate-y-[2px]'
							id='start-img'
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m22 11h1v2h-1v1h-20v-1h-1v-2h1v-1h20z"
								fill='var(--color-trim)'
							/>
							<path
								d="m22 19h1v2h-1v1h-20v-1h-1v-2h1v-1h20z"
								fill='var(--color-trim)'
							/>
							<path
								d="m23 3v2h-1v1h-20v-1h-1v-2h1v-1h20v1z"
								fill='var(--color-trim)'
							/>
						</svg>
					</button>
				</li>
				<li
					className='size-5 flex justify-center items-center bg-theme-secondary border-[2px] border-l-[0px] border-t-[0px] border-theme-trim button-noise @[480px]:size-6'
				>
					<button
						className='size-5 flex justify-center items-center shadow-smooth-outset active:shadow-smooth-inset @[480px]:size-6'
						id='themes-btn'
						onClick={() => setThemesOpen(!themesOpen)}
					>
						<div
							className='flex-1 p-[4px] relative active:translate-y-[2px]'
							id='themes-cont'
						>
							<div
								className='absolute top-[0.15rem] right-[0.15rem] bottom-[0.15rem] left-[0.15rem] bg-theme-secondary opacity-30'
								id='themes-overlay'
							/>
							<img
								id='themes-img'
								src='./icons/color-wheel.png'
								draggable='false'
								alt='Theme changer icon.'
							/>
						</div>
					</button>
				</li>
				<li className='bg-theme-secondary button-noise'>
					<button
						className='size-5 flex justify-center items-center border-[2px] border-l-[0px] border-t-[0px] border-theme-trim shadow-smooth-outset active:shadow-smooth-inset @[480px]:size-6'
						onClick={() => open('Site Info')}
					>
						<svg
							className='p-[4px] active:translate-y-[2px]'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='m22 9v-2h-1v-2h-1v-1h-1v-1h-2v-1h-2v-1h-6v1h-2v1h-2v1h-1v1h-1v2h-1v2h-1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1v-6zm-11-3h2v2h-2zm-1 9h1v-5h-1v-1h3v6h1v2h-4z'
								fill='var(--color-trim)'
							/>
							<path
								d='m0 0h24v24h-24z'
								fill='none'
							/>
						</svg>
					</button>
				</li>
				{createTabs(openArr)}
				<li
					className='ml-auto px-0 min-w-[80px] flex justify-center items-center text-[0.5rem] leading-[0.5rem] @[480px]:min-w-[134px] @[480px]:px-[10px] @[480px]:text-[0.8rem]'
				>
					{hours + ':' + minutes + ' ' + AMPM}
				</li>
			</ul>
		</div >
	);
}

export default Taskbar;
