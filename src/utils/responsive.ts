/**
 * 統一レスポンシブシステム
 * 全てのコンポーネントサイズを基準サイズ × グローバルスケールで管理
 */

// 基準サイズ定数
export const BASE_SIZES = {
  // キーボード・露出ワイヤー共通コンテナ（基盤上の部品用）
  CONTAINER_WIDTH: 640, // キーボードと露出ワイヤーの幅
  CONTAINER_PADDING: 12, // キーボードと露出ワイヤーの内部パディング
  CONTAINER_BORDER_RADIUS: 4, // 角丸半径

  // 爆弾全体の最外層コンテナ（ページレベル）
  GLOBAL_CONTAINER_PADDING: 10, // ページ全体のパディング

  // キーボードボタン
  BUTTON_SIZE: 50, // 各ボタンの幅・高さ
  BUTTON_GAP: 6, // ボタン間の隙間

  // キーボードレイアウト
  KEYBOARD_ROWS: 5, // キーボードの行数
  KEYBOARD_COLUMNS: 10, // キーボードの列数

  // ワイヤー配置計算用
  get KEYBOARD_TOTAL_HEIGHT() {
    // KanaGrid (5行) + gap + ActionKeys (1行)
    return (
      this.KEYBOARD_ROWS * this.BUTTON_SIZE +
      (this.KEYBOARD_ROWS - 1) * this.BUTTON_GAP +
      this.BUTTON_GAP +
      this.BUTTON_SIZE
    );
  },
  get KEYBOARD_INNER_WIDTH() {
    return this.CONTAINER_WIDTH - this.CONTAINER_PADDING * 2;
  },

  // ディスプレイ（基盤上のスクリーン）
  DISPLAY_WIDTH: 640, // ディスプレイキャンバスの幅
  DISPLAY_HEIGHT: 360, // ディスプレイキャンバスの高さ

  // 爆弾本体（全体を包む外枠）
  BOMB_BODY_WIDTH: 720, // 爆弾本体の幅
  BOMB_BODY_HEIGHT: 750, // 爆弾本体の高さ
  BOMB_BODY_PADDING: 16, // 爆弾本体の内部パディング

  // 爆弾本体の計算値
  get BOMB_BODY_TOTAL_WIDTH() {
    return this.BOMB_BODY_WIDTH + this.BOMB_BODY_PADDING * 2;
  },

  // フォント
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 16,
  FONT_SIZE_LARGE: 20,
  FONT_SIZE_XL: 24,

  // スペーシング
  SPACING_XS: 4,
  SPACING_SM: 8,
  SPACING_MD: 12,
  SPACING_LG: 16,
  SPACING_XL: 24,

  // 基盤（PCB）スタイル用
  PCB_BORDER_WIDTH: 2, // 基盤の境界線幅

  // ディスプレイマウント用
  DISPLAY_MOUNT_PADDING: 7, // ディスプレイマウントの内部パディング
  DISPLAY_MOUNT_MARGIN: 10, // ディスプレイマウントの下マージン
  DISPLAY_MOUNT_BORDER_WIDTH: 1, // ディスプレイマウントの境界線幅

  // キーボード装飾用
  KEYBOARD_BORDER_WIDTH: 1, // キーボードの境界線幅
  KEYBOARD_BUTTON_BORDER_RADIUS: 6, // キーボードボタンの角丸
  KEYBOARD_BUTTON_PADDING: 2, // アクションボタンのパディング

  // ワイヤー関連
  WIRE_STROKE_WIDTH: 8, // ワイヤーの線幅
  WIRE_BORDER_MARGIN: 14, // ワイヤー境界のマージン
  WIRE_BORDER_THICKNESS: 3, // ワイヤー境界の厚さ
  WIRE_BORDER_RADIUS: 2, // ワイヤー境界の角丸

  // 装飾ワイヤー座標系（720px基準）
  WIRE_LAYER_OFFSET: 100, // SVGレイヤーのオフセット
  WIRE_LAYER_OVERFLOW: 200, // SVGレイヤーのはみ出し分

  // 装飾ワイヤー基準座標（BOMB_BODY_WIDTH: 720基準）
  WIRE_DECO_LEFT_X: 140, // 左側ワイヤーのX座標
  WIRE_DECO_RIGHT_X: 780, // 右側ワイヤーのX座標
  WIRE_DECO_CENTER_X: 380, // 中央ワイヤーのX座標
  WIRE_DECO_CENTER2_X: 450, // 中央ワイヤー2のX座標
} as const;

// スケール設定
export const SCALE_CONFIG = {
  MIN_SCALE: 0.3,
  MAX_SCALE: 1.2,
  DEFAULT_SCALE: 1.0,
  SCALE_RATIO: 0.9, // 利用可能スペースの90%を使用
} as const;

// CSS変数名
export const CSS_VARS = {
  GLOBAL_SCALE: "--global-scale",
} as const;

/**
 * グローバルスケールを計算
 * @param containerWidth コンテナの幅
 * @param containerHeight コンテナの高さ
 * @param targetWidth 目標幅（デフォルト: BASE_SIZES.CONTAINER_WIDTH）
 * @param targetHeight 目標高さ（オプション）
 * @returns 計算されたスケール値
 */
export function calculateGlobalScale(
  containerWidth: number,
  containerHeight: number,
  targetWidth: number = BASE_SIZES.CONTAINER_WIDTH,
  targetHeight?: number
): number {
  const widthScale = (containerWidth * SCALE_CONFIG.SCALE_RATIO) / targetWidth;

  let scale = widthScale;

  if (targetHeight) {
    const heightScale =
      (containerHeight * SCALE_CONFIG.SCALE_RATIO) / targetHeight;
    scale = Math.min(widthScale, heightScale);
  }

  return Math.max(
    SCALE_CONFIG.MIN_SCALE,
    Math.min(SCALE_CONFIG.MAX_SCALE, scale)
  );
}

/**
 * 基準サイズにスケールを適用
 * @param baseSize 基準サイズ
 * @param scale スケール値（デフォルト: CSS変数から取得）
 * @returns スケール適用後のサイズ（px）
 */
export function scaleSize(baseSize: number, scale?: number): string {
  if (scale !== undefined) {
    return `${baseSize * scale}px`;
  }
  return `calc(${baseSize}px * var(${CSS_VARS.GLOBAL_SCALE}, ${SCALE_CONFIG.DEFAULT_SCALE}))`;
}

/**
 * 複数の基準サイズにスケールを適用
 * @param baseSizes 基準サイズの配列
 * @param scale スケール値（デフォルト: CSS変数から取得）
 * @returns スケール適用後のサイズ配列
 */
export function scaleSizes(baseSizes: number[], scale?: number): string[] {
  return baseSizes.map((size) => scaleSize(size, scale));
}

/**
 * CSS変数としてグローバルスケールを設定
 * @param element 対象要素（デフォルト: document.documentElement）
 * @param scale スケール値
 */
export function setGlobalScale(
  scale: number,
  element: HTMLElement = document.documentElement
): void {
  element.style.setProperty(CSS_VARS.GLOBAL_SCALE, scale.toString());
}

/**
 * CSS変数からグローバルスケールを取得
 * @param element 対象要素（デフォルト: document.documentElement）
 * @returns 現在のスケール値
 */
export function getGlobalScale(
  element: HTMLElement = document.documentElement
): number {
  const scaleValue = getComputedStyle(element).getPropertyValue(
    CSS_VARS.GLOBAL_SCALE
  );
  return parseFloat(scaleValue) || SCALE_CONFIG.DEFAULT_SCALE;
}

/**
 * レスポンシブブレークポイント
 */
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1200,
} as const;

/**
 * ブレークポイントに基づいてスケール調整値を取得
 * @param width 画面幅
 * @returns スケール調整値（ベーススケールに乗算）
 */
export function getBreakpointScaleModifier(width: number): number {
  if (width < BREAKPOINTS.MOBILE) return 0.8;
  if (width < BREAKPOINTS.TABLET) return 0.9;
  if (width < BREAKPOINTS.DESKTOP) return 1.0;
  return 1.1;
}

/**
 * 装飾ワイヤー用の座標をスケール適用して取得
 * @param x 基準X座標
 * @param y 基準Y座標
 * @returns スケール適用済み座標
 */
export function getWireCoordinates(
  x: number,
  y: number
): { x: number; y: number } {
  // CSS変数 --global-scale を使用してスケール適用
  // 実際の描画時にブラウザが計算するため、ここでは基準値をそのまま返す
  return { x, y };
}

/**
 * 装飾ワイヤー用SVGパス文字列を生成（スケール対応）
 * @param pathCommands パス命令の配列
 * @returns CSS calc()を使用したパス文字列
 */
export function createScaledWirePath(
  pathCommands: Array<{ cmd: string; coords: number[] }>
): string {
  return pathCommands
    .map(({ cmd, coords }) => {
      const scaledCoords = coords.map(
        (coord) => `calc(${coord}px * var(--global-scale, 1))`
      );
      return `${cmd} ${scaledCoords.join(" ")}`;
    })
    .join(" ");
}
