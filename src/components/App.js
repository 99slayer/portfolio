import React from 'react';
import '../css/App.css';
import { Display } from './Display';
import { Taskbar } from './Taskbar';

function App() {
  return (
    <div id='app'>
      <Display />
      <Taskbar />
    </div>
  )
}

export default App
