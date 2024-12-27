import { useState } from 'react';
import component from './component';
import { AppContext } from '../context';

function App() {
	const [openArr, setOpenArr] = useState<string[]>([]);
	const [visibleArr, setVisibleArr] = useState<string[]>([]);
	const [activeArr, setActiveArr] = useState<string[]>([]);

	const open = (name: string) => {
		if (!openArr.includes(name)) setOpenArr([...openArr, name]);
		if (!visibleArr.includes(name)) setVisibleArr([...visibleArr, name]);
		if (!activeArr.includes(name)) setActiveArr([...activeArr, name]);
	};

	const close = (name: string) => {
		setOpenArr(openArr.filter(x => x !== name));
		setVisibleArr(visibleArr.filter(x => x !== name));
		setActiveArr(activeArr.filter(x => x !== name));
	};

	const show = (name: string) => {
		if (!visibleArr.includes(name)) setVisibleArr([...visibleArr, name]);
	};

	const hide = (name: string) => {
		setVisibleArr(visibleArr.filter(x => x !== name));
		setActiveArr(activeArr.filter(x => x !== name));
	};

	const setActive = (name: string) => {
		const copy = [...activeArr];
		const index = activeArr.indexOf(name);
		copy.splice(index, 1);
		copy.push(name);
		setActiveArr(copy);
	};

	const contextValues = {
		openArr,
		visibleArr,
		activeArr,
		open,
		close,
		show,
		hide,
		setActive
	};

	return (
		<AppContext.Provider value={contextValues}>
			<div className='min-h-screen flex'>
				<div className='flex-1 flex flex-col'>
					<component.Display />
					<component.Taskbar />
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
