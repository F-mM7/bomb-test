import type { Question } from '../../../types/data/question.types';

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
  style?: React.CSSProperties;
}