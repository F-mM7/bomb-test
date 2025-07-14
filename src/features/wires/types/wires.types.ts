import type { WirePosition } from '../../../types/game/game.types';

export interface ExposedWiresProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut?: boolean;
  isRightCut?: boolean;
  disabled?: boolean;
}