import React, { useState, useEffect } from 'react';
import '../css/Taskbar.css';

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
