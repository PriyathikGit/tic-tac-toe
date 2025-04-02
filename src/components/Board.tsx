import { FC } from 'react';
import Square from './Square';
import { BoardState } from '../types';
import '../index.css';

interface BoardProps {
  squares: BoardState;
  onClick: (index: number) => void;
  winningLine?: number[];
}

const Board: FC<BoardProps> = ({ squares, onClick, winningLine }) => {
  const renderSquare = (index: number) => {
    const isWinningSquare = winningLine?.includes(index);
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => onClick(index)}
        isWinning={isWinningSquare ?? false}
      />
    );
  };

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default Board;