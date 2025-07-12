import React from "react";
import { KeyboardButton } from "./KeyboardButton";
import { kanaGroups, LAYOUT } from "../../constants";
import { gridStyle, baseButtonStyle } from "../../styles/components/keyboard.styles";

interface KanaGridProps {
  onCharInput: (char: string) => void;
  onMarkClick: (mark: "゛" | "゜" | "小字") => void;
  disabled?: boolean;
}

export const KanaGrid: React.FC<KanaGridProps> = ({ onCharInput, onMarkClick, disabled = false }) => {
  const keyStyle = { ...baseButtonStyle, fontSize: "18px" } as const;
  const orderedGroups = [...kanaGroups].reverse();

  return (
    <div style={gridStyle(orderedGroups.length)}>
      {Array(5)
        .fill(null)
        .flatMap((_, row) =>
          orderedGroups.map((group, col) =>
            group[row] ? (
              <div key={`${row}-${col}`}>
                <KeyboardButton 
                  content={group[row]!} 
                  onClick={() => {
                    const char = group[row]!;
                    if (char === "゛" || char === "゜") {
                      onMarkClick(char);
                    } else if (char === "小") {
                      onMarkClick("小字");
                    } else {
                      onCharInput(char);
                    }
                  }} 
                  style={keyStyle}
                  disabled={disabled}
                />
              </div>
            ) : (
              <div
                key={`${row}-${col}`}
                style={{ 
                  width: `calc(${LAYOUT.BUTTON_SIZE}px * var(--keyboard-scale, 1))`, 
                  height: `calc(${LAYOUT.BUTTON_SIZE}px * var(--keyboard-scale, 1))`, 
                  visibility: "hidden" 
                }}
              />
            )
          )
        )}
    </div>
  );
};