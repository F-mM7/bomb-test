import { COLORS, GRADIENTS } from '../constants/colors';

export const pcbStyle = {
  background: COLORS.pcbGreen,
  borderRadius: "8px",
  padding: "clamp(10px, 2vw, 20px)",
  boxShadow: "0 4px 8px rgba(0,0,0,0.6), inset 0 -2px 4px rgba(0,0,0,0.4)",
  display: "inline-block",
  border: `2px solid ${COLORS.pcbGreenDark}`,
  position: "relative" as const,
  maxWidth: "100%",
  boxSizing: "border-box" as const,
};

export const screwStyle = {
  position: "absolute" as const,
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "radial-gradient(circle at 30% 30%, #e0e0e0, #808080)",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
};

export const displayMountStyle = {
  background: GRADIENTS.display,
  borderRadius: "4px",
  padding: "clamp(6px, 1vw, 8px)",
  boxShadow: "0 3px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
  marginBottom: "clamp(8px, 2vw, 12px)",
  border: "1px solid #0a0a0a",
};