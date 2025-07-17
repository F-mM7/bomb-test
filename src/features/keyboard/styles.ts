import { GRADIENTS, SHADOWS } from "../../constants/colors";
import { scaleSize, BASE_SIZES } from "../../utils/responsive";
import { commonPatterns } from "../../styles/common";

export const keyboardStyle = {
  ...commonPatterns.baseContainer,
  background: GRADIENTS.keyboard,
  boxShadow: SHADOWS.keyboard,
  border: `${scaleSize(BASE_SIZES.KEYBOARD_BORDER_WIDTH)} solid #0a0a0a`,
  display: "flex",
  flexDirection: "column" as const,
  gap: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_GAP),
};

export const baseButtonStyle = {
  width: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_SIZE),
  height: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_SIZE),
  background: GRADIENTS.keyButton,
  border: `${scaleSize(BASE_SIZES.KEYBOARD_BUTTON_BORDER_WIDTH)} solid #706860`,
  borderRadius: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_BORDER_RADIUS),
  cursor: "pointer" as const,
  fontWeight: "bold" as const,
  fontStyle: "italic" as const,
  color: "#2a2a2a",
  boxShadow: SHADOWS.keyButton,
  transition: "all 0.1s ease",
  // タッチデバイス用の設定
  userSelect: "none" as const,
  touchAction: "manipulation" as const,
  WebkitTapHighlightColor: "transparent",
  WebkitTouchCallout: "none" as const,
  WebkitUserSelect: "none" as const,
  MozUserSelect: "none" as const,
  msUserSelect: "none" as const,
  fontSize: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_FONTSIZE),
  // フォーカスリングを無効化
  outline: "none",
};
export const actionButtonStyle = {
  ...baseButtonStyle,
  width: scaleSize(BASE_SIZES.ACTION_BUTTON_WIDTH),
};

export const gridStyle = (groupCount: number) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${groupCount}, ${scaleSize(
    BASE_SIZES.KEYBOARD_BUTTON_SIZE
  )})`,
  gridTemplateRows: `repeat(${BASE_SIZES.KEYBOARD_ROWS}, ${scaleSize(
    BASE_SIZES.KEYBOARD_BUTTON_SIZE
  )})`,
  gridGap: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_GAP),
});
export const actionRowStyle = {
  display: "grid",
  gridTemplateColumns: `repeat(${BASE_SIZES.KEYBOARD_COLS}, ${scaleSize(
    BASE_SIZES.KEYBOARD_BUTTON_SIZE
  )})`,
  gridGap: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_GAP),
};

export const BUTTON_STATES = {
  pressed: {
    transform: "translateY(3px)",
    boxShadow:
      "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(96,96,80,0.8)",
  },
  released: {
    transform: "translateY(0px)",
    boxShadow: SHADOWS.keyButton,
  },
  disabled: {
    background:
      "linear-gradient(to bottom, #808070 0%, #707060 50%, #606050 100%)",
    color: "#3a3a3a",
    cursor: "not-allowed" as const,
    opacity: 0.6,
  },
};
