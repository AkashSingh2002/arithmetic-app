import React, { useState, useEffect } from "react";

const Game = ({ timeLimit, difficulty, onGameEnd }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  
  useEffect(() => {
    generateProblem();
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          onGameEnd(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const generateProblem = () => {
    const operators = ["+", "-", "*", "/"];
    const newOperator = operators[Math.floor(Math.random() * operators.length)];
    const range = difficulty === "easy" ? 10 : difficulty === "medium" ? 50 : 100;
    const newNum1 = Math.floor(Math.random() * range) + 1;
    const newNum2 = Math.floor(Math.random() * range) + 1;
    
    setNum1(newNum1);
    setNum2(newNum2);
    setOperator(newOperator);
    setAnswer("");
  };

  const checkAnswer = () => {
    let correctAnswer;
    switch (operator) {
      case "+": correctAnswer = num1 + num2; break;
      case "-": correctAnswer = num1 - num2; break;
      case "*": correctAnswer = num1 * num2; break;
      case "/": correctAnswer = Math.floor(num1 / num2); break;
      default: return;
    }

    if (parseInt(answer) === correctAnswer) {
      setScore(score + 1);
      generateProblem();
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Time Left: {timeLeft}s</h2>
      <h1 className="text-2xl font-semibold my-4">
        {num1} {operator} {num2} = ?
      </h1>
      <input
        type="number"
        className="p-2 text-black rounded"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
      />
      <button
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
        onClick={checkAnswer}
      >
        Submit
      </button>
      <h2 className="mt-4 text-lg">Score: {score}</h2>
    </div>
  );
};

export default Game;
