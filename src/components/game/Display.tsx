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

const Display: React.FC<DisplayProps> = ({
  width,
  height,
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
      CircleRenderer.render(ctx, showCorrect, width, height);
    }
    InputRenderer.render(ctx, input || "", currentQuestion, isFailed || false, isPaused || false, remaining);
  }, [remaining, input, currentQuestion, showCorrect, width, height, isCleared, isPaused, isFailed]);


  return (
    <div style={{ marginBottom: "16px", ...style }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          width: `min(${pixelWidth}px, 85vw)`,
          height: `min(${pixelHeight}px, 48vw)`,
          imageRendering: "pixelated",
          background: COLORS.black,
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

export default Display;
