/**
 * 共通のフォントパターン描画ユーティリティ
 */
export class FontRenderer {
  /**
   * フォントパターンを描画する
   * @param ctx - Canvas context
   * @param pattern - フォントパターン配列
   * @param startX - 開始X座標
   * @param startY - 開始Y座標
   * @param fontWidth - フォント幅（デフォルト: パターンの幅を自動検出）
   * @param spacing - 文字間隔（デフォルト: 0）
   */
  static renderFontPattern(
    ctx: CanvasRenderingContext2D,
    pattern: string[],
    startX: number,
    startY: number,
    fontWidth?: number,
    spacing = 0
  ): void {
    const width = fontWidth ?? (pattern[0]?.length || 0);
    
    pattern.forEach((row, y) => {
      for (let x = 0; x < width; x++) {
        if (row[x] === "1") {
          ctx.fillRect(startX + x + spacing, startY + y, 1, 1);
        }
      }
    });
  }

  /**
   * 複数の文字を連続して描画する
   * @param ctx - Canvas context
   * @param patterns - フォントパターン配列の配列
   * @param startX - 開始X座標
   * @param startY - 開始Y座標
   * @param charSpacing - 文字間の間隔
   * @param fontWidth - 各文字の幅
   */
  static renderMultipleCharacters(
    ctx: CanvasRenderingContext2D,
    patterns: string[][],
    startX: number,
    startY: number,
    charSpacing: number,
    fontWidth?: number
  ): void {
    patterns.forEach((pattern, index) => {
      const width = fontWidth ?? (pattern[0]?.length || 0);
      const xOffset = startX + index * (width + charSpacing);
      this.renderFontPattern(ctx, pattern, xOffset, startY, fontWidth);
    });
  }
}