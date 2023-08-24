import React, { useState, useEffect } from 'react';
import '../css/Projects.css';
import minimizeIcon from '../assets/minimize-icon.png';
import maximizeIcon from '../assets/maximize-icon.png';
import closeIcon from '../assets/close-icon.png';
import driveIcon from '../assets/hard-drive-icon.png';
import fileIcon2 from '../assets/file-icon-2.png';
import { projectDetails } from '../project-details';
import { windowDrag } from '../windowDrag';

export function Projects(props) {
  const {
    openArr,
    visibleArr,
    openWindow,
    closeWindow,
    show,
    hide,
    setToActive,
    getWindowZIndex
  } = props;

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({
    x: 100,
    y: 100
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

  const renderFileIcons = (projects) => {
    const icons = [];

    for (let project in projects) {
      icons.push(
        <button
          className="file"
          onClick={() => {
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
      className={visible ? 'visible visible-animation' : ''}
      data-component-name={'My Projects'}
      style={{
        zIndex: getWindowZIndex('My Projects'),
        top: position.y,
        left: position.x
      }}
      onClick={() => {
        setToActive('My Projects');
      }}
    >
      <header id="folder-header">
        <div
          id="upper-header"
          onMouseDown={(e) => {
            setToActive('My Projects');
            e.target.style.cursor = 'grabbing';
            windowDrag(e, position, setPosition);
          }}
        >
          <div id="heading-cont">
            <img id="header-icon" src={driveIcon} alt="" />
            <h3 id="folder-name">My Projects</h3>
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
