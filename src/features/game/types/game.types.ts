export type GameState = 'start' | 'playing' | 'cleared' | 'failed';

export interface GameProgress {
  currentQuestion: number;
  gameState: GameState;
  startTime: string;
}

export type WirePosition = 'left' | 'right';