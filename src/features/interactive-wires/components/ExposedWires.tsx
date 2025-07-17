import type { FC } from "react";
import { exposedWiresContainerStyle, getWireStyleWithState } from "../styles";
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
    <div style={exposedWiresContainerStyle}>
      <WireBorders />
      <WireContainer
        onWireClick={onWireClick}
        isLeftCut={isLeftCut}
        isRightCut={isRightCut}
        wireStyle={wireStyleWithState}
      />
    </div>
  );
};

export default ExposedWires;
