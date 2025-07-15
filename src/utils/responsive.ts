/**
 * 統一レスポンシブシステム
 * 全てのコンポーネントサイズを基準サイズ × グローバルスケールで管理
 */

import { Z_INDEX_CSS_VARS } from "../constants/zIndex";

// 基準サイズ定数
export const BASE_SIZES = {
  // スペーシング
  SPACING_XS: 4,
  SPACING_MD: 12,
  SPACING_LG: 16,

  // ディスプレイ
  DISPLAY_WIDTH: 640, // ディスプレイキャンバスの幅
  DISPLAY_HEIGHT: 360, // ディスプレイキャンバスの高さ

  // ディスプレイマウント
  DISPLAY_MOUNT_PADDING: 7, // ディスプレイマウントの内部パディング
  DISPLAY_MOUNT_MARGIN: 10, // ディスプレイマウントの下マージン
  DISPLAY_MOUNT_BORDER_WIDTH: 1, // ディスプレイマウントの境界線幅

  // キーボードレイアウト
  KEYBOARD_ROWS: 5, // キーボードの行数
  KEYBOARD_COLUMNS: 11, // キーボードの列数

  // キーボードボタン
  BUTTON_SIZE: 53,
  BUTTON_GAP: 6,
  BUTTON_FONTSIZE: 32,

  get ACTION_BUTTON_WIDTH() {
    return this.BUTTON_SIZE * 2 + this.BUTTON_GAP;
  },

  get KEYBOARD_INNER_WIDTH() {
    return (
      this.KEYBOARD_COLUMNS * this.BUTTON_SIZE +
      (this.KEYBOARD_COLUMNS - 1) * this.BUTTON_GAP
    );
  },
  get KEYBOARD_INNER_HEIGHT() {
    //ActionKeyの分1行多い
    return (
      (this.KEYBOARD_ROWS + 1) * this.BUTTON_SIZE +
      this.KEYBOARD_ROWS * this.BUTTON_GAP
    );
  },

  // キーボード・露出ワイヤー共通コンテナ（基盤上の部品用）
  CONTAINER_PADDING: 6, // キーボードと露出ワイヤーの内部パディング
  CONTAINER_BORDER_RADIUS: 4, // 角丸半径

  get KEYBOARD_OUTER_WIDTH() {
    return this.KEYBOARD_INNER_WIDTH + this.CONTAINER_PADDING * 2;
  },

  // ディスプレイ全体の高さ（マウント部分込み）
  get DISPLAY_TOTAL_HEIGHT() {
    return this.DISPLAY_HEIGHT + this.CONTAINER_PADDING * 2;
  },

  // デバイス全体の高さ（キーボード + ディスプレイ + パディング）
  get DEVICE_TOTAL_HEIGHT() {
    return (
      this.KEYBOARD_INNER_HEIGHT +
      this.DISPLAY_TOTAL_HEIGHT +
      this.CONTAINER_PADDING * 3
    );
  },

  // 爆弾本体（全体を包む外枠）
  BOMB_BODY_WIDTH: 714, // 爆弾本体の幅
  BOMB_BODY_HEIGHT: 814, // 爆弾本体の高さ
  BOMB_BODY_PADDING: 16, // 爆弾本体の内部パディング

  // 爆弾本体の計算値
  get BOMB_BODY_TOTAL_WIDTH() {
    return this.BOMB_BODY_WIDTH + this.BOMB_BODY_PADDING * 2;
  },

  // 基盤（PCB）スタイル用
  PCB_HEIGHT: 780, // 基盤の高さ
  PCB_BORDER_WIDTH: 2, // 基盤の境界線幅
  PCB_BORDER_RADIUS: 8,

  SCREW_SISZE: 8,

  // キーボード装飾用
  KEYBOARD_BORDER_WIDTH: 1, // キーボードの境界線幅
  KEYBOARD_BUTTON_BORDER_RADIUS: 6, // キーボードボタンの角丸
  KEYBOARD_BUTTON_PADDING: 2, // アクションボタンのパディング

  // ワイヤー関連
  WIRE_STROKE_WIDTH: 8, // ワイヤーの線幅
  WIRE_BORDER_MARGIN: 14, // ワイヤー境界のマージン
  WIRE_BORDER_THICKNESS: 3, // ワイヤー境界の厚さ
  WIRE_BORDER_RADIUS: 2, // ワイヤー境界の角丸

  WIRE_LAYER_OFFSET: 100, // SVGレイヤーのオフセット
  WIRE_LAYER_OVERFLOW: 200, // SVGレイヤーのはみ出し分

  // 計算済み定数（よく使われる計算式を事前定義）
  get KEYBOARD_WITH_PADDING_HEIGHT() {
    return this.KEYBOARD_INNER_HEIGHT + this.CONTAINER_PADDING * 2;
  },
  get KEYBOARD_WITH_PADDING_HEIGHT_NEGATIVE() {
    return -(this.KEYBOARD_INNER_HEIGHT + this.CONTAINER_PADDING * 2);
  },
  get WIRE_SPACING() {
    return this.KEYBOARD_INNER_WIDTH / 3;
  },
} as const;

// スケール設定
export const SCALE_CONFIG = {
  MIN_SCALE: 0.3,
  MAX_SCALE: 1.2,
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
