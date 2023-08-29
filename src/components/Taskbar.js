import React from 'react';
import '../css/Taskbar.css';
import uniqid from 'uniqid';

export function Taskbar(props) {
  const { openArr, activeArr, show, setToActive } = props;

  const renderTabs = () => {
    const elements = [];

    openArr.forEach((e, index) => {
      elements.push(
        <li
          className={`${
            e === activeArr[activeArr.length - 1] ? 'active-tab' : ''
          } taskbar-tab`}
          key={uniqid()}
          onClick={() => {
            show(e);
            setToActive(e);
          }}
        >
          <p>{e}</p>
        </li>
      );
    });

    return elements;
  };

  return (
    <nav id="taskbar">
      <button id="start-btn">Start</button>
      <ul id="taskbar-tabs">{renderTabs()}</ul>
      <div id="time">10:24 PM</div>
    </nav>
  );
}
