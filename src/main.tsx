import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import component from './components/component.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<component.App />
	</StrictMode>,
);
