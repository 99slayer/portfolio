import { useCallback, useContext } from 'react';
import { AppContext, DisplayContext } from '../context';
import { AppContextInterface, Coordinates, DisplayContextInterface, Size } from '../types';

function useReposition() {
	const { taskbarRef } = useContext(AppContext) as AppContextInterface;
	const { displaySize } = useContext(DisplayContext) as DisplayContextInterface;

	const reposition = useCallback((
		e: MouseEvent,
		initialClick: Coordinates,
		startPosition: Coordinates,
		windowSize: Size
	) => {
		const difference: Coordinates = {
			x: Math.min(e.pageX, displaySize.width) - initialClick.x,
			y: Math.min(e.pageY, displaySize.height) - initialClick.y
		};

		const newPosition: Coordinates = {
			x: startPosition.x + difference.x,
			y: startPosition.y + difference.y
		};

		if (newPosition.x <= 0) newPosition.x = 0;
		if (newPosition.y <= 0) newPosition.y = 0;
		if (newPosition.x > displaySize.width - windowSize.width) {
			newPosition.x = displaySize.width - windowSize.width;
		}
		if (newPosition.y > (displaySize.height - taskbarRef.current!.offsetHeight) - windowSize.height) {
			newPosition.y = (displaySize.height - taskbarRef.current!.offsetHeight) - windowSize.height;
		}

		return newPosition;
	}, [taskbarRef, displaySize]);

	return { reposition };
}

export default useReposition;
