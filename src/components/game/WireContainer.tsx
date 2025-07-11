import React from "react";
import SvgWire from "../common/SvgWire";
import type { WirePosition } from "../../types/game/game.types";
import { LAYOUT } from "../../constants/layout";

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
      gap: `${LAYOUT.BUTTON_GAP}px`,
      justifyContent: "center",
    }}>
      <div style={{ width: LAYOUT.BUTTON_SIZE }} />
      
      <div style={{
        width: `${LAYOUT.EXPOSED_WIRES_CONTENT_WIDTH}px`,
        height: `${LAYOUT.EXPOSED_WIRES_CONTENT_HEIGHT}px`,
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
      
      <div style={{ width: LAYOUT.BUTTON_SIZE }} />
    </div>
  );
};