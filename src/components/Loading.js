import React, { useState, useEffect } from 'react';
import '../css/Loading.css';
import computerIcon from '../assets/computer-icon.png';
import uniqid from 'uniqid';

// ** START HERE **

export function Loading() {
  const [bars, setBars] = useState(0);

  useEffect(() => {
    const barInterval = setInterval(() => {
      console.log(bars);
      if (bars < 17) {
        setBars(bars + 1);
      }
    }, 60);

    return () => {
      clearInterval(barInterval);
    };
  });

  const renderBars = (x) => {
    const elements = [];

    for (let i = 0; i < x; i++) {
      elements.push(<Bar key={uniqid()} />);
    }

    return elements;
  };

  return (
    <div id="loading-cont">
      <div id="loading-window">
        <header id="loading-header"></header>
        <img id="loading-icon" src={computerIcon} alt="" />
        <p id="loading-text">Loading...</p>
        <div id="loading-bar-cont">{renderBars(bars)}</div>
      </div>
    </div>
  );
}

function Bar() {
  return <div className="loading-bar"></div>;
}
