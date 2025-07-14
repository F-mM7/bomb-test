import React from "react";
import KeyboardButton from "./KeyboardButton";
import { actionRowStyle, actionButtonStyle } from "../styles";

interface ActionKeysProps {
  onBackspace: () => void;
  onClear: () => void;
  onEnter?: () => void;
  disabled?: boolean;
}

const ActionKeys: React.FC<ActionKeysProps> = ({ 
  onBackspace, 
  onClear, 
  onEnter, 
  disabled = false 
}) => {
  
  const actionButtons = [
    { label: "消去", onClick: onBackspace },
    { label: "全消", onClick: onClear },
    { label: "送信", onClick: disabled ? undefined : onEnter },
  ];

  return (
    <div style={actionRowStyle}>
      {actionButtons.map(({ label, onClick }) => (
        <KeyboardButton 
          key={label}
          content={label} 
          onClick={onClick || (() => {})} 
          style={actionButtonStyle}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default ActionKeys;