import React from "react";

export interface BasicWireProps {
  d: string;
  stroke: string;
  strokeWidth?: number;
  strokeLinecap?: "round" | "square" | "butt";
  strokeDasharray?: string;
}

const BasicWire: React.FC<BasicWireProps> = ({ 
  d, 
  stroke, 
  strokeWidth = 6, 
  strokeLinecap = "round", 
  strokeDasharray 
}) => {
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

export default BasicWire;