/**
 * 統一レスポンシブシステム
 * 全てのコンポーネントサイズを基準サイズ × グローバルスケールで管理
 */

// 基準サイズ定数
export const BASE_SIZES = {
  // コンテナ
  CONTAINER_WIDTH: 640,
  CONTAINER_PADDING: 12,
  CONTAINER_BORDER_RADIUS: 4,
  
  // ボタン
  BUTTON_SIZE: 50,
  BUTTON_GAP: 6,
  
  // キーボード
  KEYBOARD_ROWS: 5,
  KEYBOARD_COLUMNS: 10,
  
  // ディスプレイ
  DISPLAY_WIDTH: 96,
  DISPLAY_HEIGHT: 54,
  
  // ワイヤー
  EXPOSED_WIRES_WIDTH: 396,
  
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
} as const;

// スケール設定
export const SCALE_CONFIG = {
  MIN_SCALE: 0.5,
  MAX_SCALE: 1.2,
  DEFAULT_SCALE: 1.0,
  SCALE_RATIO: 0.9, // 利用可能スペースの90%を使用
} as const;

// CSS変数名
export const CSS_VARS = {
  GLOBAL_SCALE: '--global-scale',
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
    const heightScale = (containerHeight * SCALE_CONFIG.SCALE_RATIO) / targetHeight;
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
  return baseSizes.map(size => scaleSize(size, scale));
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
  const scaleValue = getComputedStyle(element).getPropertyValue(CSS_VARS.GLOBAL_SCALE);
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