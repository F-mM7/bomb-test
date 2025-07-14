import { DIGIT_FONT_3x5 } from "../../fonts";
import { TIMER_CONSTANTS } from "./constants";
import { shouldShowCursor } from "../../utils/cursorUtils";
import { FontRenderer } from "../../utils/fontRenderer";
import { COLORS } from "../../constants/colors";

export class TimerRenderer {
  static render(
    ctx: CanvasRenderingContext2D,
    remaining: number,
    isPaused: boolean
  ): void {
    const totalSeconds = Math.ceil(remaining / TIMER_CONSTANTS.MILLISECONDS_PER_SECOND);
    const minutes = Math.floor(totalSeconds / TIMER_CONSTANTS.SECONDS_PER_MINUTE);
    const seconds = totalSeconds % TIMER_CONSTANTS.SECONDS_PER_MINUTE;
    const timeText = `${minutes.toString().padStart(2, "0")}${seconds
      .toString()
      .padStart(2, "0")}`;

    ctx.fillStyle = COLORS.inputRed;
    
    this.renderDigits(ctx, timeText);
    this.renderColon(ctx, remaining, isPaused);
  }

  private static renderDigits(
    ctx: CanvasRenderingContext2D,
    timeText: string
  ): void {
    const { DIGIT_WIDTH_WITH_SPACING, POSITION } = TIMER_CONSTANTS;
    
    timeText.split("").forEach((character, index) => {
      const pattern = DIGIT_FONT_3x5[character] || DIGIT_FONT_3x5["0"];
      const xOffset = index * DIGIT_WIDTH_WITH_SPACING + (index > 1 ? POSITION.SPACING : 0);
      
      FontRenderer.renderFontPattern(
        ctx,
        pattern,
        xOffset,
        0,
        POSITION.LABEL_OFFSET
      );
    });
  }

  private static renderColon(
    ctx: CanvasRenderingContext2D,
    remaining: number,
    isPaused: boolean
  ): void {
    if (shouldShowCursor(isPaused, remaining)) {
      const { COLON_OFFSET } = TIMER_CONSTANTS.POSITION;
      ctx.fillRect(COLON_OFFSET, 1, 1, 1);
      ctx.fillRect(COLON_OFFSET, 3, 1, 1);
    }
  }
}