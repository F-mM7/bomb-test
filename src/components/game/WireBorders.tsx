import React from "react";
import {
  topBorderStyle,
  leftBorderStyle,
} from "../../styles/components/exposedWires.styles";
import { GRADIENTS } from "../../styles/constants/colors";
import { scaleSize } from "../../utils/responsive";

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

export const WireBorders: React.FC = () => {
  return (
    <>
      <div style={topBorderStyle} />
      <div style={leftBorderStyle} />
      <div style={BORDER_STYLES.bottom} />
      <div style={BORDER_STYLES.rightVertical} />
    </>
  );
};