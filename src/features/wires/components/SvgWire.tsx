import React from "react";
import type { WirePosition } from "../../../types/game/game.types";
import { WIRE_CONFIGS, getGameWireStyle } from "../constants";

interface BasicWireProps {
  d: string;
  stroke: string;
  strokeWidth?: number;
  strokeLinecap?: "round" | "square" | "butt";
  strokeDasharray?: string;
}

interface GameWireProps {
  position: WirePosition;
  isCut: boolean;
  wireStyle: React.CSSProperties;
  onWireClick: (wire: WirePosition) => void;
  disabled: boolean;
}

type WireProps = BasicWireProps | GameWireProps;

function isGameWireProps(props: WireProps): props is GameWireProps {
  return 'position' in props;
}

const SvgWire: React.FC<WireProps> = (props) => {
  if (isGameWireProps(props)) {
    const { position, isCut, wireStyle, onWireClick, disabled } = props;
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
        onClick={disabled ? undefined : () => onWireClick(position)}
      />
    );
  }

  const { 
    d, 
    stroke, 
    strokeWidth = 6, 
    strokeLinecap = "round", 
    strokeDasharray 
  } = props;
  
  return (
    <path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap={strokeLinecap}
      strokeDasharray={strokeDasharray}
    />
  );
};

export default SvgWire;