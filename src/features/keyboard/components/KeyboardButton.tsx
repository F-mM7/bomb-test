import React from "react";
import { BUTTON_STATES } from "../styles";
import type { KeyboardButtonProps } from "../types/keyboard.types";

const applyButtonState = (element: HTMLButtonElement, state: keyof typeof BUTTON_STATES) => {
  const styles = BUTTON_STATES[state];
  Object.assign(element.style, styles);
};

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ 
  content, 
  onClick, 
  style, 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      onMouseDown={(e) => !disabled && applyButtonState(e.currentTarget, "pressed")}
      onMouseUp={(e) => !disabled && applyButtonState(e.currentTarget, "released")}
      onMouseLeave={(e) => !disabled && applyButtonState(e.currentTarget, "released")}
    >
      {content}
    </button>
  );
};

export default KeyboardButton;