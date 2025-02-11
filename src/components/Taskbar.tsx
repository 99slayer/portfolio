import { useContext, useState } from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';

function Taskbar() {
	const {
		taskbarRef,
		startOpen,
		setStartOpen,
		openArr,
		open,
		visibleArr,
		activeArr,
		show,
		hide,
		setActive
	} = useContext(AppContext) as AppContextInterface;
	const [clicked, setClicked] = useState<boolean>(false);

	function createTabs(arr: string[]) {
		const tabs = [];

		for (let i = 0; i < arr.length; i++) {
			const name = arr[i];
			const active = activeArr[activeArr.length - 1] === name;

			tabs.push(
				<li
					className={`min-w-[60px] w-[240px] flex truncate text-[0.7rem] leading-[0.7rem] ${active ? 'border-[4px] border-t-theme-lowlight border-r-theme-highlight border-b-theme-highlight border-l-theme-lowlight' : ' border-[4px] border-t-theme-highlight border-r-theme-lowlight border-b-theme-lowlight border-l-theme-highlight'}`}
					style={{
						backgroundColor: `${active ? 'var(--color-btn-click)' : 'var(--color-btn)'}`,
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
						className='flex-1 w-[200px] py-[5px] hover:bg-theme-button-hover truncate'
					>
						<p
							className={`px-1 truncate ${active ? 'translate-y-[2px]' : ''}`}
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
			className='flex absolute left-0 right-0 bottom-0'
		>
			<div
				className='px-[2px] pt-[2px] bg-[linear-gradient(black_52px,_var(--color-highlight)_52px,_var(--color-highlight)_56px,_var(--color-primary)_56px)] pixel-corners-start-btn z-50'
			>
				<div
					className='px-[4px] pt-[4px] bg-[linear-gradient(var(--color-highlight)_54px,_var(--color-primary)_54px)] pixel-corners-start-btn'
				>
					<button
						className='size-14 p-[4px] flex justify-center items-center bg-theme-primary pixel-corners-start-btn'
						onClick={() => setStartOpen(!startOpen)}
						onMouseDown={() => setClicked(true)}
						onMouseUp={() => setClicked(false)}
					>
						<img
							id='start-btn'
							className='hover:brightness-[1.2]'
							src={
								clicked ?
									'./icons/start-clicked.png' :
									'./icons/start.png'
							}
							draggable='false'
							title='Start button'
							alt='Start button'
						/>
					</button>
				</div>
			</div>
			<div
				className='flex-1 overflow-hidden mt-[50px] pt-[2px] flex bg-black z-0'
			>
				<ul
					className='flex-1 min-w-[100%] py-[2px] pr-[8px] flex items-center gap-1 overflow-hidden border-t-[4px] border-t-[var(--color-highlight)] bg-theme-primary'
					ref={taskbarRef}
				>
					<li className='pr-[3px] pb-[1px] bg-gray-700 pixel-corners-info-btn'>
						<button
							className='size-[1.3rem] pt-[3px] pr-[1px] flex justify-center items-center text-white text-xl leading-[1.25rem] bg-blue-500 hover:brightness-[1.15] pixel-corners-info-btn'
							style={{
								textShadow: '2px 2px rgb(55 65 81 / var(--tw-bg-opacity, 1))'
							}}
							onClick={() => open('Site Info')}
						>
							i
						</button>
					</li>
					{createTabs(openArr)}
				</ul>
			</div>
		</div >
	);
}

export default Taskbar;
