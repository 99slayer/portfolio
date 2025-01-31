import { useCallback, useContext } from 'react';
import { AppContext, DisplayContext } from '../context';
import { AppContextInterface, Coordinates, DisplayContextInterface, Size } from '../types';

function useResize() {
	const minWidth: number = 310;
	const minHeight: number = 220;
	const { taskbarRef } = useContext(AppContext) as AppContextInterface;
	const { displaySize } = useContext(DisplayContext) as DisplayContextInterface;

	const resize = useCallback((
		e: MouseEvent,
		initClick: Coordinates,
		position: Coordinates,
		size: Size
	) => {
		const newSize: Size = {
			width: size.width + e.clientX - initClick.x,
			height: size.height + e.clientY - initClick.y
		};

		if (newSize.height + position.y > displaySize.height - taskbarRef.current!.offsetHeight) {
			newSize.height = displaySize.height - taskbarRef.current!.offsetHeight - position.y;
		}
		if (newSize.width + position.x > displaySize.width) {
			newSize.width = displaySize.width - position.x;
		}

		if (newSize.width <= minWidth) newSize.width = minWidth;
		if (newSize.height <= minHeight) newSize.height = minHeight;

		return newSize;
	}, [displaySize]);

	return { resize };
}

export default useResize;
