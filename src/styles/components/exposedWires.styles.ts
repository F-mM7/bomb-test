import { LAYOUT } from "../../constants/layout";
import { GRADIENTS, SHADOWS } from '../constants/colors';

export const exposedWiresContainerStyle = {
  width: `calc(${LAYOUT.CONTAINER_WIDTH}px * var(--wires-scale, 1))`,
  background: GRADIENTS.exposedWires,
  borderRadius: `calc(${LAYOUT.CONTAINER_BORDER_RADIUS}px * var(--wires-scale, 1))`,
  padding: `calc(${LAYOUT.CONTAINER_PADDING}px * var(--wires-scale, 1))`,
  boxShadow: SHADOWS.exposedWires,
  border: "1px solid #000",
  position: "relative" as const,
  boxSizing: "border-box" as const,
};

export const topBorderStyle = {
  position: "absolute" as const,
  top: `calc(14px * var(--wires-scale, 1))`,
  left: `calc(14px * var(--wires-scale, 1))`,
  right: `calc(14px * var(--wires-scale, 1))`,
  height: `calc(3px * var(--wires-scale, 1))`,
  background: "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.08), rgba(255,255,255,0.15))",
  borderRadius: `calc(2px * var(--wires-scale, 1))`
};

export const leftBorderStyle = {
  position: "absolute" as const,
  top: `calc(14px * var(--wires-scale, 1))`,
  left: `calc(14px * var(--wires-scale, 1))`,
  width: `calc(3px * var(--wires-scale, 1))`,
  bottom: `calc(14px * var(--wires-scale, 1))`,
  background: "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
  borderRadius: `calc(2px * var(--wires-scale, 1))`
};

export const wireStyle = {
  stroke: "#fff",
  strokeWidth: "calc(8 * var(--wires-scale, 1))",
  fill: "none",
  strokeLinecap: "round" as const,
};

export const getWireStyleWithState = (disabled: boolean) => ({
  ...wireStyle,
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
});