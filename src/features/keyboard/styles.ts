import { GRADIENTS, SHADOWS } from "../../constants/colors";
import { scaleSize, BASE_SIZES } from "../../utils/responsive";

export const keyboardStyle = {
  width: scaleSize(BASE_SIZES.KEYBOARD_OUTER_WIDTH),
  background: GRADIENTS.keyboard,
  borderRadius: scaleSize(BASE_SIZES.CONTAINER_BORDER_RADIUS),
  padding: scaleSize(BASE_SIZES.CONTAINER_PADDING),
  boxShadow: SHADOWS.keyboard,
  border: `${scaleSize(BASE_SIZES.KEYBOARD_BORDER_WIDTH)} solid #0a0a0a`,
  position: "relative" as const,
  boxSizing: "border-box" as const,
};

export const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: scaleSize(BASE_SIZES.BUTTON_GAP),
  justifyContent: "center" as const,
};

export const columnStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: scaleSize(BASE_SIZES.BUTTON_GAP),
};

export const baseButtonStyle = {
  width: scaleSize(BASE_SIZES.BUTTON_SIZE),
  height: scaleSize(BASE_SIZES.BUTTON_SIZE),
  background: GRADIENTS.keyButton,
  border: `${scaleSize(BASE_SIZES.KEYBOARD_BORDER_WIDTH)} solid #666`,
  borderRadius: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_BORDER_RADIUS),
  cursor: "pointer" as const,
  fontWeight: "bold" as const,
  color: "#333",
  boxShadow: SHADOWS.keyButton,
  textShadow: "0 1px 0 rgba(255,255,255,0.8)",
  transition: "all 0.1s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  fontSize: scaleSize(BASE_SIZES.BUTTON_FONTSIZE),
};

export const actionRowStyle = {
  display: "flex",
  gap: scaleSize(BASE_SIZES.BUTTON_GAP),
  justifyContent: "flex-end" as const,
  width: scaleSize(BASE_SIZES.KEYBOARD_INNER_WIDTH),
};

export const actionButtonStyle = {
  ...baseButtonStyle,
  width: scaleSize(BASE_SIZES.ACTION_BUTTON_WIDTH),
  fontSize: scaleSize(BASE_SIZES.BUTTON_FONTSIZE),
  padding: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_PADDING),
};

export const gridStyle = (groupCount: number) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${groupCount}, ${scaleSize(
    BASE_SIZES.BUTTON_SIZE
  )})`,
  gridTemplateRows: `repeat(${BASE_SIZES.KEYBOARD_ROWS}, ${scaleSize(
    BASE_SIZES.BUTTON_SIZE
  )})`,
  gridGap: scaleSize(BASE_SIZES.BUTTON_GAP),
});

export const BUTTON_STATES = {
  pressed: {
    transform: "translateY(2px)",
    boxShadow: "0 0 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",
  },
  released: {
    transform: "translateY(0px)",
    boxShadow: SHADOWS.keyButton,
  },
  disabled: {
    background: "linear-gradient(to bottom, #ccc 0%, #bbb 50%, #aaa 100%)",
    color: "#888",
    cursor: "not-allowed" as const,
    opacity: 0.6,
  },
};
