import { GRADIENTS, SHADOWS } from '../constants/colors';
import { scaleSize, BASE_SIZES } from '../../utils/responsive';

export const exposedWiresContainerStyle = {
  width: scaleSize(BASE_SIZES.EXPOSED_WIRES_WIDTH),
  background: GRADIENTS.exposedWires,
  borderRadius: scaleSize(BASE_SIZES.CONTAINER_BORDER_RADIUS),
  padding: scaleSize(BASE_SIZES.CONTAINER_PADDING),
  boxShadow: SHADOWS.exposedWires,
  border: `${scaleSize(1)} solid #000`,
  position: "relative" as const,
  boxSizing: "border-box" as const,
};

export const topBorderStyle = {
  position: "absolute" as const,
  top: scaleSize(14),
  left: scaleSize(14),
  right: scaleSize(14),
  height: scaleSize(3),
  background: "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.08), rgba(255,255,255,0.15))",
  borderRadius: scaleSize(2)
};

export const leftBorderStyle = {
  position: "absolute" as const,
  top: scaleSize(14),
  left: scaleSize(14),
  width: scaleSize(3),
  bottom: scaleSize(14),
  background: "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
  borderRadius: scaleSize(2)
};

export const wireStyle = {
  stroke: "#fff",
  strokeWidth: scaleSize(8),
  fill: "none",
  strokeLinecap: "round" as const,
};

export const getWireStyleWithState = (disabled: boolean) => ({
  ...wireStyle,
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
});