import type { FC, CSSProperties } from "react";
import GameWire from "./GameWire";
import type { WirePosition } from "../../game/types/game.types";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";
import { Z_INDEX } from "../../../constants/zIndex";

interface WireContainerProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut: boolean;
  isRightCut: boolean;
  wireStyle: CSSProperties;
}

const WireContainer: FC<WireContainerProps> = ({
  onWireClick,
  isLeftCut,
  isRightCut,
  wireStyle,
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
        <GameWire
          position="left"
          isCut={isLeftCut}
          wireStyle={wireStyle}
          onWireClick={onWireClick}
        />
        <GameWire
          position="right"
          isCut={isRightCut}
          wireStyle={wireStyle}
          onWireClick={onWireClick}
        />
      </svg>
    </div>
  );
};

export default WireContainer;
