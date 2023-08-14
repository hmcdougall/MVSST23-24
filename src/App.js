import './App.css';
import React, { useState } from 'react';

const NAMES = [
  'Annie',
  'Sammie',
  'Hannah',
  'Maddie',
  'Brynn',
  'Maura',
  'Melissa',
  'Gg',
  'Katie',
  'Kendall',
  'Piper',
  'Lizzie',
  'Paige South',
  'Flo',
  'Alessandra',
  'Paige (freshie)',
  'Amanda',
  'Eleanor',
  'Quinn',
  'Sydney'
]

function getName() {
  var rand = Math.floor(Math.random() * 20);
  const rand_name = NAMES[rand];
  return rand_name;
}

function App() {
  const [currentName, setCurrentName] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => setCurrentName(getName())}>Random Name</button>
        <h3>{currentName}</h3>
      </header>
    </div>
  );
}

export default App;
