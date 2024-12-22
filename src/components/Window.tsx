import React, { useLayoutEffect, useRef, useState } from 'react';
import hook from '../hooks/hook';
import { Coordinates, Size } from '../types';

function Window() {
	const { reposition } = hook.useReposition();
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState<Size>({
		width: 0,
		height: 0
	});
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});

	useLayoutEffect(() => {
		setSize({
			width: ref.current!.offsetWidth,
			height: ref.current!.offsetHeight
		});
	}, []);

	return (
		<div
			className='w-[300px] h-[160px] absolute bg-orange-500'
			ref={ref}
			style={{
				top: `${position.y}px`,
				left: `${position.x}px`
			}}
			onMouseDown={(e) => {
				let mouseDown = true;
				const initClick: Coordinates = {
					x: e.pageX,
					y: e.pageY
				};

				window.onmousemove = (e: MouseEvent) => {
					if (!mouseDown) return;

					const newPosition: Coordinates = reposition(e, initClick, position, size);
					setPosition(newPosition);
				};

				window.onmouseup = () => {
					mouseDown = false;
				};
			}}
		>
		</div>
	);
}

export default Window;
