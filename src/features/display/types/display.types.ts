import type { Question } from '../../game/types/question.types';

export interface DisplayProps {
  pixelWidth: number;
  pixelHeight: number;
  remaining: number;
  input: string;
  currentQuestion?: Question;
  showCorrect?: boolean;
  isCleared?: boolean;
  isPaused?: boolean;
  isFailed?: boolean;
}