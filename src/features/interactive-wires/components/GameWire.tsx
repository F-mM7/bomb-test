import React from "react";
import type { WirePosition } from "../../game/types/game.types";
import { WIRE_CONFIGS, getGameWireStyle } from "../constants";

export interface GameWireProps {
  position: WirePosition;
  isCut: boolean;
  wireStyle: React.CSSProperties;
  onWireClick: (wire: WirePosition) => void;
}

const GameWire: React.FC<GameWireProps> = ({
  position,
  isCut,
  wireStyle,
  onWireClick,
}) => {
  const config = WIRE_CONFIGS[position];
  const gameWireStyle = getGameWireStyle(position);
  
  if (isCut) {
    return (
      <>
        <path
          d={config.cutPath1}
          style={{
            ...wireStyle,
            ...gameWireStyle,
            pointerEvents: "none",
          }}
        />
        <path
          d={config.cutPath2}
          style={{
            ...wireStyle,
            ...gameWireStyle,
            pointerEvents: "none",
          }}
        />
        <circle
          cx={config.cutCircle1.cx}
          cy={config.cutCircle1.cy}
          r="4"
          fill="#666"
        />
        <circle
          cx={config.cutCircle2.cx}
          cy={config.cutCircle2.cy}
          r="4"
          fill="#666"
        />
      </>
    );
  }
  
  return (
    <path
      d={config.continuousPath}
      style={{
        ...wireStyle,
        ...gameWireStyle,
        pointerEvents: "auto",
      }}
      onClick={() => onWireClick(position)}
    />
  );
};

export default GameWire;