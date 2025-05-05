import { RefObject, useEffect } from 'react';

function useDetectOutside(
	open: boolean,
	ref: RefObject<HTMLElement>,
	func: () => void,
	exceptions: string[]
) {
	useEffect(() => {
		function handleClick(e: Event) {
			const exceptionFound: boolean = exceptions.includes((e.target as Element).id);

			if (
				!ref.current!.contains(e.target as Node) &&
				!exceptionFound
			) func();
		}

		if (open) document.addEventListener('mousedown', handleClick);

		return () => document.removeEventListener('mousedown', handleClick);
	}, [open, ref, func, exceptions]);
}

export default useDetectOutside;
