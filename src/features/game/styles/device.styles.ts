import { COLORS, GRADIENTS, SHADOWS } from "../../../constants/colors";
import { scaleSize, BASE_SIZES } from "../../../utils/responsive";

export const pcbStyle = {
  background: COLORS.pcbGreen,
  borderRadius: scaleSize(BASE_SIZES.SPACING_SM),
  padding: scaleSize(BASE_SIZES.SPACING_MD),
  boxShadow: SHADOWS.pcb,
  display: "inline-block",
  border: `${scaleSize(BASE_SIZES.PCB_BORDER_WIDTH)} solid ${
    COLORS.pcbGreen
  }`,
  position: "relative" as const,
  boxSizing: "border-box" as const,
  height: scaleSize(790),
};

export const screwStyle = {
  position: "absolute" as const,
  width: scaleSize(BASE_SIZES.SPACING_SM),
  height: scaleSize(BASE_SIZES.SPACING_SM),
  borderRadius: "50%",
  background: "radial-gradient(circle at 30% 30%, #e0e0e0, #808080)",
  boxShadow: SHADOWS.screw,
};

export const displayMountStyle = {
  background: GRADIENTS.display,
  borderRadius: scaleSize(BASE_SIZES.SPACING_XS),
  padding: scaleSize(BASE_SIZES.DISPLAY_MOUNT_PADDING),
  boxShadow: SHADOWS.displayMount,
  marginBottom: scaleSize(BASE_SIZES.DISPLAY_MOUNT_MARGIN),
  border: `${scaleSize(BASE_SIZES.DISPLAY_MOUNT_BORDER_WIDTH)} solid #0a0a0a`,
};
