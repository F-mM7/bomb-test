import React from "react";
import { KeyboardButton } from "./KeyboardButton";
import { columnStyle, baseButtonStyle } from "../../styles/components/keyboard.styles";
import type { MarkType } from "../../types/data/font.types";

interface ExtraKeysProps {
  onMarkClick: (mark: MarkType) => void;
  disabled?: boolean;
}

export const ExtraKeys: React.FC<ExtraKeysProps> = ({ onMarkClick, disabled = false }) => {
  const keyStyle = { ...baseButtonStyle, fontSize: "14px" } as const;
  
  const extraKeys = [
    { label: "゛" as const, onClick: () => onMarkClick("゛") },
    { label: "゜" as const, onClick: () => onMarkClick("゜") },
    { label: "小" as const, onClick: () => onMarkClick("小字") },
  ];

  return (
    <div style={columnStyle}>
      {extraKeys.map(({ label, onClick }) => (
        <div key={label}>
          <KeyboardButton 
            content={label} 
            onClick={onClick} 
            style={keyStyle}
            disabled={disabled}
          />
        </div>
      ))}
    </div>
  );
};

