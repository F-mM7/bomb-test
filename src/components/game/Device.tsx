import React from "react";
import Display from "./Display";
import { Keyboard } from "../keyboard";
import ExposedWires from "./ExposedWires";
import WireLayer from "./WireLayer";
import { pcbStyle, screwStyle, displayMountStyle } from "../../styles";
import { BASE_SIZES, scaleSize } from "../../utils/responsive";
import type { Question } from "../../types";

interface DeviceProps {
  isKeyboardAttached: boolean;
  input: string;
  remaining: number;
  setInput: (value: string | ((prev: string) => string)) => void;
  onWireClick: (wire: "left" | "right") => void;
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
  isFailed,
}) => {
  return (
    <div>
      <WireLayer />

      <div style={{ ...pcbStyle, zIndex: 1 }}>
        <div
          style={{
            ...screwStyle,
            top: scaleSize(BASE_SIZES.SPACING_SM),
            left: scaleSize(BASE_SIZES.SPACING_SM),
          }}
        />
        <div
          style={{
            ...screwStyle,
            top: scaleSize(BASE_SIZES.SPACING_SM),
            right: scaleSize(BASE_SIZES.SPACING_SM),
          }}
        />
        <div
          style={{
            ...screwStyle,
            bottom: scaleSize(BASE_SIZES.SPACING_SM),
            left: scaleSize(BASE_SIZES.SPACING_SM),
          }}
        />
        <div
          style={{
            ...screwStyle,
            bottom: scaleSize(BASE_SIZES.SPACING_SM),
            right: scaleSize(BASE_SIZES.SPACING_SM),
          }}
        />

        <div style={displayMountStyle}>
          <Display
            pixelWidth={BASE_SIZES.DISPLAY_WIDTH}
            pixelHeight={BASE_SIZES.DISPLAY_HEIGHT}
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
          <Keyboard
            setInput={setInput}
            onEnter={onSubmit}
            disabled={isFailed}
          />
        ) : (
          <ExposedWires
            onWireClick={onWireClick}
            isLeftCut={isLeftCut}
            isRightCut={isRightCut}
          />
        )}
      </div>
    </div>
  );
};

export default Device;