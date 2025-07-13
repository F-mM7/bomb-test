import React from "react";
import SvgWire from "../common/SvgWire";
import { scaleSize, BASE_SIZES, createScaledWirePath } from "../../utils/responsive";

const WireLayer: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 920 1000"
      style={{
        position: "absolute",
        top: scaleSize(-BASE_SIZES.WIRE_LAYER_OFFSET),
        left: scaleSize(-BASE_SIZES.WIRE_LAYER_OFFSET),
        width: `calc(100% + ${scaleSize(BASE_SIZES.WIRE_LAYER_OVERFLOW)})`,
        height: `calc(100% + ${scaleSize(BASE_SIZES.WIRE_LAYER_OVERFLOW)})`,
        pointerEvents: "none",
        zIndex: 0,
      }}>
      <SvgWire 
        d="M 380 180 Q 380 60 460 60 Q 540 60 540 180"
        stroke="#d00"
      />
      
      <SvgWire 
        d="M 450 180 Q 450 40 530 40 Q 610 40 610 180"
        stroke="#00d"
      />

      <SvgWire 
        d="M 140 220 Q 20 220 20 260 Q 20 300 140 300"
        stroke="#dd0"
      />

      <SvgWire 
        d="M 140 360 Q 60 360 60 380 Q 60 400 140 400"
        stroke="#0a0"
      />

      <SvgWire 
        d="M 140 380 Q 40 380 40 400 Q 40 420 140 420"
        stroke="#a0a"
      />

      <SvgWire 
        d="M 780 360 Q 880 360 880 380 Q 880 400 780 400"
        stroke="#a0a"
      />

      <SvgWire 
        d="M 780 450 Q 900 450 900 490 Q 900 530 780 530"
        stroke="#dd0"
      />

      <SvgWire 
        d="M 200 732 L 720 732"
        stroke="#ff0"
        strokeWidth={BASE_SIZES.WIRE_STROKE_WIDTH}
        strokeDasharray="10 5"
      />
      
      <SvgWire 
        d="M 350 732 Q 350 850 430 850 Q 510 850 510 732"
        stroke="#dd0"
      />
      
      <SvgWire 
        d="M 450 732 Q 450 870 530 870 Q 610 870 610 732"
        stroke="#f80"
      />
    </svg>
  );
};

export default WireLayer;