import { KATAKANA_FONT_5x5 } from "../../../fonts";

export class StatusRenderer {
  static render(
    ctx: CanvasRenderingContext2D,
    isCleared: boolean,
    isFailed: boolean
  ): void {
    if (isCleared || isFailed) {
      const statusText = isCleared ? "カイジョセイコウ" : "カイジョシッパイ";
      const startX = 0;
      const startY = 6;
      ctx.fillStyle = "#ff0000";
      
      statusText.split("").forEach((char, idx) => {
        const pattern = KATAKANA_FONT_5x5[char] || KATAKANA_FONT_5x5["　"];
        if (pattern) {
          pattern.forEach((row, y) => {
            for (let x = 0; x < 5; x++) {
              if (row[x] === "1") {
                ctx.fillRect(startX + idx * 6 + x, startY + y, 1, 1);
              }
            }
          });
        }
      });
    }
  }
}