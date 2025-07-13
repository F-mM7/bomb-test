import React, { useEffect, useRef } from "react";
import type { DisplayProps } from "../../types";
import { COLORS } from "../../styles/constants/colors";
import { 
  TimerRenderer, 
  StatusRenderer, 
  QuestionRenderer, 
  CircleRenderer, 
  InputRenderer 
} from "../display/renderers";
import { scaleSize, BASE_SIZES } from "../../utils/responsive";

// Canvas内部解像度（ピクセル数）- レスポンシブとは無関係
const CANVAS_WIDTH = 96;
const CANVAS_HEIGHT = 54;

const Display: React.FC<DisplayProps> = ({
  pixelWidth,
  pixelHeight,
  remaining,
  input,
  currentQuestion,
  showCorrect,
  isCleared,
  isPaused,
  isFailed,
  style,
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
    InputRenderer.render(ctx, input || "", currentQuestion, isFailed || false, isPaused || false, remaining);
  }, [remaining, input, currentQuestion, showCorrect, isCleared, isPaused, isFailed]);


  return (
    <div style={{ marginBottom: scaleSize(BASE_SIZES.SPACING_LG), ...style }}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{
          width: scaleSize(pixelWidth),
          height: scaleSize(pixelHeight),
          imageRendering: "pixelated",
          background: COLORS.black,
        }}
      />
    </div>
  );
};

export default Display;
