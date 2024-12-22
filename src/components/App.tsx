import component from './component';

function App() {
	return (
		<div className='min-h-screen flex'>
			<div className='flex-1 flex flex-col'>
				<component.Display />
				<component.Taskbar />
			</div>
		</div>
	);
}

export default App;
