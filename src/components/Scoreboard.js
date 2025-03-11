import React from "react";

const Scoreboard = ({ score, onRestart }) => (
  <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold">Game Over!</h1>
    <h2 className="text-xl mt-4">Your Score: {score}</h2>
    <button
      className="mt-4 bg-red-500 px-4 py-2 rounded"
      onClick={onRestart}
    >
      Restart
    </button>
  </div>
);

export default Scoreboard;
