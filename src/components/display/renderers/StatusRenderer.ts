import { KATAKANA_FONT_5x5 } from "../../../fonts";
import { FontRenderer } from "../../../utils/fontRenderer";
import { DISPLAY_CONSTANTS } from "../../../constants/display";

export class StatusRenderer {
  static render(
    ctx: CanvasRenderingContext2D,
    isCleared: boolean,
    isFailed: boolean
  ): void {
    if (isCleared || isFailed) {
      const statusText = isCleared ? "カイジョセイコウ" : "カイジョシッパイ";
      const { START_X, START_Y } = DISPLAY_CONSTANTS.QUESTION;
      ctx.fillStyle = "#ff0000";
      
      const patterns = statusText.split("").map(char => 
        KATAKANA_FONT_5x5[char] || KATAKANA_FONT_5x5["　"]
      ).filter(Boolean);
      
      FontRenderer.renderMultipleCharacters(
        ctx,
        patterns,
        START_X,
        START_Y,
        1, // 文字間隔
        5  // フォント幅
      );
    }
  }
}