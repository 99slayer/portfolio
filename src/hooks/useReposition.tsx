import { useCallback, useContext } from 'react';
import { DisplayContext } from '../context';
import { Coordinates, DisplayContextInterface, Size } from '../types';

function useReposition() {
	const { displaySize } = useContext(DisplayContext) as DisplayContextInterface;

	const reposition = useCallback((
		e: MouseEvent,
		initialClick: Coordinates,
		startPosition: Coordinates,
		windowSize: Size
	) => {
		const difference: Coordinates = {
			x: e.pageX - initialClick.x,
			y: e.pageY - initialClick.y
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
		if (newPosition.y > displaySize.height - windowSize.height) {
			newPosition.y = displaySize.height - windowSize.height;
		}

		return newPosition;
	}, [displaySize]);

	return { reposition };
}

export default useReposition;
