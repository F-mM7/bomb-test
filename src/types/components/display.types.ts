import type { Question } from '../data/question.types';

export interface DisplayProps {
  width: number;
  height: number;
  pixelWidth: number;
  pixelHeight: number;
  remaining: number;
  input: string;
  currentQuestion?: Question;
  showCorrect?: boolean;
  isCleared?: boolean;
  isPaused?: boolean;
  isFailed?: boolean;
  style?: React.CSSProperties;
}