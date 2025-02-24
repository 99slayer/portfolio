import { useContext, useRef } from 'react';
import { AppContext } from '../context';
import { AppContextInterface, Size } from '../types';
import hook from '../hooks/hook';

function ImageModal({ appSize }: { appSize: Size }) {
	const { imgModalRef, img } = useContext(AppContext) as AppContextInterface;
	const imgRef = useRef<HTMLImageElement>(null);

	hook.useDetectOutside(imgRef, () => { imgModalRef.current!.close(); }, []);

	return (
		<dialog
			className='relative'
			ref={imgModalRef}
		>
			<button
				className='px-1 absolute top-1 right-1 bg-theme-background border-[1px] border-theme-trim shadow-btn text-theme-text active:shadow-btn-click focus:outline-none'
				onClick={() => imgModalRef.current!.close()}
			>
				X
			</button>
			<img
				className='border-[1px] border-theme-trim bg-theme-background'
				style={{
					imageRendering: 'auto',
					maxWidth: appSize.width - 20,
					maxHeight: appSize.height - 20
				}}
				draggable={false}
				ref={imgRef}
				src={img ?? ''}
			/>
		</dialog>
	);
}

export default ImageModal;
