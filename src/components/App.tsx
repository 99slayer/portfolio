import { useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import component from './component';
import { AppContext } from '../context';
import themes from '../themes';
import { Size } from '../types';

function App() {
	const appRef = useRef<HTMLDivElement>(null);
	const [appSize, setAppSize] = useState<Size>({
		width: 0,
		height: 0
	});

	useResizeObserver(appRef, () => {
		setAppSize({
			width: appRef.current!.offsetWidth,
			height: appRef.current!.offsetHeight
		});
	});

	const taskbarRef = useRef<HTMLUListElement>(null);
	const imgModalRef = useRef<HTMLDialogElement>(null);

	const [img, setImg] = useState<string | null>(null);
	const [startOpen, setStartOpen] = useState<boolean>(false);
	const [themesOpen, setThemesOpen] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>(themes[0].name);
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

		if (index < 0) {
			copy.push(name);
			setActiveArr(copy);
			return;
		} else {
			copy.splice(index, 1);
			copy.push(name);
			setActiveArr(copy);
		}
	};

	const appContextValues = {
		taskbarRef,
		imgModalRef,
		img,
		setImg,
		startOpen,
		setStartOpen,
		themesOpen,
		setThemesOpen,
		theme,
		setTheme,
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
		<AppContext.Provider value={appContextValues}>
			<div
				className={`min-h-screen cursor-custom-default flex theme-${theme} text-theme-text`}
				ref={appRef}
			>
				<div
					className={'flex-1 flex flex-col relative bg'}
				>
					<component.ImageModal appSize={appSize} />
					<component.Display />
					<component.Taskbar />
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
