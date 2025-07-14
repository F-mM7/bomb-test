import React, { useState, useEffect } from "react";
import { Display } from "../../display";
import { Keyboard } from "../../keyboard";
import { ExposedWires, WireLayer } from "../../wires";
import { pcbStyle, screwStyle, displayMountStyle } from "../../../styles";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";
import type { Question } from "../types/question.types";
import { Z_INDEX } from "../../../styles/constants/zIndex";

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
  isDetaching?: boolean;
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
  isDetaching = false,
}) => {
  const [animationPhase, setAnimationPhase] = useState<
    "idle" | "moving" | "settled" | "fading"
  >("idle");

  useEffect(() => {
    if (isDetaching && animationPhase === "idle") {
      setAnimationPhase("moving");

      // 1段階目: 移動（600ms）
      setTimeout(() => {
        setAnimationPhase("settled");

        // 2段階目: 少し静止してからフェードアウト（400ms後にフェード開始）
        setTimeout(() => {
          setAnimationPhase("fading");
        }, 400);
      }, 600);
    }

    if (!isDetaching) {
      setAnimationPhase("idle");
    }
  }, [isDetaching, animationPhase]);
  return (
    <div>
      <WireLayer />

      <div style={{ ...pcbStyle, zIndex: Z_INDEX.DEVICE_BASE }}>
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
        <ExposedWires
          onWireClick={onWireClick}
          isLeftCut={isLeftCut}
          isRightCut={isRightCut}
        />

        {isKeyboardAttached && (
          <div
            style={{
              position: "relative",
              top: scaleSize(-BASE_SIZES.KEYBOARD_TOTAL_HEIGHT - 25),
              left: scaleSize(7.4),
              zIndex: Z_INDEX.KEYBOARD,
              transform:
                animationPhase === "moving" ||
                animationPhase === "settled" ||
                animationPhase === "fading"
                  ? "translateY(50px) rotateX(-15deg) rotateZ(3deg) scale(0.98)"
                  : "translateY(0) rotateX(0deg) rotateZ(0deg) scale(1)",
              opacity: animationPhase === "fading" ? 0 : 1,
              transition:
                animationPhase === "moving"
                  ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : animationPhase === "fading"
                  ? "opacity 0.5s ease-out"
                  : "none",
              transformOrigin: "center bottom",
            }}
          >
            <Keyboard
              setInput={setInput}
              onEnter={onSubmit}
              disabled={isFailed}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Device;
