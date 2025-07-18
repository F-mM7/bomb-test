export type GameState = 'start' | 'playing' | 'cleared' | 'failed';

export interface GameProgress {
  currentQuestion: number;
  gameState: GameState;
  startTime: string;
  [key: string]: unknown;
}

export interface WireCutState {
  isLeftCut: boolean;
  isRightCut: boolean;
}

export type WirePosition = 'left' | 'right';