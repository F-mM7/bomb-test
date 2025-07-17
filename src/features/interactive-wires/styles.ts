import { GRADIENTS, SHADOWS } from "../../constants/colors";
import { scaleSize, BASE_SIZES } from "../../utils/responsive";
import { commonPatterns } from "../../styles/common";

export const exposedWiresContainerStyle = {
  ...commonPatterns.baseContainer,
  width: scaleSize(BASE_SIZES.KEYBOARD_INNER_WIDTH),
  height: scaleSize(BASE_SIZES.KEYBOARD_INNER_HEIGHT),
  background: GRADIENTS.exposedWires,
  boxShadow: SHADOWS.exposedWires,
  border: `${scaleSize(BASE_SIZES.KEYBOARD_BORDER_WIDTH)} solid #000`,
};

export const topBorderStyle = {
  position: "absolute" as const,
  top: scaleSize(BASE_SIZES.WIRE_BORDER_MARGIN),
  left: scaleSize(BASE_SIZES.WIRE_BORDER_MARGIN),
  right: scaleSize(BASE_SIZES.WIRE_BORDER_MARGIN),
  height: scaleSize(BASE_SIZES.WIRE_BORDER_THICKNESS),
  background:
    "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.08), rgba(255,255,255,0.15))",
  borderRadius: scaleSize(BASE_SIZES.WIRE_BORDER_RADIUS),
};

export const leftBorderStyle = {
  position: "absolute" as const,
  top: scaleSize(BASE_SIZES.WIRE_BORDER_MARGIN),
  left: scaleSize(BASE_SIZES.WIRE_BORDER_MARGIN),
  width: scaleSize(BASE_SIZES.WIRE_BORDER_THICKNESS),
  bottom: scaleSize(BASE_SIZES.WIRE_BORDER_MARGIN),
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
  borderRadius: scaleSize(BASE_SIZES.WIRE_BORDER_RADIUS),
};

export const wireStyle = {
  stroke: "#fff",
  strokeWidth: scaleSize(BASE_SIZES.WIRE_STROKE_WIDTH),
  fill: "none",
  strokeLinecap: "round" as const,
};

export const getWireStyleWithState = (disabled: boolean) => ({
  ...wireStyle,
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
});
