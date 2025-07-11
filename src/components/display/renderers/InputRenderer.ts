import { DIGIT_FONT_3x5, KATAKANA_FONT_5x5 } from "../../../fonts";
import { toKatakana } from "../../../utils/kanaConverter";
import { shouldShowCursor } from "../../../utils/cursorUtils";
import { DISPLAY_CONSTANTS } from "../../../constants/display";
import { COLORS } from "../../../styles/constants/colors";
import type { Question } from "../../../types";

export class InputRenderer {
  private static readonly INPUT_LABEL = "INPUT";
  private static readonly KATAKANA_FONT_WIDTH = 5;
  private static readonly KATAKANA_SPACING = 6;
  private static readonly DIGIT_FONT_WIDTH = 3;

  static render(
    ctx: CanvasRenderingContext2D,
    input: string,
    currentQuestion: Question | undefined,
    isFailed: boolean,
    isPaused: boolean,
    remaining: number
  ): void {
    if (!currentQuestion || currentQuestion.id >= 4 || isFailed) return;
    
    ctx.fillStyle = COLORS.inputRed;
    
    this.renderInputLabel(ctx);
    this.renderInputText(ctx, input);
    this.renderCursor(ctx, input, isPaused, remaining);
  }

  private static renderInputLabel(ctx: CanvasRenderingContext2D): void {
    const { INPUT } = DISPLAY_CONSTANTS;
    
    this.INPUT_LABEL.split("").forEach((character, index) => {
      const pattern = DIGIT_FONT_3x5[character];
      if (pattern) {
        this.renderFontPattern(
          ctx,
          pattern,
          INPUT.LABEL_START_X + index * INPUT.TEXT_SPACING,
          INPUT.LABEL_START_Y,
          this.DIGIT_FONT_WIDTH
        );
      }
    });
  }

  private static renderInputText(
    ctx: CanvasRenderingContext2D,
    input: string
  ): void {
    if (!input) return;
    
    const { INPUT } = DISPLAY_CONSTANTS;
    const inputStartX = INPUT.LABEL_START_X + this.INPUT_LABEL.length * INPUT.TEXT_SPACING + INPUT.CURSOR_WIDTH;
    const katakanaText = toKatakana(input);
    
    katakanaText.split("").forEach((character, index) => {
      const pattern = KATAKANA_FONT_5x5[character] || KATAKANA_FONT_5x5["　"];
      if (pattern) {
        this.renderFontPattern(
          ctx,
          pattern,
          inputStartX + index * this.KATAKANA_SPACING,
          INPUT.LABEL_START_Y,
          this.KATAKANA_FONT_WIDTH
        );
      }
    });
  }

  private static renderCursor(
    ctx: CanvasRenderingContext2D,
    input: string,
    isPaused: boolean,
    remaining: number
  ): void {
    const { INPUT } = DISPLAY_CONSTANTS;
    
    let cursorX: number;
    if (input) {
      const katakanaText = toKatakana(input);
      const inputStartX = INPUT.LABEL_START_X + this.INPUT_LABEL.length * INPUT.TEXT_SPACING + INPUT.CURSOR_WIDTH;
      cursorX = inputStartX + katakanaText.length * this.KATAKANA_SPACING;
    } else {
      cursorX = INPUT.LABEL_START_X + this.INPUT_LABEL.length * INPUT.TEXT_SPACING + INPUT.CURSOR_WIDTH;
    }
    
    if (shouldShowCursor(isPaused, remaining)) {
      ctx.fillRect(cursorX, INPUT.LABEL_START_Y, INPUT.CURSOR_WIDTH, INPUT.CURSOR_Y_OFFSET);
    }
  }

  private static renderFontPattern(
    ctx: CanvasRenderingContext2D,
    pattern: string[],
    startX: number,
    startY: number,
    fontWidth: number
  ): void {
    pattern.forEach((row, y) => {
      for (let x = 0; x < fontWidth; x++) {
        if (row[x] === "1") {
          ctx.fillRect(startX + x, startY + y, 1, 1);
        }
      }
    });
  }
}