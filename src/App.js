import React, { useState } from "react";
import Game from "./components/Game";
import Settings from "./components/Settings";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [settings, setSettings] = useState({ difficulty: "medium", timeLimit: 60 });

  const startGame = (difficulty, timeLimit) => {
    setSettings({ difficulty, timeLimit });
    setGameStarted(true);
    setGameEnded(false);
  };

  const endGame = (finalScore) => {
    setScore(finalScore);
    setGameStarted(false);
    setGameEnded(true);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      {gameStarted ? (
        <Game {...settings} onGameEnd={endGame} />
      ) : gameEnded ? (
        <Scoreboard score={score} onRestart={() => setGameEnded(false)} />
      ) : (
        <Settings onStart={startGame} />
      )}
    </div>
  );
};

export default App;
