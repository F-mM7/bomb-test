import type { WirePosition } from "../game/types/game.types";
import { BASE_SIZES } from "../../utils/responsive";

export interface WireConfig {
  continuousPath: string;
  cutPath1: string;
  cutPath2: string;
  cutCircle1: { cx: number; cy: number };
  cutCircle2: { cx: number; cy: number };
}

// ワイヤー位置計算用定数
const WIRE_SPACING = BASE_SIZES.KEYBOARD_INNER_WIDTH / 3;
const LEFT_WIRE_X = WIRE_SPACING;
const RIGHT_WIRE_X = WIRE_SPACING * 2;
const WIRE_HEIGHT = BASE_SIZES.KEYBOARD_TOTAL_HEIGHT;

export const WIRE_CONFIGS: Record<WirePosition, WireConfig> = {
  left: {
    continuousPath: `M ${LEFT_WIRE_X} 0 L ${LEFT_WIRE_X} ${WIRE_HEIGHT * 0.15} Q ${LEFT_WIRE_X + 15} ${WIRE_HEIGHT * 0.3} ${LEFT_WIRE_X + 10} ${WIRE_HEIGHT * 0.4} Q ${LEFT_WIRE_X - 20} ${WIRE_HEIGHT * 0.55} ${LEFT_WIRE_X + 5} ${WIRE_HEIGHT * 0.7} Q ${LEFT_WIRE_X + 12} ${WIRE_HEIGHT * 0.85} ${LEFT_WIRE_X} ${WIRE_HEIGHT}`,
    cutPath1: `M ${LEFT_WIRE_X} 0 L ${LEFT_WIRE_X} ${WIRE_HEIGHT * 0.15} Q ${LEFT_WIRE_X + 15} ${WIRE_HEIGHT * 0.3} ${LEFT_WIRE_X + 10} ${WIRE_HEIGHT * 0.4} Q ${LEFT_WIRE_X} ${WIRE_HEIGHT * 0.48} ${LEFT_WIRE_X + 8} ${WIRE_HEIGHT * 0.52}`,
    cutPath2: `M ${LEFT_WIRE_X + 2} ${WIRE_HEIGHT * 0.6} Q ${LEFT_WIRE_X + 5} ${WIRE_HEIGHT * 0.65} ${LEFT_WIRE_X + 5} ${WIRE_HEIGHT * 0.7} Q ${LEFT_WIRE_X + 12} ${WIRE_HEIGHT * 0.85} ${LEFT_WIRE_X} ${WIRE_HEIGHT}`,
    cutCircle1: { cx: LEFT_WIRE_X + 8, cy: WIRE_HEIGHT * 0.52 },
    cutCircle2: { cx: LEFT_WIRE_X + 2, cy: WIRE_HEIGHT * 0.6 }
  },
  right: {
    continuousPath: `M ${RIGHT_WIRE_X} 0 L ${RIGHT_WIRE_X} ${WIRE_HEIGHT * 0.15} Q ${RIGHT_WIRE_X - 15} ${WIRE_HEIGHT * 0.3} ${RIGHT_WIRE_X - 10} ${WIRE_HEIGHT * 0.4} Q ${RIGHT_WIRE_X + 20} ${WIRE_HEIGHT * 0.55} ${RIGHT_WIRE_X - 5} ${WIRE_HEIGHT * 0.7} Q ${RIGHT_WIRE_X - 12} ${WIRE_HEIGHT * 0.85} ${RIGHT_WIRE_X} ${WIRE_HEIGHT}`,
    cutPath1: `M ${RIGHT_WIRE_X} 0 L ${RIGHT_WIRE_X} ${WIRE_HEIGHT * 0.15} Q ${RIGHT_WIRE_X - 15} ${WIRE_HEIGHT * 0.3} ${RIGHT_WIRE_X - 10} ${WIRE_HEIGHT * 0.4} Q ${RIGHT_WIRE_X} ${WIRE_HEIGHT * 0.48} ${RIGHT_WIRE_X - 8} ${WIRE_HEIGHT * 0.52}`,
    cutPath2: `M ${RIGHT_WIRE_X - 2} ${WIRE_HEIGHT * 0.6} Q ${RIGHT_WIRE_X - 5} ${WIRE_HEIGHT * 0.65} ${RIGHT_WIRE_X - 5} ${WIRE_HEIGHT * 0.7} Q ${RIGHT_WIRE_X - 12} ${WIRE_HEIGHT * 0.85} ${RIGHT_WIRE_X} ${WIRE_HEIGHT}`,
    cutCircle1: { cx: RIGHT_WIRE_X - 8, cy: WIRE_HEIGHT * 0.52 },
    cutCircle2: { cx: RIGHT_WIRE_X - 2, cy: WIRE_HEIGHT * 0.6 }
  }
};

const getWireColor = (position: WirePosition): string => 
  position === 'left' ? "#ff4444" : "#4488ff";

export const getGameWireStyle = (position: WirePosition) => ({
  stroke: getWireColor(position),
  strokeWidth: "12",
  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))"
});