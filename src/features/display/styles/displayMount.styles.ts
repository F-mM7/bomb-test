import { GRADIENTS, SHADOWS } from "../../../constants/colors";
import { scaleSize, BASE_SIZES } from "../../../utils/responsive";

export const displayMountStyle = {
  background: GRADIENTS.display,
  borderRadius: scaleSize(BASE_SIZES.DISPLAY_MOUNT_BORDER_RADIUS),
  padding: scaleSize(BASE_SIZES.DISPLAY_MOUNT_PADDING),
  boxShadow: SHADOWS.displayMount,
  marginBottom: scaleSize(BASE_SIZES.DISPLAY_MOUNT_MARGIN),
  border: `${scaleSize(BASE_SIZES.DISPLAY_MOUNT_BORDER_WIDTH)} solid #0a0a0a`,
};