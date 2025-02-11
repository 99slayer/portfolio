import { useRef, useState } from 'react';

function TextFile({ text }: { text: string }) {
	const ref = useRef<HTMLTextAreaElement>(null);
	const [tempText, setTempText] = useState<string | null>(null);

	return (
		<div className='flex-1 p-2 pr-3 pb-[20px] text-[0.8rem] leading-[0.8rem] bg-theme-secondary horizontal-lines'>
			<textarea
				className='w-[100%] min-h-[100%] px-1 outline-none bg-transparent cursor-custom-default'
				style={{ resize: 'none' }}
				ref={ref}
				defaultValue={tempText ?? text}
				spellCheck={false}
				autoFocus
				onFocus={(e) => {
					e.currentTarget.setSelectionRange(
						e.currentTarget.value.length,
						e.currentTarget.value.length
					);
				}}
				onChange={() => {
					setTempText(ref.current!.value);
				}}
			/>
		</div>
	);
}

export default TextFile;
