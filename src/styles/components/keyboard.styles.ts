import { LAYOUT } from "../../constants/layout";
import { GRADIENTS, SHADOWS } from '../constants/colors';

export const keyboardStyle = {
  width: `calc(${LAYOUT.CONTAINER_WIDTH}px * var(--keyboard-scale, 1))`,
  background: GRADIENTS.keyboard,
  borderRadius: `calc(${LAYOUT.CONTAINER_BORDER_RADIUS}px * var(--keyboard-scale, 1))`,
  padding: `calc(${LAYOUT.CONTAINER_PADDING}px * var(--keyboard-scale, 1))`,
  boxShadow: SHADOWS.keyboard,
  border: "1px solid #0a0a0a",
  position: "relative" as const,
  boxSizing: "border-box" as const,
};

export const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: `calc(${LAYOUT.BUTTON_GAP}px * var(--keyboard-scale, 1))`,
  justifyContent: "center" as const,
};

export const columnStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: `calc(${LAYOUT.BUTTON_GAP}px * var(--keyboard-scale, 1))`,
};

export const baseButtonStyle = {
  width: `calc(${LAYOUT.BUTTON_SIZE}px * var(--keyboard-scale, 1))`,
  height: `calc(${LAYOUT.BUTTON_SIZE}px * var(--keyboard-scale, 1))`,
  background: GRADIENTS.keyButton,
  border: "1px solid #666",
  borderRadius: `calc(6px * var(--keyboard-scale, 1))`,
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
  fontSize: `calc(18px * var(--keyboard-scale, 1))`,
  overflow: "hidden" as const,
  textOverflow: "ellipsis" as const,
  whiteSpace: "nowrap" as const,
};

export const actionRowStyle = {
  display: "flex",
  gap: `calc(${LAYOUT.BUTTON_GAP}px * var(--keyboard-scale, 1))`,
  justifyContent: "flex-end" as const,
  width: `calc((${LAYOUT.BUTTON_SIZE}px * 11 + ${LAYOUT.BUTTON_GAP}px * 10) * var(--keyboard-scale, 1))`,
};

export const actionButtonStyle = {
  ...baseButtonStyle,
  width: `calc(${LAYOUT.BUTTON_SIZE * 2 + LAYOUT.BUTTON_GAP}px * var(--keyboard-scale, 1))`,
  fontSize: `calc(16px * var(--keyboard-scale, 1))`,
  padding: `calc(2px * var(--keyboard-scale, 1))`,
};

export const gridStyle = (groupCount: number) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${groupCount}, calc(${LAYOUT.BUTTON_SIZE}px * var(--keyboard-scale, 1)))`,
  gridTemplateRows: `repeat(${LAYOUT.KEYBOARD_ROWS}, calc(${LAYOUT.BUTTON_SIZE}px * var(--keyboard-scale, 1)))`,
  gridGap: `calc(${LAYOUT.BUTTON_GAP}px * var(--keyboard-scale, 1))`,
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

