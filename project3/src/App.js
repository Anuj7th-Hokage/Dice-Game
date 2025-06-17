import React, { useState } from 'react';
import './App.css';
import GamePlay from './conponents/GamePlay';
import GameStart from './conponents/GameStart';

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <GameStart toggle={toggleGamePlay} />}
    </>
  );
}

export default App;