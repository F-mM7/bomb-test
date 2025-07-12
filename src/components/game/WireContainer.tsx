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
      display: "flex",
      gap: scaleSize(BASE_SIZES.BUTTON_GAP),
      justifyContent: "center",
    }}>
      <div style={{ width: scaleSize(BASE_SIZES.BUTTON_SIZE) }} />
      
      <div style={{
        width: scaleSize(BASE_SIZES.EXPOSED_WIRES_WIDTH),
        height: scaleSize(BASE_SIZES.KEYBOARD_ROWS * BASE_SIZES.BUTTON_SIZE + (BASE_SIZES.KEYBOARD_ROWS - 1) * BASE_SIZES.BUTTON_GAP),
        position: "relative"
      }}>
        <svg 
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
      
      <div style={{ width: scaleSize(BASE_SIZES.BUTTON_SIZE) }} />
    </div>
  );
};