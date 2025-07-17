import React, { useEffect, useRef } from "react";
import type { DisplayProps } from "../types/display.types";
import { COLORS } from "../../../constants/colors";
import { TimerRenderer } from "../../timer";
import {
  StatusRenderer,
  QuestionRenderer,
  CircleRenderer,
  InputRenderer,
} from "../renderers";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";

// Canvas内部解像度（ピクセル数）- レスポンシブとは無関係
const CANVAS_WIDTH = 96;
const CANVAS_HEIGHT = 54;

const Display: React.FC<DisplayProps> = ({
  remaining,
  input,
  currentQuestion,
  showCorrect,
  isCleared,
  isPaused,
  isFailed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    TimerRenderer.render(ctx, remaining, isPaused || false);
    if (isCleared || isFailed) {
      StatusRenderer.render(ctx, isCleared || false, isFailed || false);
    } else if (currentQuestion) {
      QuestionRenderer.render(ctx, currentQuestion);
    }
    if (showCorrect) {
      CircleRenderer.render(ctx, showCorrect, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    InputRenderer.render(
      ctx,
      input || "",
      currentQuestion,
      isFailed || false,
      isPaused || false,
      remaining
    );
  }, [
    remaining,
    input,
    currentQuestion,
    showCorrect,
    isCleared,
    isPaused,
    isFailed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      style={{
        width: scaleSize(BASE_SIZES.DISPLAY_DOM_WIDTH),
        height: scaleSize(BASE_SIZES.DISPLAY_DOM_HEIGHT),
        imageRendering: "pixelated",
        background: COLORS.black,
        display: "block",
      }}
    />
  );
};

export default Display;
