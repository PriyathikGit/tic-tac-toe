import { useState, useEffect } from 'react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import { GameState, BoardState, Winner } from './types';
import './index.css';

const initializeBoard = (): BoardState => Array(9).fill(null);

  // check the all combination of winning
const calculateWinner = (squares: BoardState): Winner => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line };
    }
  }

  return null;
};

const App = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [initializeBoard()],
    currentStep: 0
  });
  const [winner, setWinner] = useState<Winner>(null);

  const currentSquares = gameState.history[gameState.currentStep];
  const xIsNext = gameState.currentStep % 2 === 0; // whose turn next
  const currentPlayer = xIsNext ? 'X' : 'O';

  useEffect(() => {
    const newWinner = calculateWinner(currentSquares);
    setWinner(newWinner);
  }, [currentSquares]);

  const handleClick = (index: number) => {
    if (winner || currentSquares[index]) return;

    const newSquares = [...currentSquares];
    newSquares[index] = currentPlayer;

    const newHistory = gameState.history.slice(0, gameState.currentStep + 1);
    setGameState({
      history: [...newHistory, newSquares],
      currentStep: newHistory.length
    });
  };

  const restartGame = () => {
    setGameState({
      history: [initializeBoard()],
      currentStep: 0
    });
    setWinner(null);
  };

  const isDraw = !winner && gameState.currentStep === 9;

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <GameStatus 
        winner={winner} 
        isDraw={isDraw} 
        currentPlayer={currentPlayer} 
      />
      <Board 
        squares={currentSquares} 
        onClick={handleClick} 
        winningLine={winner?.line} 
      />
      <button className="restart-btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
};

export default App;