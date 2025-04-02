export type SquareValue = 'X' | 'O' | null;

export type BoardState = SquareValue[];

export interface GameState {
    history: BoardState[];
    currentStep: number;
}

export type Winner = {
    player: SquareValue;
    line: number[];
} | null;