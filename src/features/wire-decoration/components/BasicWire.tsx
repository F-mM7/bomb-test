import React from "react";

export interface BasicWireProps {
  d: string;
  stroke: string;
}

const BasicWire: React.FC<BasicWireProps> = ({ 
  d, 
  stroke
}) => {
  return (
    <path
      d={d}
      stroke={stroke}
      strokeWidth={6}
      fill="none"
      strokeLinecap="round"
    />
  );
};

export default BasicWire;