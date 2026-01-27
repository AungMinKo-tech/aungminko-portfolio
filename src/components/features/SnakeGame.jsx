import React, { useState, useEffect, useRef } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const gridSize = 20;
  const initialSnake = [{ x: 10, y: 10 }];
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        if (
          newHead.x < 0 ||
          newHead.x >= 20 ||
          newHead.y < 0 ||
          newHead.y >= 20 ||
          prevSnake.some((s) => s.x === newHead.x && s.y === newHead.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood({
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20),
          });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200);

    return () => clearInterval(moveSnake);
  }, [direction, food, gameOver]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);

    ctx.fillStyle = "#ef4444";
    ctx.fillRect(
      food.x * gridSize,
      food.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );

    ctx.fillStyle = "#0ea5e9";
    snake.forEach((part) => {
      ctx.fillRect(
        part.x * gridSize,
        part.y * gridSize,
        gridSize - 2,
        gridSize - 2
      );
    });
  }, [snake, food]);

  const resetGame = () => {
    setSnake(initialSnake);
    setScore(0);
    setGameOver(false);
    setDirection({ x: 1, y: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-slate-950 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">Snake Game</h2>
      <div className="text-sky-400 mb-2 font-mono">Score: {score}</div>

      <div className="relative border-4 border-slate-700 rounded-lg overflow-hidden bg-slate-950">
        <canvas ref={canvasRef} width={400} height={400} />
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
            <h3 className="text-red-500 text-3xl font-bold mb-4">Game Over!</h3>
            <button
              onClick={resetGame}
              className="px-6 py-2 bg-sky-500 text-white rounded-full font-bold hover:bg-sky-600"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
      <p className="mt-4 text-slate-500 text-sm">Use Arrow Keys to Play</p>
    </div>
  );
};

export default SnakeGame;
