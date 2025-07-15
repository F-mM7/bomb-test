import React from "react";
import SvgWire from "./SvgWire";
import type { WirePosition } from "../../game/types/game.types";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";
import { Z_INDEX } from "../../../constants/zIndex";

interface WireContainerProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut: boolean;
  isRightCut: boolean;
  wireStyle: React.CSSProperties;
  disabled: boolean;
}

const WireContainer: React.FC<WireContainerProps> = ({
  onWireClick,
  isLeftCut,
  isRightCut,
  wireStyle,
  disabled,
}) => {
  return (
    <div
      style={{
        width: scaleSize(BASE_SIZES.KEYBOARD_INNER_WIDTH),
        height: scaleSize(BASE_SIZES.KEYBOARD_INNER_HEIGHT),
        position: "relative",
      }}
    >
      <svg
        viewBox={`0 0 ${BASE_SIZES.KEYBOARD_INNER_WIDTH} ${BASE_SIZES.KEYBOARD_INNER_HEIGHT}`}
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: Z_INDEX.EXPOSED_WIRES,
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

export default WireContainer;
