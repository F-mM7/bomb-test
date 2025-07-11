import type { WirePosition } from "../types/game/game.types";

export interface WireConfig {
  continuousPath: string;
  cutPath1: string;
  cutPath2: string;
  cutCircle1: { cx: number; cy: number };
  cutCircle2: { cx: number; cy: number };
}

export const WIRE_CONFIGS: Record<WirePosition, WireConfig> = {
  left: {
    continuousPath: "M 108 0 L 108 36 Q 120 65 115 95 Q 98 125 112 155 Q 118 185 108 216",
    cutPath1: "M 108 0 L 108 36 Q 120 65 115 95 Q 108 110 113 122",
    cutPath2: "M 109 142 Q 112 152 112 155 Q 118 185 108 216",
    cutCircle1: { cx: 113, cy: 122 },
    cutCircle2: { cx: 109, cy: 142 }
  },
  right: {
    continuousPath: "M 288 0 L 288 36 Q 276 65 282 95 Q 298 125 284 155 Q 278 185 288 216",
    cutPath1: "M 288 0 L 288 36 Q 276 65 282 95 Q 290 110 285 122",
    cutPath2: "M 281 142 Q 284 152 284 155 Q 278 185 288 216",
    cutCircle1: { cx: 285, cy: 122 },
    cutCircle2: { cx: 281, cy: 142 }
  }
};

export const getWireColor = (position: WirePosition): string => 
  position === 'left' ? "#ff4444" : "#4488ff";

export const getGameWireStyle = (position: WirePosition) => ({
  stroke: getWireColor(position),
  strokeWidth: "10",
  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))"
});