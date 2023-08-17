import React from 'react';
import '../css/Taskbar.css';

export function Taskbar() {
  return (
    <nav id='taskbar'>
      <button id="start-btn" className="taskbar-btn">#</button>
      <button className="taskbar-btn">projects</button>
      <button className="taskbar-btn">about</button>
      <div id="time">10:24 PM</div>
    </nav>
  )
}
