import type { FC } from "react";
import { useCallback } from "react";
import { fullDakutenMap, fullHandakutenMap, fullSmallMap } from "../constants";
import { keyboardStyle } from "../styles";
import type { KeyboardProps, MarkMapping } from "../types/keyboard.types";
import type { MarkType } from "../../../types/font.types";
import ActionKeys from "./ActionKeys";
import KanaGrid from "./KanaGrid";

const MARK_MAPPINGS: MarkMapping[] = [
  { mark: "゛", map: fullDakutenMap },
  { mark: "゜", map: fullHandakutenMap },
  { mark: "小字", map: fullSmallMap },
];

const MAX_INPUT_LENGTH = 8;

const Keyboard: FC<KeyboardProps> = ({
  setInput,
  onEnter,
  disabled = false,
}) => {
  const handleMark = useCallback(
    (mark: MarkType) => {
      if (disabled) return;

      setInput((prev) => {
        if (!prev) return prev;

        const lastChar = prev.slice(-1);
        const mapping = MARK_MAPPINGS.find((m) => m.mark === mark);

        if (mapping?.map[lastChar]) {
          return prev.slice(0, -1) + mapping.map[lastChar];
        }

        return prev;
      });
    },
    [setInput, disabled]
  );

  const handleCharInput = useCallback(
    (char: string) => {
      if (disabled) return;

      setInput((prev) => (prev.length < MAX_INPUT_LENGTH ? prev + char : prev));
    },
    [setInput, disabled]
  );

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
      <KanaGrid
        onCharInput={handleCharInput}
        onMarkClick={handleMark}
        disabled={disabled}
      />
      <ActionKeys
        onBackspace={handleBackspace}
        onClear={handleClear}
        onEnter={onEnter}
        disabled={disabled}
      />
    </div>
  );
};

export default Keyboard;
