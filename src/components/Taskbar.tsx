import { useContext, useState } from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';

function Taskbar() {
	const {
		startOpen,
		setStartOpen,
		openArr,
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
					className='py-[3px] px-4 flex'
					style={{
						backgroundColor: `${active ? 'var(--color-highlight)' : 'var(--color-lowlight)'}`
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
					<button className='flex-1'>
						{name}
					</button>
				</li>
			);
		}

		return tabs;
	}

	return (
		<div className='flex items-end'>
			<button
				className='size-14 p-[2px] flex justify-center items-center rounded-t-full bg-theme-primary'
				onClick={() => setStartOpen(!startOpen)}
				onMouseDown={() => setClicked(true)}
				onMouseUp={() => setClicked(false)}
			>
				<img src={clicked ? './icons/start-clicked.png' : './icons/start.png'} alt='' />
			</button>
			<ul className='h-[40px] flex-1 px-1 flex items-center gap-1 bg-theme-primary'>
				{createTabs(openArr)}
			</ul>
		</div>
	);
}

export default Taskbar;
