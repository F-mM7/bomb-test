import React from "react";
import Display from "./Display";
import { Keyboard } from "../keyboard";
import ExposedWires from "./ExposedWires";
import WireLayer from "./WireLayer";
import { pcbStyle, screwStyle, displayMountStyle } from "../../styles";
import type { Question } from "../../types";

interface DeviceProps {
  isKeyboardAttached: boolean;
  input: string;
  remaining: number;
  setInput: (value: string | ((prev: string) => string)) => void;
  onWireClick: (wire: 'left' | 'right') => void;
  onSubmit: () => void;
  currentQuestion?: Question;
  showCorrect?: boolean;
  isCleared?: boolean;
  isPaused?: boolean;
  isRightCut?: boolean;
  isLeftCut?: boolean;
  isFailed?: boolean;
}

const Device: React.FC<DeviceProps> = ({
  isKeyboardAttached,
  input,
  remaining,
  setInput,
  onWireClick,
  onSubmit,
  currentQuestion,
  showCorrect,
  isCleared,
  isPaused,
  isRightCut,
  isLeftCut,
  isFailed
}) => {
  return (
    <>
      <WireLayer />
      
      <div style={{ ...pcbStyle, zIndex: 1 }}>
        <div style={{ ...screwStyle, top: "8px", left: "8px" }} />
        <div style={{ ...screwStyle, top: "8px", right: "8px" }} />
        <div style={{ ...screwStyle, bottom: "8px", left: "8px" }} />
        <div style={{ ...screwStyle, bottom: "8px", right: "8px" }} />

        <div style={displayMountStyle}>
          <Display
            width={96}
            height={54}
            pixelWidth={640}
            pixelHeight={360}
            input={input}
            remaining={remaining}
            currentQuestion={currentQuestion}
            showCorrect={showCorrect}
            isCleared={isCleared}
            isPaused={isPaused}
            isFailed={isFailed}
          />
        </div>

        {isKeyboardAttached ? (
          <Keyboard setInput={setInput} onEnter={onSubmit} disabled={isFailed} />
        ) : (
          <ExposedWires onWireClick={onWireClick} isLeftCut={isLeftCut} isRightCut={isRightCut} />
        )}
      </div>
    </>
  );
};

export default Device;