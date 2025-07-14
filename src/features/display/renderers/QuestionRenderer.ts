import { questionBitmaps } from "../../game/data/questions";
import { DISPLAY_CONSTANTS } from "../constants";
import { COLORS } from "../../../constants/colors";
import type { Question } from "../../game/types/question.types";

export class QuestionRenderer {
  static render(
    ctx: CanvasRenderingContext2D,
    currentQuestion: Question | undefined
  ): void {
    if (!currentQuestion) return;
    
    const questionBitmap = questionBitmaps.find(
      bitmap => bitmap.id === currentQuestion.id
    );
    if (!questionBitmap) return;

    const { QUESTION } = DISPLAY_CONSTANTS;
    ctx.fillStyle = COLORS.inputRed;
    
    questionBitmap.data.forEach((row: number[], yIndex: number) => {
      row.forEach((pixel: number, xIndex: number) => {
        if (pixel === 1) {
          ctx.fillRect(
            QUESTION.START_X + xIndex,
            QUESTION.START_Y + yIndex,
            1,
            1
          );
        }
      });
    });
  }
}