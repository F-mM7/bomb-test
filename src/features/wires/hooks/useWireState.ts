import { useState, useCallback } from 'react';
import { GameStorage } from '../../../services/gameStorage';
import type { WirePosition } from '../../../types/game/game.types';

export const useWireState = () => {
  const [isRightCut, setIsRightCut] = useState<boolean>(() => GameStorage.getWireCutState('right'));
  const [isLeftCut, setIsLeftCut] = useState<boolean>(() => GameStorage.getWireCutState('left'));

  const cutWire = useCallback((wire: WirePosition) => {
    if (wire === 'left') {
      setIsLeftCut(true);
      GameStorage.setWireCutState('left', true);
    } else {
      setIsRightCut(true);
      GameStorage.setWireCutState('right', true);
    }
  }, []);

  return {
    isRightCut,
    isLeftCut,
    cutWire,
  };
};