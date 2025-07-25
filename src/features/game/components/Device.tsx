import React, { useState, useEffect } from "react";
import { DisplayWithMount } from "../../display";
import { Keyboard } from "../../keyboard";
import { ExposedWires } from "../../interactive-wires";
import { pcbStyle, screwStyle } from "../styles";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";
import type { Question } from "../types/question.types";
import { Z_INDEX } from "../../../constants/zIndex";
import { KEYBOARD_DETACHMENT_ANIMATION } from "../../../constants/animations";

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

      // 1段階目: 移動
      setTimeout(() => {
        setAnimationPhase("settled");

        // 2段階目: 静止してからフェードアウト
        setTimeout(() => {
          setAnimationPhase("fading");
        }, KEYBOARD_DETACHMENT_ANIMATION.SETTLE_DURATION);
      }, KEYBOARD_DETACHMENT_ANIMATION.MOVE_DURATION);
    }

    if (!isDetaching) {
      setAnimationPhase("idle");
    }
  }, [isDetaching, animationPhase]);
  return (
    <div style={{ ...pcbStyle, zIndex: Z_INDEX.DEVICE_BASE }}>
      <div
        style={{
          ...screwStyle,
          top: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
          left: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
        }}
      />
      <div
        style={{
          ...screwStyle,
          top: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
          right: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
        }}
      />
      <div
        style={{
          ...screwStyle,
          bottom: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
          left: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
        }}
      />
      <div
        style={{
          ...screwStyle,
          bottom: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
          right: scaleSize(BASE_SIZES.COMMON_BORDER_RADIUS),
        }}
      />

      <DisplayWithMount
        input={input}
        remaining={remaining}
        currentQuestion={currentQuestion}
        showCorrect={showCorrect}
        isCleared={isCleared}
        isPaused={isPaused}
        isFailed={isFailed}
      />
      <ExposedWires
        onWireClick={onWireClick}
        isLeftCut={isLeftCut}
        isRightCut={isRightCut}
      />

      {isKeyboardAttached && (
        <div
          style={{
            position: "relative",
            top: scaleSize(-BASE_SIZES.KEYBOARD_OUTER_HEIGHT),
            left: "0",
            zIndex: Z_INDEX.KEYBOARD,
            transform:
              animationPhase === "moving" ||
              animationPhase === "settled" ||
              animationPhase === "fading"
                ? `translateY(${scaleSize(
                    50
                  )}) rotateX(-15deg) rotateZ(3deg) scale(0.98)`
                : "translateY(0) rotateX(0deg) rotateZ(0deg) scale(1)",
            opacity: animationPhase === "fading" ? 0 : 1,
            transition:
              animationPhase === "moving"
                ? `transform ${KEYBOARD_DETACHMENT_ANIMATION.MOVE_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                : animationPhase === "fading"
                ? `opacity ${KEYBOARD_DETACHMENT_ANIMATION.FADE_DURATION}ms ease-out`
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
  );
};

export default Device;
