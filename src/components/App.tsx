import component from './component';

function App() {
	return (
		<div className='min-h-screen flex'>
			<div className=''>
				<component.Display />
				<component.Taskbar />
			</div>
		</div>
	);
}

export default App;
