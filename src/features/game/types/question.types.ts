export interface Question {
  id: number;
  text: string;
  answer: string;
}

export interface QuestionBitmap {
  id: number;
  data: number[][];
  answer: string;
}