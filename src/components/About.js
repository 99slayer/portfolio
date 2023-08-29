import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';
import minimizeIcon from '../assets/minimize-icon.png';
import maximizeIcon from '../assets/maximize-icon.png';
import closeIcon from '../assets/close-icon.png';
import fileIcon1 from '../assets/file-icon-1.png';
import { windowDrag } from '../windowDrag';

export function About(props) {
  const {
    openArr,
    visibleArr,
    closeWindow,
    hide,
    setToActive,
    getWindowZIndex
  } = props;

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({
    x: 100,
    y: 100
  });
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (size.width > 0 && size.height > 0) {
      return;
    }

    if (visible) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
  });

  useEffect(() => {
    if (!openArr.includes('About Me')) {
      hide('About Me');
    }
  }, [openArr]);

  useEffect(() => {
    if (visibleArr.includes('About Me')) {
      setVisible(true);
    } else if (!visibleArr.includes('About Me')) {
      setVisible(false);
    }
  }, [visibleArr]);

  return (
    <div
      id="about"
      className={visible ? null : 'hidden'}
      ref={ref}
      data-component-name={'About Me'}
      style={{
        zIndex: getWindowZIndex('About Me'),
        top: position.y,
        left: position.x
      }}
      onClick={() => {
        setToActive('About Me');
      }}
      onTransitionEnd={() => {
        if (!openArr.includes('About Me')) {
          setPosition({
            x: 100,
            y: 100
          });
        }
      }}
    >
      <header id="about-header">
        <div
          id="about-upper-header"
          onMouseDown={(e) => {
            setToActive('About Me');
            e.target.style.cursor = 'grabbing';
            windowDrag(e, position, setPosition, size);
          }}
        >
          <div id="about-heading-cont">
            <img id="about-header-icon" src={fileIcon1} alt="" />
            <h3 id="about-folder-name">About Me - Notepad</h3>
          </div>
          <div className="about-window-btns">
            <button
              className="about-window-btn"
              onClick={() => {
                hide('About Me');
              }}
            >
              <img src={minimizeIcon} alt="" />
            </button>
            <button className="about-window-btn">
              <img src={maximizeIcon} alt="" />
            </button>
            <button
              className="about-window-btn"
              onClick={() => {
                closeWindow('About Me');
              }}
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
        <div id="about-btns">
          <button className="about-folder-btn">
            <u>F</u>ile
          </button>
          <button className="about-folder-btn">
            <u>E</u>dit
          </button>
          <button className="about-folder-btn">
            <u>F</u>ormat
          </button>
          <button className="about-folder-btn">
            <u>H</u>elp
          </button>
        </div>
      </header>
      <section id="pad">
        <p>- My name is Bob, and I'm a frontend developer!</p>
        <br />
        <p>- I was born and raised in FakeTown FA.</p>
      </section>
    </div>
  );
}
