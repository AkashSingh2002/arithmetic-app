import React, { useState } from "react";

const Settings = ({ onStart }) => {
  const [difficulty, setDifficulty] = useState("medium");
  const [timeLimit, setTimeLimit] = useState(60);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <label className="mb-2">Difficulty</label>
      <select
        className="p-2 text-black rounded"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      
      <label className="mt-4 mb-2">Time (seconds)</label>
      <input
        type="number"
        className="p-2 text-black rounded"
        value={timeLimit}
        onChange={(e) => setTimeLimit(Number(e.target.value))}
      />
      
      <button
        className="mt-4 bg-green-500 px-4 py-2 rounded"
        onClick={() => onStart(difficulty, timeLimit)}
      >
        Start Game
      </button>
    </div>
  );
};

export default Settings;
