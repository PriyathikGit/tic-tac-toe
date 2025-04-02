import { FC } from 'react';
import { SquareValue } from '../types';
import '../index.css'

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWinning: boolean;
}

const Square: FC<SquareProps> = ({ value, onClick, isWinning }) => {
  return (
    <button 
      className={`square ${isWinning ? 'winning' : ''}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;