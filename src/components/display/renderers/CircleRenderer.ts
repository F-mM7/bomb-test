import { COLORS } from "../../../styles/constants/colors";

export class CircleRenderer {
  private static readonly CIRCLE_RADIUS = 20;
  private static readonly OUTER_BORDER_THICKNESS = 3;
  private static readonly MIDDLE_RING_THICKNESS = 3;
  private static readonly INNER_RING_THICKNESS = 3;
  private static readonly CIRCLE_BORDER_OFFSET = 0.5;

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
    ctx.fillStyle = COLORS.black;
    const outerRadius = this.CIRCLE_RADIUS + this.OUTER_BORDER_THICKNESS;
    
    this.drawRing(
      ctx,
      centerX,
      centerY,
      this.CIRCLE_RADIUS + this.CIRCLE_BORDER_OFFSET,
      outerRadius
    );
  }

  private static drawMiddleRing(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number
  ): void {
    ctx.fillStyle = COLORS.inputRed;
    const innerRadius = this.CIRCLE_RADIUS - this.MIDDLE_RING_THICKNESS;
    
    this.drawRing(
      ctx,
      centerX,
      centerY,
      innerRadius,
      this.CIRCLE_RADIUS + this.CIRCLE_BORDER_OFFSET
    );
  }

  private static drawInnerRing(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number
  ): void {
    ctx.fillStyle = COLORS.black;
    const outerRadius = this.CIRCLE_RADIUS - this.MIDDLE_RING_THICKNESS;
    const innerRadius = outerRadius - this.INNER_RING_THICKNESS;
    
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