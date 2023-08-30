import React, { useState } from 'react';
import '../css/Display.css';
import fileIcon1 from '../assets/file-icon-1.png';
import folderIcon2 from '../assets/folder-icon-2.png';
import { projectDetails } from '../project-details';
import { Taskbar } from './Taskbar';
import { Projects } from './Projects';
import { About } from './About';
import { File } from './File';

export function Display() {
  const [openArr, setOpenArr] = useState([]);
  const [visibleArr, setVisibleArr] = useState([]);
  const [activeArr, setActiveArr] = useState([]);

  // ------------------------------------- //
  const openWindow = (x) => {
    // x needs to match the project-details.js filename for each project file.
    if (openArr.includes(x)) {
      return;
    }

    setOpenArr(openArr.concat(x));
  };

  const closeWindow = (x) => {
    const copy = [...openArr];
    const index = copy.indexOf(x);

    if (index >= 0) {
      copy.splice(index, 1);
      setOpenArr(copy);
    }
  };
  // ------------------------------------- //

  // ------------------------------------- //
  const show = (x) => {
    if (visibleArr.includes(x)) {
      return;
    }

    setVisibleArr(visibleArr.concat(x));
  };

  const hide = (x) => {
    const copy = [...visibleArr];
    const index = copy.indexOf(x);

    if (index >= 0) {
      copy.splice(index, 1);
      setVisibleArr(copy);
    }
  };
  // ------------------------------------- //

  // ------------------------------------- //
  const setToActive = (x) => {
    if (activeArr[activeArr.length - 1] === x) {
      return;
    }

    if (activeArr.includes(x)) {
      removeFromActive(x);
    }

    setActiveArr(activeArr.concat(x));
  };

  const removeFromActive = (x) => {
    const index = activeArr.indexOf(x);

    if (index >= 0) {
      setActiveArr(activeArr.splice(index, 1));
    }
  };
  // ------------------------------------- //

  const getWindowZIndex = (x) => {
    const index = activeArr.indexOf(x);
    return index + 1;
  };

  const renderFiles = (projects) => {
    const fileElements = [];

    for (let project in projects) {
      fileElements.push(
        <File
          openArr={openArr}
          visibleArr={visibleArr}
          activeArr={activeArr}
          closeWindow={closeWindow}
          hide={hide}
          getWindowZIndex={getWindowZIndex}
          setToActive={setToActive}
          details={projects[project]}
          key={projects[project].id}
        />
      );
    }

    return fileElements;
  };

  return (
    <div id="display">
      <div id="display-grid">
        <div className="display-cell">
          <div
            id="projects-icon"
            className="display-icon"
            onClick={() => {
              openWindow('My Projects');
              show('My Projects');
              setToActive('My Projects');
            }}
          >
            <img src={folderIcon2} />
            <p>My Projects</p>
          </div>
        </div>
        <div className="display-cell">
          <div
            id="about-me-icon"
            className="display-icon"
            onClick={() => {
              openWindow('About Me');
              show('About Me');
              setToActive('About Me');
            }}
          >
            <img src={fileIcon1} />
            <p>About Me</p>
          </div>
        </div>
      </div>
      <Taskbar
        openArr={openArr}
        activeArr={activeArr}
        show={show}
        setToActive={setToActive}
      />
      {renderFiles(projectDetails)}
      <Projects
        openArr={openArr}
        visibleArr={visibleArr}
        activeArr={activeArr}
        openWindow={openWindow}
        closeWindow={closeWindow}
        show={show}
        hide={hide}
        setToActive={setToActive}
        getWindowZIndex={getWindowZIndex}
      />
      <About
        openArr={openArr}
        visibleArr={visibleArr}
        activeArr={activeArr}
        closeWindow={closeWindow}
        hide={hide}
        setToActive={setToActive}
        getWindowZIndex={getWindowZIndex}
      />
    </div>
  );
}
