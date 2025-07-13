import { COLORS, GRADIENTS } from '../constants/colors';
import { scaleSize, BASE_SIZES } from '../../utils/responsive';

export const pcbStyle = {
  background: COLORS.pcbGreen,
  borderRadius: scaleSize(BASE_SIZES.SPACING_SM),
  padding: scaleSize(BASE_SIZES.SPACING_MD),
  boxShadow: "0 4px 8px rgba(0,0,0,0.6), inset 0 -2px 4px rgba(0,0,0,0.4)",
  display: "inline-block",
  border: `${scaleSize(BASE_SIZES.PCB_BORDER_WIDTH)} solid ${COLORS.pcbGreenDark}`,
  position: "relative" as const,
  boxSizing: "border-box" as const,
};

export const screwStyle = {
  position: "absolute" as const,
  width: scaleSize(BASE_SIZES.SPACING_SM),
  height: scaleSize(BASE_SIZES.SPACING_SM),
  borderRadius: "50%",
  background: "radial-gradient(circle at 30% 30%, #e0e0e0, #808080)",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
};

export const displayMountStyle = {
  background: GRADIENTS.display,
  borderRadius: scaleSize(BASE_SIZES.SPACING_XS),
  padding: scaleSize(BASE_SIZES.DISPLAY_MOUNT_PADDING),
  boxShadow: "0 3px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
  marginBottom: scaleSize(BASE_SIZES.DISPLAY_MOUNT_MARGIN),
  border: `${scaleSize(BASE_SIZES.DISPLAY_MOUNT_BORDER_WIDTH)} solid #0a0a0a`,
};