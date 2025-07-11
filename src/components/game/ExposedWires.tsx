import React from "react";
import { exposedWiresContainerStyle, getWireStyleWithState } from "../../styles/components/exposedWires.styles";
import { WireBorders } from "./WireBorders";
import { WireContainer } from "./WireContainer";
import type { WirePosition } from "../../types/game/game.types";

interface ExposedWiresProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut?: boolean;
  isRightCut?: boolean;
  disabled?: boolean;
}

const ExposedWires: React.FC<ExposedWiresProps> = ({ 
  onWireClick, 
  isLeftCut = false, 
  isRightCut = false, 
  disabled = false 
}) => {
  const wireStyleWithState = getWireStyleWithState(disabled);

  return (
    <div style={exposedWiresContainerStyle}>
      <WireBorders />
      <WireContainer
        onWireClick={onWireClick}
        isLeftCut={isLeftCut}
        isRightCut={isRightCut}
        wireStyle={wireStyleWithState}
        disabled={disabled}
      />
    </div>
  );
};

export default ExposedWires;