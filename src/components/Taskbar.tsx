import { useContext } from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';

function Taskbar() {
	const {
		openArr,
		activeArr,
		show,
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
						backgroundColor: `${active ? 'white' : 'gray'}`
					}}
					key={name}
					onClick={() => {
						show(name);
						setActive(name);
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
		<div className='h-[30px] px-1 flex gap-1 bg-gray-400'>
			<ul className='flex items-center gap-1'>
				<li>
					<button
						className='px-4 bg-white'
					>START</button>
				</li>
				{createTabs(openArr)}
			</ul>
		</div>
	);
}

export default Taskbar;
