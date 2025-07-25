import type { Question } from './question.types';
import type { WirePosition, GameState } from './game.types';

export interface BombState {
  isCleared: boolean;
  isFailed: boolean;
  finalTime: number | null;
  isRightCut: boolean;
  isLeftCut: boolean;
  showExplosion: boolean;
  showCorrect: boolean;
  input: string;
  isKeyboardAttached: boolean;
}

export interface UseWireHandlerProps {
  currentQuestion: number;
  isCleared: boolean;
  isFailed: boolean;
  isRightCut: boolean;
  isLeftCut: boolean;
  remaining: number;
  cutWire: (wire: WirePosition) => void;
  markAsCleared: (remaining: number, onGameClear: () => void) => void;
  markAsFailed: (remaining: number) => void;
  onGameClear: () => void;
}

export interface UseAnswerHandlerProps {
  currentQuestion: number;
  currentQuestionData: Question | undefined;
  input: string;
  gameState: GameState;
  showCorrectAnswer: () => void;
  hideCorrectAnswer: () => void;
  clearInput: () => void;
  onQuestionComplete: () => void;
}