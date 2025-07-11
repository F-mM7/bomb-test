import React from "react";
import { BUTTON_STATES } from "../../styles/components/keyboard.styles";

const applyButtonState = (element: HTMLButtonElement, state: keyof typeof BUTTON_STATES) => {
  const styles = BUTTON_STATES[state];
  Object.assign(element.style, styles);
};

interface KeyboardButtonProps {
  content: string;
  onClick: () => void;
  style: React.CSSProperties;
  disabled?: boolean;
}

export const KeyboardButton: React.FC<KeyboardButtonProps> = ({ 
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