import type { FC } from "react";
import {
  topBorderStyle,
  leftBorderStyle,
} from "../styles";
import { GRADIENTS } from "../../../constants/colors";
import { scaleSize } from "../../../utils/responsive";

const BORDER_STYLES = {
  bottom: {
    position: "absolute" as const,
    bottom: scaleSize(14),
    left: scaleSize(17),
    right: scaleSize(14),
    height: scaleSize(1),
    background: GRADIENTS.borderHorizontal,
  },
  rightVertical: {
    position: "absolute" as const,
    top: scaleSize(17),
    right: scaleSize(14),
    width: scaleSize(1),
    bottom: scaleSize(14),
    background: GRADIENTS.borderVertical,
  }
};

const WireBorders: FC = () => {
  return (
    <>
      <div style={topBorderStyle} />
      <div style={leftBorderStyle} />
      <div style={BORDER_STYLES.bottom} />
      <div style={BORDER_STYLES.rightVertical} />
    </>
  );
};

export default WireBorders;