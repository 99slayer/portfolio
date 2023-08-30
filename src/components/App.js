import React, { useState } from 'react';
import '../css/App.css';
import { Loading } from './Loading';
import { Display } from './Display';

function App() {
  const [ready, setReady] = useState(false);

  window.onload = () => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  };

  return <div id="app">{ready ? <Display /> : <Loading />}</div>;
}

export default App;
