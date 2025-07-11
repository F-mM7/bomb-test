import React from "react";
import { KeyboardButton } from "./KeyboardButton";
import { columnStyle, baseButtonStyle } from "../../styles/components/keyboard.styles";

interface ActionKeysProps {
  onBackspace: () => void;
  onClear: () => void;
  onEnter?: () => void;
  disabled?: boolean;
}

export const ActionKeys: React.FC<ActionKeysProps> = ({ 
  onBackspace, 
  onClear, 
  onEnter, 
  disabled = false 
}) => {
  const actionStyle = { ...baseButtonStyle, fontSize: "12px" } as const;
  
  const actionButtons = [
    { label: "消去", onClick: onBackspace },
    { label: "全消", onClick: onClear },
    { label: "送信", onClick: disabled ? undefined : onEnter },
  ];

  return (
    <div style={columnStyle}>
      {actionButtons.map(({ label, onClick }) => (
        <div key={label}>
          <KeyboardButton 
            content={label} 
            onClick={onClick || (() => {})} 
            style={actionStyle}
            disabled={disabled}
          />
        </div>
      ))}
    </div>
  );
};