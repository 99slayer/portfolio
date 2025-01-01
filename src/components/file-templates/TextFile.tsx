import { useRef, useState } from 'react';

function TextFile({ text }: { text: string }) {
	const ref = useRef<HTMLTextAreaElement>(null);
	const [tempText, setTempText] = useState<string | null>(null);

	return (
		<div
			className='flex-1'
		>
			<textarea
				className='min-w-[100%] min-h-[100%] px-2 outline-none bg-theme-primary'
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
