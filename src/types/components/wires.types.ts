import type { WirePosition } from '../game/game.types';

export interface ExposedWiresProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut?: boolean;
  isRightCut?: boolean;
  disabled?: boolean;
}

export interface WireConfig {
  continuousPath: string;
  cutPath1: string;
  cutPath2: string;
  cutCircle1: { cx: number; cy: number };
  cutCircle2: { cx: number; cy: number };
}