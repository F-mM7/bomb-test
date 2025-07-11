import React, { useCallback } from "react";
import {
  fullDakutenMap,
  fullHandakutenMap,
  fullSmallMap,
} from "../../constants";
import {
  keyboardStyle,
  buttonContainerStyle,
} from "../../styles/components/keyboard.styles";
import { ExtraKeys } from "./ExtraKeys";
import type { MarkType } from "../../types/data/font.types";
import { ActionKeys } from "./ActionKeys";
import { KanaGrid } from "./KanaGrid";

interface KeyboardProps {
  setInput: (value: string | ((prev: string) => string)) => void;
  onEnter?: () => void;
  disabled?: boolean;
}

interface MarkMapping {
  mark: MarkType;
  map: Record<string, string>;
}

const MARK_MAPPINGS: MarkMapping[] = [
  { mark: "゛", map: fullDakutenMap },
  { mark: "゜", map: fullHandakutenMap },
  { mark: "小字", map: fullSmallMap },
];

const Keyboard: React.FC<KeyboardProps> = ({ setInput, onEnter, disabled = false }) => {
  const handleMark = useCallback((mark: MarkType) => {
    if (disabled) return;
    
    setInput((prev) => {
      if (!prev) return prev;
      
      const lastChar = prev.slice(-1);
      const mapping = MARK_MAPPINGS.find(m => m.mark === mark);
      
      if (mapping?.map[lastChar]) {
        return prev.slice(0, -1) + mapping.map[lastChar];
      }
      
      return prev;
    });
  }, [setInput, disabled]);

  const handleCharInput = useCallback((char: string) => {
    if (disabled) return;
    
    setInput((prev) => prev.length < 8 ? prev + char : prev);
  }, [setInput, disabled]);

  const handleBackspace = useCallback(() => {
    if (disabled) return;
    
    setInput((prev) => prev.slice(0, -1));
  }, [setInput, disabled]);

  const handleClear = useCallback(() => {
    if (disabled) return;
    
    setInput("");
  }, [setInput, disabled]);

  return (
    <div style={keyboardStyle}>
      <div style={buttonContainerStyle}>
        <ExtraKeys onMarkClick={handleMark} disabled={disabled} />
        <KanaGrid onCharInput={handleCharInput} disabled={disabled} />
        <ActionKeys 
          onBackspace={handleBackspace}
          onClear={handleClear}
          onEnter={onEnter}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Keyboard;