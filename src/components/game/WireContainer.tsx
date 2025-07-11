import React from "react";
import SvgWire from "../common/SvgWire";
import type { WirePosition } from "../../types/game/game.types";
import { BASE_SIZES, scaleSize } from "../../utils/responsive";

interface WireContainerProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut: boolean;
  isRightCut: boolean;
  wireStyle: React.CSSProperties;
  disabled: boolean;
}

export const WireContainer: React.FC<WireContainerProps> = ({
  onWireClick,
  isLeftCut,
  isRightCut,
  wireStyle,
  disabled
}) => {
  return (
    <div style={{
      width: scaleSize(BASE_SIZES.KEYBOARD_INNER_WIDTH),
      height: scaleSize(BASE_SIZES.KEYBOARD_TOTAL_HEIGHT),
      position: "relative"
    }}>
      <svg 
        viewBox={`0 0 ${BASE_SIZES.KEYBOARD_INNER_WIDTH} ${BASE_SIZES.KEYBOARD_TOTAL_HEIGHT}`}
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10
        }}
      >
        <SvgWire 
          position="left" 
          isCut={isLeftCut} 
          wireStyle={wireStyle}
          onWireClick={onWireClick}
          disabled={disabled}
        />
        <SvgWire 
          position="right" 
          isCut={isRightCut} 
          wireStyle={wireStyle}
          onWireClick={onWireClick}
          disabled={disabled}
        />
      </svg>
    </div>
  );
};