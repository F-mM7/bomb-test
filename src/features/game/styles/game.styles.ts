import { COLORS, SHADOWS } from "../../../constants/colors";
import { scaleSize, BASE_SIZES } from "../../../utils/responsive";
import { commonPatterns } from "../../../styles/common";

// Layout styles
export const containerStyle = {
  ...commonPatterns.flexCenterColumn,
  width: "100vw",
  height: "100vh",
};

export const bombBodyStyle = {
  borderRadius: scaleSize(BASE_SIZES.PCB_PADDING),
  padding: scaleSize(BASE_SIZES.PCB_PADDING),
  background: "linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 50%, #4a4a4a 100%)",
  boxShadow:
    "0 8px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)",
  position: "relative" as const,
};

// Device styles
export const pcbStyle = {
  background: COLORS.pcbGreen,
  borderRadius: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
  padding: scaleSize(BASE_SIZES.PCB_PADDING),
  boxShadow: SHADOWS.pcb,
  border: `${scaleSize(BASE_SIZES.PCB_BORDER_WIDTH)} solid ${COLORS.pcbGreen}`,
  position: "relative" as const,
  height: scaleSize(BASE_SIZES.PCB_HEIGHT),
};

export const screwStyle = {
  position: "absolute" as const,
  width: scaleSize(BASE_SIZES.SCREW_SIZE),
  height: scaleSize(BASE_SIZES.SCREW_SIZE),
  borderRadius: "50%",
  background: "radial-gradient(circle at 30% 30%, #e0e0e0, #808080)",
  boxShadow: SHADOWS.screw,
};
