import React, { useState, useEffect } from 'react';
import '../css/Projects.css';
import minimizeIcon from '../assets/minimize-icon.png';
import maximizeIcon from '../assets/maximize-icon.png';
import closeIcon from '../assets/close-icon.png';
import driveIcon from '../assets/hard-drive-icon.png';
import fileIcon1 from '../assets/file-icon-1.png';

export function Projects(props) {
  const { openArr, closeWindow } = props;

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (openArr.includes('project folder')) {
      setOpen(true);
    } else if (!openArr.includes('project folder')) {
      setOpen(false);
    };
  }, [openArr])

  return (
    <div id='projects' className={open ? 'open' : ''}>
      <header id="folder-header">
        <div id="upper-header">
          <div id="heading-cont">
            <img id="header-icon" src={driveIcon} alt="" />
            <h3 id="folder-name">projects</h3>
          </div>
          <div className="window-btns">
            <button className="window-btn"><img src={minimizeIcon} alt="" /></button>
            <button className="window-btn"><img src={maximizeIcon} alt="" /></button>
            <button className="window-btn" onClick={() => { closeWindow('project folder') }}><img src={closeIcon} alt="" /></button>
          </div>
        </div>
        <div id="folder-btns">
          <button className="folder-btn"><u>F</u>ile</button>
          <button className="folder-btn"><u>E</u>dit</button>
          <button className="folder-btn"><u>V</u>iew</button>
          <button className="folder-btn"><u>H</u>elp</button>
        </div>
      </header>
      <div id="file-icons">
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
        <button className="file">
          <img src={fileIcon1} alt="" />
          <p>file name</p>
        </button>
      </div>
      <footer id="folder-footer">
        <div className="footer-object">6 object(s)</div>
        <div className="footer-object"> </div>
      </footer>
    </div>
  )
}
