import React, { useState, useEffect, useRef } from 'react';
import '../css/Projects.css';
import minimizeIcon from '../assets/minimize-icon.png';
import maximizeIcon from '../assets/maximize-icon.png';
import closeIcon from '../assets/close-icon.png';
import driveIcon from '../assets/hard-drive-icon.png';
import fileIcon2 from '../assets/file-icon-2.png';
import { projectDetails } from '../project-details';
import { windowDrag } from '../windowDrag';
import uniqid from 'uniqid';

export function Projects(props) {
  const {
    openArr,
    visibleArr,
    activeArr,
    openWindow,
    closeWindow,
    show,
    hide,
    setToActive,
    getWindowZIndex
  } = props;

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({
    x: 100,
    y: 100
  });
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  // This is pretty scuffed but it's working.
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
    if (!openArr.includes('My Projects')) {
      hide('My Projects');
    }
  }, [openArr]);

  useEffect(() => {
    if (visibleArr.includes('My Projects')) {
      setVisible(true);
    } else if (!visibleArr.includes('My Projects')) {
      setVisible(false);
    }
  }, [visibleArr]);

  useEffect(() => {
    if (activeArr[activeArr.length - 1] === 'My Projects') {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeArr]);

  const renderFileIcons = (projects) => {
    const icons = [];

    for (let project in projects) {
      icons.push(
        <button
          className="file"
          key={uniqid()}
          onClick={(e) => {
            e.stopPropagation();
            openWindow(projects[project].name);
            show(projects[project].name);
            setToActive(projects[project].name);
          }}
        >
          <img src={fileIcon2} alt="" />
          <p>{projects[project].name}</p>
        </button>
      );
    }

    return icons;
  };

  return (
    <div
      id="projects"
      className={visible ? null : 'hidden'}
      ref={ref}
      data-component-name={'My Projects'}
      style={{
        zIndex: getWindowZIndex('My Projects'),
        top: position.y,
        left: position.x
      }}
      onClick={() => {
        setToActive('My Projects');
      }}
      onTransitionEnd={() => {
        if (!openArr.includes('My Projects')) {
          setPosition({
            x: 100,
            y: 100
          });
        }
      }}
    >
      <header id="folder-header">
        <div
          id="upper-header"
          // ** HERE **
          style={active ? { backgroundImage: 'var(--active-blue)' } : null}
          onMouseDown={(e) => {
            setToActive('My Projects');
            e.target.style.cursor = 'grabbing';
            windowDrag(e, position, setPosition, size);
          }}
        >
          <div id="heading-cont">
            <img id="header-icon" src={driveIcon} alt="" />
            <h3
              id="folder-name"
              style={active ? null : { color: 'var(--border-main-color)' }}
            >
              My Projects
            </h3>
          </div>
          <div className="window-btns">
            <button
              className="window-btn"
              onClick={() => {
                hide('My Projects');
              }}
            >
              <img src={minimizeIcon} alt="" />
            </button>
            <button className="window-btn">
              <img src={maximizeIcon} alt="" />
            </button>
            <button
              className="window-btn"
              onClick={() => {
                closeWindow('My Projects');
              }}
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
        <div id="folder-btns">
          <button className="folder-btn">
            <u>F</u>ile
          </button>
          <button className="folder-btn">
            <u>E</u>dit
          </button>
          <button className="folder-btn">
            <u>V</u>iew
          </button>
          <button className="folder-btn">
            <u>H</u>elp
          </button>
        </div>
      </header>
      <div id="file-icons">{renderFileIcons(projectDetails)}</div>
      <footer id="folder-footer">
        <div className="footer-object">{`${
          Object.keys(projectDetails).length
        } object(s)`}</div>
        <div className="footer-object"> </div>
      </footer>
    </div>
  );
}
