import React, { useCallback, useEffect, useRef } from "react";
import {
  fullDakutenMap,
  fullHandakutenMap,
  fullSmallMap,
} from "../../constants";
import {
  keyboardStyle,
  buttonContainerStyle,
} from "../../styles/components/keyboard.styles";
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

  const keyboardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!keyboardRef.current || !containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const keyboardWidth = 640; // LAYOUT.CONTAINER_WIDTH
      const scale = Math.min(1, (containerWidth - 40) / keyboardWidth); // 40px margin
      
      keyboardRef.current.style.setProperty('--keyboard-scale', scale.toString());
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div ref={keyboardRef} style={keyboardStyle}>
        <div style={buttonContainerStyle}>
          <KanaGrid onCharInput={handleCharInput} onMarkClick={handleMark} disabled={disabled} />
          <ActionKeys 
            onBackspace={handleBackspace}
            onClear={handleClear}
            onEnter={onEnter}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;