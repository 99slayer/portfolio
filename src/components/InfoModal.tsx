import { useContext } from 'react';
import { AppContext } from '../context';
import { AppContextInterface } from '../types';

function InfoModal() {
	const { modalRef } = useContext(AppContext) as AppContextInterface;

	return (
		<dialog
			className='mt-[120px] absolute bg-transparent z-[100]'
			ref={modalRef}
			onClick={() => modalRef.current!.close()}
		>
			<div
				className='p-[2px] bg-black pixel-corners-window'
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className='flex-1 p-[4px] flex bg-[linear-gradient(90deg,_transparent_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight)_calc(100%_-_13px),_var(--color-lowlight)_calc(100%_-_13px)),_linear-gradient(var(--color-highlight),_var(--color-highlight))] pixel-corners-window'
				>
					<div
						className='flex-1 p-[8px] flex bg-theme-primary pixel-corners-window'
					>
						<div className='flex-1 flex flex-col gap-1 pixel-corners-window'>
							<div
								className='mt-1 p-[2px] py-[0.1rem] px-1 flex items-center border-[4px] border-t-theme-lowlight border-r-theme-highlight border-b-theme-highlight border-l-theme-lowlight bg-theme-secondary horizontal-lines'
							>
								<h1>HEADER</h1>
								<button
									className='w-[32px] h-[28px] ml-auto flex justify-center items-center bg-theme-button shadow-heavy-outset hover:bg-theme-button-hover active:bg-theme-button-click active:shadow-heavy-inset button-noise'
									onClick={() => modalRef.current!.close()}
								>
									X
								</button>
							</div>
							<div
								className='flex-1 p-[4px] flex overflow-hidden bg-[linear-gradient(transparent_calc(100%_-_12px),_var(--color-highlight)_calc(100%_-_12px)),_linear-gradient(90deg,_transparent_calc(100%_-_12px),_var(--color-highlight)_calc(100%_-_12px)),_linear-gradient(var(--color-lowlight),_var(--color-lowlight))] pixel-corners-window'
							>
								<div
									className='flex-1 flex flex-col text-[0.8rem] leading-[0.8rem] bg-transparent pixel-corners-window'
								>
									<p
										className='w-[500px] h-[300px] p-1 bg-theme-secondary horizontal-lines'
									>
										PLACE HOLDER
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
}

export default InfoModal;
