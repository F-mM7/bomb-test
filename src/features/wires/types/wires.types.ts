import type { WirePosition } from '../../game/types/game.types';

export interface ExposedWiresProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut?: boolean;
  isRightCut?: boolean;
}