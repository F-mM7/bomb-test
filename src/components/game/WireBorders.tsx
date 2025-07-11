import React from "react";
import {
  topBorderStyle,
  leftBorderStyle,
} from "../../styles/components/exposedWires.styles";

const BORDER_STYLES = {
  bottom: {
    position: "absolute" as const,
    bottom: "14px",
    left: "17px",
    right: "14px",
    height: "1px",
    background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
  },
  rightVertical: {
    position: "absolute" as const,
    top: "17px",
    right: "14px",
    width: "1px",
    bottom: "14px",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
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