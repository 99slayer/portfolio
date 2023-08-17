import React from 'react';
import '../css/Display.css';
import { Projects } from './Projects';
import { Contact } from './Contact';

export function Display() {
  return (
    <div id='display'>
      <Projects />
      <Contact />
    </div>
  )
}
