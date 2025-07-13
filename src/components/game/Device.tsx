import React, { useEffect, useRef } from "react";
import Display from "./Display";
import { Keyboard } from "../keyboard";
import ExposedWires from "./ExposedWires";
import WireLayer from "./WireLayer";
import { pcbStyle, screwStyle, displayMountStyle } from "../../styles";
import {
  BASE_SIZES,
  calculateGlobalScale,
  setGlobalScale,
  scaleSize,
} from "../../utils/responsive";
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
  const deviceRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!deviceRef.current || !containerRef.current) return;

      // Get parent container dimensions
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const containerWidth = parent.offsetWidth - (BASE_SIZES.GLOBAL_CONTAINER_PADDING * 2); // Subtract container padding
      const containerHeight = window.innerHeight * 0.8;

      // Calculate total device height using BASE_SIZES
      const keyboardHeight =
        BASE_SIZES.KEYBOARD_ROWS * BASE_SIZES.BUTTON_SIZE +
        (BASE_SIZES.KEYBOARD_ROWS - 1) * BASE_SIZES.BUTTON_GAP +
        BASE_SIZES.BUTTON_SIZE + // Action buttons
        BASE_SIZES.BUTTON_GAP; // Gap between grid and actions
      const displayHeight =
        BASE_SIZES.DISPLAY_HEIGHT + BASE_SIZES.SPACING_LG * 2; // Display + mounting
      const deviceHeight =
        keyboardHeight + displayHeight + BASE_SIZES.CONTAINER_PADDING * 4;

      // Use calculated total bombBody width from BASE_SIZES
      const bombBodyTotalWidth = BASE_SIZES.BOMB_BODY_TOTAL_WIDTH;
      
      // Use unified scale calculation
      const scale = calculateGlobalScale(
        containerWidth,
        containerHeight,
        bombBodyTotalWidth,
        deviceHeight
      );

      // Set global scale for all components
      setGlobalScale(scale, deviceRef.current);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.addEventListener("orientationchange", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("orientationchange", updateScale);
    };
  }, []);
  return (
    <div ref={containerRef}>
      <div ref={deviceRef}>
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
    </div>
  );
};

export default Device;
