import React from "react";
import Display from "./Display";
import { displayMountStyle } from "../styles/displayMount.styles";
import type { DisplayProps } from "../types/display.types";

export const DisplayWithMount: React.FC<DisplayProps> = (props) => {
  return (
    <div style={displayMountStyle}>
      <Display {...props} />
    </div>
  );
};