import React, { useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import component from './component';
import { DisplayContext } from '../context';
import { Size } from '../types';

function Display() {
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [displaySize, setDisplaySize] = useState<Size>({
		width: 0,
		height: 0
	});

	useLayoutEffect(() => {
		setDisplaySize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	}, []);

	useResizeObserver(ref, () => {
		setDisplaySize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	});

	return (
		<DisplayContext.Provider value={{ displaySize }}>
			<div
				className='flex-1 p-2 relative bg-white'
				ref={ref}
			>
				<component.Window />
			</div>
		</DisplayContext.Provider>
	);
}

export default Display;
