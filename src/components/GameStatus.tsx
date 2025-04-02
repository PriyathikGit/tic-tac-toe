import { FC } from 'react';
import { Winner, SquareValue } from '../types';
import '../index.css';

interface GameStatusProps {
  winner: Winner;
  isDraw: boolean;
  currentPlayer: SquareValue;
}

const GameStatus: FC<GameStatusProps> = ({ winner, isDraw, currentPlayer }) => {
  if (winner) {
    return <div className="status">Winner: {winner.player}</div>;
  }

  if (isDraw) {
    return <div className="status">Game ended in a draw!</div>;
  }

  return <div className="status">Next player: {currentPlayer}</div>;
};

export default GameStatus;