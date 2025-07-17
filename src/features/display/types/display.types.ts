import type { Question } from "../../game/types/question.types";

export interface DisplayProps {
  remaining: number;
  input: string;
  currentQuestion?: Question;
  showCorrect?: boolean;
  isCleared?: boolean;
  isPaused?: boolean;
  isFailed?: boolean;
}
