import type { FC } from "react";
import KeyboardButton from "./KeyboardButton";
import { kanaGroups } from "../constants";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";
import { gridStyle, baseButtonStyle } from "../styles";

interface KanaGridProps {
  onCharInput: (char: string) => void;
  onMarkClick: (mark: "゛" | "゜" | "小字") => void;
  disabled?: boolean;
}

const KanaGrid: FC<KanaGridProps> = ({ onCharInput, onMarkClick, disabled = false }) => {
  const keyStyle = { ...baseButtonStyle } as const;
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
                  width: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_SIZE), 
                  height: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_SIZE), 
                  visibility: "hidden" 
                }}
              />
            )
          )
        )}
    </div>
  );
};

export default KanaGrid;