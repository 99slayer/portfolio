import React, { useState, useEffect } from 'react';
import '../css/File.css';
import minimizeIcon from '../assets/minimize-icon.png';
import maximizeIcon from '../assets/maximize-icon.png';
import closeIcon from '../assets/close-icon.png';
import fileIcon3 from '../assets/file-icon-3.png';

export function File(props) {
  const {
    openArr,
    visibleArr,
    closeWindow,
    hide,
    getWindowZIndex,
    setToActive,
    details
  } = props;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!openArr.includes(details.name)) {
      hide(details.name);
    }
  }, [openArr]);

  useEffect(() => {
    if (visibleArr.includes(details.name)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [visibleArr]);

  return (
    <section
      className={`${visible ? 'visible' : ''} file-template`}
      style={{ zIndex: getWindowZIndex(details.name) }}
      onClick={() => {
        setToActive(details.name);
      }}
    >
      <header className="file-header">
        <div className="file-heading">
          <img className="heading-icon" src={fileIcon3} />
          <h3 className="heading-text">FILE NAME</h3>
        </div>
        <div className="file-window-btns">
          <button className="file-window-btn">
            <img
              src={minimizeIcon}
              onClick={() => {
                hide(details.name);
              }}
            />
          </button>
          <button className="file-window-btn">
            <img src={maximizeIcon} />
          </button>
          <button
            className="file-window-btn"
            onClick={() => {
              closeWindow(details.name);
            }}
          >
            <img src={closeIcon} />
          </button>
        </div>
      </header>
      <div className="file-tabs">
        <button className="tab">
          <u>A</u>bout
        </button>
        <button className="tab">
          <u>L</u>inks
        </button>
      </div>
      <div className="file-content">
        <div className="file-description">
          <img />
          <p>
            This is a project description placeholder.
            <br />
            This is a project description placeholder.
            <br />
            This is a project description placeholder.
            <br />
            This is a project description placeholder.
            <br />
            This is a project description placeholder.
            <br />
          </p>
        </div>
        <div className="file-links">
          <p>
            Github repo: <a>github link</a>
          </p>
          <p>
            Live: <a>live link</a>
          </p>
        </div>
      </div>
      <div className="file-buttons">
        <button className="file-button">OK</button>
        <button className="file-button">Cancel</button>
      </div>
    </section>
  );
}
