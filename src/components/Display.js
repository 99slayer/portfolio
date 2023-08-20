import React, { useState } from 'react';
import '../css/Display.css';
// import folderIcon1 from '../assets/folder-icon-1.png';
import fileIcon1 from '../assets/file-icon-1.png';
import folderIcon2 from '../assets/folder-icon-2.png';
import { projectDetails } from '../project-details';
import { Taskbar } from './Taskbar';
import { Projects } from './Projects';
import { Contact } from './About';
import { File } from './File';

export function Display() {
  const [openArr, setOpenArr] = useState([]);
  const [visibleArr, setVisibleArr] = useState([]);

  // this is for keeping track of all the open windows z-index rankings.
  const [activeArr, setActiveArr] = useState([]);

  const openWindow = (x) => {
    // x needs to match the project-details.js filename for each project file.
    if (openArr.includes(x)) {
      return;
    }

    setOpenArr(openArr.concat(x));
  }

  const closeWindow = (x) => {
    const copy = [...openArr];
    const index = copy.indexOf(x);

    if (index >= 0) {
      copy.splice(index, 1);
      setOpenArr(copy);
    };
  };

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
    };
  };

  return (
    <div id='display'>
      <div id='display-grid'>
        <div className='display-cell'>
          <div id='projects-icon' className='display-icon' onClick={() => {
            openWindow('My Projects');
            show('My Projects');
          }}>
            <img src={folderIcon2} />
            <p>My Projects</p>
          </div>
        </div>
        <div className='display-cell'>
          <div id='about-me-icon' className='display-icon' onClick={() => {
            openWindow('About Me');
            show('About Me');
          }}>
            <img src={fileIcon1} />
            <p>About Me</p>
          </div>
        </div>
      </div>
      <Taskbar openArr={openArr} show={show} />
      <File openArr={openArr} visibleArr={visibleArr} hide={hide} closeWindow={closeWindow} details={projectDetails.photoTaggingApp} />
      <Projects openArr={openArr} visibleArr={visibleArr} hide={hide} closeWindow={closeWindow} />
      <Contact openArr={openArr} visibleArr={visibleArr} hide={hide} closeWindow={closeWindow} />
    </div>
  )
}
