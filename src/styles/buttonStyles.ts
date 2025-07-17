import { scaleSize, BASE_SIZES } from "../utils/responsive";
import type { CSSProperties } from "react";

/**
 * 基本的なボタンスタイルのベース
 */
export const createBaseButtonStyle = (
  variant: 'primary' | 'secondary' = 'primary'
): CSSProperties => ({
  padding: `${scaleSize(BASE_SIZES.SPACING_MD)}px`,
  borderRadius: `${scaleSize(BASE_SIZES.PCB_BORDER_RADIUS)}px`,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "all 0.2s ease",
  outline: "none",
  WebkitTapHighlightColor: "transparent",
  touchAction: "manipulation",
  userSelect: "none",
  ...(variant === 'primary' && {
    backgroundColor: "#4CAF50",
    color: "white",
  }),
  ...(variant === 'secondary' && {
    backgroundColor: "#f0f0f0",
    color: "#333",
  }),
});

/**
 * アクティブ状態のボタンスタイル
 */
export const getActiveButtonStyle = (
  baseStyle: CSSProperties,
  isPressed: boolean = false
): CSSProperties => ({
  ...baseStyle,
  transform: isPressed ? "scale(0.95)" : "scale(1)",
  filter: isPressed ? "brightness(0.9)" : "brightness(1)",
});