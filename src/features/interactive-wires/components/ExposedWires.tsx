import type { FC } from "react";
import {
  exposedWiresContainerStyle,
  getWireStyleWithState,
} from "../styles";
import WireBorders from "./WireBorders";
import WireContainer from "./WireContainer";
import type { ExposedWiresProps } from "../types/wires.types";

const ExposedWires: FC<ExposedWiresProps> = ({
  onWireClick,
  isLeftCut = false,
  isRightCut = false,
}) => {
  const wireStyleWithState = getWireStyleWithState(false);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={exposedWiresContainerStyle}>
        <WireBorders />
        <WireContainer
          onWireClick={onWireClick}
          isLeftCut={isLeftCut}
          isRightCut={isRightCut}
          wireStyle={wireStyleWithState}
        />
      </div>
    </div>
  );
};

export default ExposedWires;
