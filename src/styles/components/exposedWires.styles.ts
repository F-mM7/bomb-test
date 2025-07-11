import { LAYOUT } from "../../constants/layout";
import { GRADIENTS, SHADOWS } from '../constants/colors';

export const exposedWiresContainerStyle = {
  width: `${LAYOUT.CONTAINER_WIDTH}px`,
  background: GRADIENTS.exposedWires,
  borderRadius: `${LAYOUT.CONTAINER_BORDER_RADIUS}px`,
  padding: `${LAYOUT.CONTAINER_PADDING}px`,
  boxShadow: SHADOWS.exposedWires,
  border: "1px solid #000",
  position: "relative" as const
};

export const topBorderStyle = {
  position: "absolute" as const,
  top: "14px",
  left: "14px",
  right: "14px",
  height: "3px",
  background: "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.08), rgba(255,255,255,0.15))",
  borderRadius: "2px"
};

export const leftBorderStyle = {
  position: "absolute" as const,
  top: "14px",
  left: "14px",
  width: "3px",
  bottom: "14px",
  background: "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
  borderRadius: "2px"
};

export const wireStyle = {
  stroke: "#fff",
  strokeWidth: "8",
  fill: "none",
  strokeLinecap: "round" as const,
};

export const getWireStyleWithState = (disabled: boolean) => ({
  ...wireStyle,
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
});