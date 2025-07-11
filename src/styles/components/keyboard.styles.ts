import { LAYOUT } from "../../constants/layout";
import { GRADIENTS, SHADOWS } from '../constants/colors';

export const keyboardStyle = {
  width: `${LAYOUT.CONTAINER_WIDTH}px`,
  background: GRADIENTS.keyboard,
  borderRadius: `${LAYOUT.CONTAINER_BORDER_RADIUS}px`,
  padding: `${LAYOUT.CONTAINER_PADDING}px`,
  boxShadow: SHADOWS.keyboard,
  border: "1px solid #0a0a0a",
  position: "relative" as const,
};

export const buttonContainerStyle = {
  display: "flex",
  gap: `${LAYOUT.BUTTON_GAP}px`,
  justifyContent: "center" as const,
};

export const columnStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: `${LAYOUT.BUTTON_GAP}px`,
};

export const baseButtonStyle = {
  width: LAYOUT.BUTTON_SIZE,
  height: LAYOUT.BUTTON_SIZE,
  background: GRADIENTS.keyButton,
  border: "1px solid #666",
  borderRadius: 6,
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
};

export const gridStyle = (groupCount: number) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${groupCount}, ${LAYOUT.BUTTON_SIZE}px)`,
  gridTemplateRows: `repeat(${LAYOUT.KEYBOARD_ROWS}, ${LAYOUT.BUTTON_SIZE}px)`,
  gridGap: `${LAYOUT.BUTTON_GAP}px`,
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

