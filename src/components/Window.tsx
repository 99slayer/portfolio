import React, { useLayoutEffect, useRef, useState } from 'react';
import hook from '../hooks/hook';
import { Coordinates, Size } from '../types';

function Window() {
	const { reposition } = hook.useReposition();
	const { resize } = hook.useResize();
	const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState<Size>({
		width: 300,
		height: 300
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
		<section
			className='p-1 flex absolute bg-gray-700'
			ref={ref}
			style={{
				top: `${position.y}px`,
				left: `${position.x}px`,
				width: `${size.width}px`,
				height: `${size.height}px`,
			}}
		>
			<div className='flex-1 flex relative'>
				<div className='flex-1 flex flex-col'>
					<div
						className='px-2 bg-white hover:cursor-grab'
						onMouseDown={(e) => {
							e.stopPropagation();
							(e.target as HTMLDivElement).style.cursor = 'grabbing';
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
							window.onmouseup = (e: MouseEvent) => {
								(e.target as HTMLDivElement).style.cursor = '';
								mouseDown = false;
							};
						}}
					>HEADER</div>
					<div
						className='flex-1 p-2 flex bg-gray-300 overflow-y-auto'
					>
						<div className='flex-1 mb-[24px] overflow-y-auto'>
							CONTENT
						</div>
					</div>
				</div>
				<div
					className='w-[30px] h-[30px] absolute bottom-0 right-0 border-r-2 border-b-2 border-transparent hover:cursor-nwse-resize bg-[linear-gradient(135deg,_#FFFFFF00_65%,_#374151_65%)]'
					onMouseDown={(e) => {
						e.stopPropagation();
						let mouseDown = true;
						const initClick = {
							x: e.clientX,
							y: e.clientY
						};

						window.onmousemove = (e: MouseEvent) => {
							if (!mouseDown) return;
							const newSize = resize(e, initClick, position, size);
							setSize(newSize);
						};
						window.onmouseup = () => {
							mouseDown = false;
						};
					}}
				></div>
			</div>
		</section>
	);
}

export default Window;
