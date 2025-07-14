import { COLORS } from "../../../styles/constants/colors";
import { DISPLAY_CONSTANTS } from "../constants";

export class CircleRenderer {

  static render(
    ctx: CanvasRenderingContext2D,
    showCorrect: boolean,
    width: number,
    height: number
  ): void {
    if (!showCorrect) return;

    const centerX = Math.floor(width / 2);
    const centerY = Math.floor(height / 2);
    
    this.drawOuterBorder(ctx, centerX, centerY);
    this.drawMiddleRing(ctx, centerX, centerY);
    this.drawInnerRing(ctx, centerX, centerY);
  }

  private static drawOuterBorder(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number
  ): void {
    const { RADIUS, OUTER_BORDER_THICKNESS, BORDER_OFFSET } = DISPLAY_CONSTANTS.CIRCLE;
    ctx.fillStyle = COLORS.black;
    const outerRadius = RADIUS + OUTER_BORDER_THICKNESS;
    
    this.drawRing(
      ctx,
      centerX,
      centerY,
      RADIUS + BORDER_OFFSET,
      outerRadius
    );
  }

  private static drawMiddleRing(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number
  ): void {
    const { RADIUS, MIDDLE_RING_THICKNESS, BORDER_OFFSET } = DISPLAY_CONSTANTS.CIRCLE;
    ctx.fillStyle = COLORS.inputRed;
    const innerRadius = RADIUS - MIDDLE_RING_THICKNESS;
    
    this.drawRing(
      ctx,
      centerX,
      centerY,
      innerRadius,
      RADIUS + BORDER_OFFSET
    );
  }

  private static drawInnerRing(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number
  ): void {
    const { RADIUS, MIDDLE_RING_THICKNESS, INNER_RING_THICKNESS } = DISPLAY_CONSTANTS.CIRCLE;
    ctx.fillStyle = COLORS.black;
    const outerRadius = RADIUS - MIDDLE_RING_THICKNESS;
    const innerRadius = outerRadius - INNER_RING_THICKNESS;
    
    this.drawRing(ctx, centerX, centerY, innerRadius, outerRadius);
  }

  private static drawRing(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    innerRadius: number,
    outerRadius: number
  ): void {
    const scanRadius = Math.ceil(outerRadius);
    
    for (let yOffset = -scanRadius; yOffset <= scanRadius; yOffset++) {
      for (let xOffset = -scanRadius; xOffset <= scanRadius; xOffset++) {
        const distance = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
        
        if (distance >= innerRadius && distance <= outerRadius) {
          ctx.fillRect(centerX + xOffset, centerY + yOffset, 1, 1);
        }
      }
    }
  }
}