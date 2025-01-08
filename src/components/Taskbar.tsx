import { useContext } from 'react';
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

	function createTabs(arr: string[]) {
		const tabs = [];

		for (let i = 0; i < arr.length; i++) {
			const name = arr[i];
			const active = activeArr[activeArr.length - 1] === name;

			tabs.push(
				<li
					className='px-4 flex'
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
		<div className='h-[30px] px-1 flex gap-1 bg-theme-primary'>
			<ul className='flex items-center gap-1'>
				<li>
					<button
						className='px-4 bg-theme-button'
						onClick={() => setStartOpen(!startOpen)}
					>
						START
					</button>
				</li>
				{createTabs(openArr)}
			</ul>
		</div>
	);
}

export default Taskbar;
