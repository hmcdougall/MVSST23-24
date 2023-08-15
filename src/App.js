import './App.css';
import React, { useState } from 'react';
import cal from './AllTeamCalJuly23.pdf'
import Confetti from 'react-confetti'

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
  const [party, setParty] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1>MUSVSST 23-24</h1>
      </header>

      <div className='section'>
        <div className={'root' + (party ? ' party' : '')}>
          <Confetti
            // style={{ pointerEvents: 'none' }}
            numberOfPieces={party ? 500 : 0}
            recycle={false}
            onConfettiComplete={confetti => {
              setParty(false)
              confetti.reset()
            }}
          />
          <div>
            <h3>Links</h3>
            <a href={cal} target="_blank">Calender</a>
            <br />
            <a href='https://drive.google.com/drive/folders/1297K830XV66KvQmHEVpN5XNoz6Kj5PCL' target="_blank">Video Folder</a>
          </div>

          <br />
          <button type="button" onClick={() => {
            setCurrentName(getName());
            setParty(!party);
            }}>Random Name</button>
          <h3>{currentName}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
