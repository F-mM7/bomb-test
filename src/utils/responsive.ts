/**
 * 統一レスポンシブシステム
 * 全てのコンポーネントサイズを基準サイズ × グローバルスケールで管理
 */

import { Z_INDEX_CSS_VARS } from "../constants/zIndex";

// 基準サイズ定数
export const BASE_SIZES = {
  // スペーシング
  DISPLAY_MOUNT_BORDER_RADIUS: 4, // ディスプレイマウント角丸専用
  PCB_PADDING: 12, // PCB（基盤）の内部パディング

  // ディスプレイ（DOM要素の視覚的サイズ）
  DISPLAY_DOM_WIDTH: 640, // ディスプレイDOM要素の幅
  DISPLAY_DOM_HEIGHT: 360, // ディスプレイDOM要素の高さ

  // ディスプレイマウント
  DISPLAY_MOUNT_PADDING: 7, // ディスプレイマウントの内部パディング
  DISPLAY_MOUNT_MARGIN: 10, // ディスプレイマウントの下マージン
  DISPLAY_MOUNT_BORDER_WIDTH: 1, // ディスプレイマウントの境界線幅

  get DISPLAY_TOTAL_HEIGHT() {
    return (
      this.DISPLAY_DOM_HEIGHT +
      this.DISPLAY_MOUNT_PADDING * 2 +
      this.DISPLAY_MOUNT_BORDER_WIDTH * 2 +
      this.DISPLAY_MOUNT_MARGIN
    );
  },

  // キーボードレイアウト
  KEYBOARD_ROWS: 5,
  KEYBOARD_COLS: 11,

  // キーボードボタン
  KEYBOARD_BUTTON_SIZE: 54,
  KEYBOARD_BUTTON_BORDER_WIDTH: 1,
  KEYBOARD_BUTTON_GAP: 4,
  KEYBOARD_BUTTON_BORDER_RADIUS: 3, // キーボードボタンの角丸
  KEYBOARD_BUTTON_FONTSIZE: 28,
  KEYBOARD_BUTTON_TEXT_INDENT: -4, // キーボードボタンの文字インデント
  get ACTION_BUTTON_WIDTH() {
    return this.KEYBOARD_BUTTON_SIZE * 2 + this.KEYBOARD_BUTTON_GAP;
  },

  get KEYBOARD_INNER_WIDTH() {
    return (
      this.KEYBOARD_COLS * this.KEYBOARD_BUTTON_SIZE +
      (this.KEYBOARD_COLS - 1) * this.KEYBOARD_BUTTON_GAP
    );
  },
  get KEYBOARD_INNER_HEIGHT() {
    //ActionKeyの分1行多い
    return (
      (this.KEYBOARD_ROWS + 1) * this.KEYBOARD_BUTTON_SIZE +
      this.KEYBOARD_ROWS * this.KEYBOARD_BUTTON_GAP
    );
  },

  KEYBOARD_PADDING: 6,
  KEYBOARD_BORDER_WIDTH: 1,
  KEYBOARD_BORDER_RADIUS: 4, // 角丸半径

  get KEYBOARD_OUTER_WIDTH() {
    return (
      this.KEYBOARD_INNER_WIDTH +
      (this.KEYBOARD_PADDING + this.KEYBOARD_BORDER_WIDTH) * 2
    );
  },
  get KEYBOARD_OUTER_HEIGHT() {
    return (
      this.KEYBOARD_INNER_HEIGHT +
      (this.KEYBOARD_PADDING + this.KEYBOARD_BORDER_WIDTH) * 2
    );
  },

  get BOMB_BODY_WIDTH() {
    return this.PCB_WIDTH + (this.PCB_PADDING + this.PCB_BORDER_WIDTH) * 2;
  },
  get BOMB_BODY_HEIGHT() {
    return (
      this.PCB_TOTAL_HEIGHT + (this.PCB_PADDING + this.PCB_BORDER_WIDTH) * 2
    );
  },

  // 基盤（PCB）スタイル用

  get PCB_HEIGHT() {
    return this.DISPLAY_TOTAL_HEIGHT + this.KEYBOARD_OUTER_HEIGHT;
  },

  get PCB_WIDTH() {
    return (
      this.KEYBOARD_OUTER_WIDTH + (this.PCB_PADDING + this.PCB_BORDER_WIDTH) * 2
    );
  },
  get PCB_TOTAL_HEIGHT() {
    return this.PCB_HEIGHT + (this.PCB_PADDING + this.PCB_BORDER_WIDTH) * 2;
  },
  PCB_BORDER_WIDTH: 2, // 基盤の境界線幅
  COMMON_BORDER_RADIUS: 4, // 汎用的な角丸（PCB、ボタンなど）
  SCREW_SIZE: 8,

  // ワイヤー関連
  WIRE_STROKE_WIDTH: 8, // ワイヤーの線幅
  WIRE_BORDER_MARGIN: 14, // ワイヤー境界のマージン
  WIRE_BORDER_THICKNESS: 3, // ワイヤー境界の厚さ
  WIRE_BORDER_RADIUS: 2, // ワイヤー境界の角丸

  WIRE_LAYER_OFFSET: 100, // SVGレイヤーのオフセット
  WIRE_LAYER_OVERFLOW: 200, // SVGレイヤーのはみ出し分

  get WIRE_SPACING() {
    return this.KEYBOARD_INNER_WIDTH / 3;
  },
} as const;

// スケール設定
export const SCALE_CONFIG = {
  MIN_SCALE: 0.3,
  MAX_SCALE: 1.0,
  DEFAULT_SCALE: 1.0,
  SCALE_RATIO: 0.97,
} as const;

// CSS変数名
export const CSS_VARS = {
  GLOBAL_SCALE: "--global-scale",
} as const;

/**
 * グローバルスケールを計算
 * @param containerWidth コンテナの幅
 * @param containerHeight コンテナの高さ
 * @returns 計算されたスケール値
 */
export function calculateGlobalScale(
  containerWidth: number,
  containerHeight: number
): number {
  const targetWidth = BASE_SIZES.BOMB_BODY_WIDTH;
  const targetHeight = BASE_SIZES.BOMB_BODY_HEIGHT;

  const widthScale = (containerWidth * SCALE_CONFIG.SCALE_RATIO) / targetWidth;
  const heightScale =
    (containerHeight * SCALE_CONFIG.SCALE_RATIO) / targetHeight;

  const scale = Math.min(widthScale, heightScale);

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
 * z-index CSS変数を注入
 * @param element 対象要素（デフォルト: document.documentElement）
 */
export function setZIndexVariables(
  element: HTMLElement = document.documentElement
): void {
  Object.entries(Z_INDEX_CSS_VARS).forEach(([cssVar, value]) => {
    element.style.setProperty(cssVar, value);
  });
}
