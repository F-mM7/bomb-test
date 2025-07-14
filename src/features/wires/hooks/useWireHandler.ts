import { useCallback } from 'react';
import type { UseWireHandlerProps, WirePosition } from '../../../types/game';

export const useWireHandler = ({
  currentQuestion,
  isCleared,
  isFailed,
  isRightCut,
  isLeftCut,
  remaining,
  cutWire,
  markAsCleared,
  markAsFailed,
  onGameClear
}: UseWireHandlerProps) => {
  
  const handleLeftWireCut = useCallback(() => {
    cutWire('left');
    
    if (!isCleared && !isFailed) {
      markAsCleared(remaining, onGameClear);
    }
  }, [isCleared, isFailed, remaining, cutWire, markAsCleared, onGameClear]);
  
  const handleRightWireCut = useCallback(() => {
    cutWire('right');
    
    if (!isCleared && !isFailed) {
      markAsFailed(remaining);
    }
  }, [isCleared, isFailed, remaining, cutWire, markAsFailed]);
  
  const handleWireClick = useCallback((wire: WirePosition) => {
    if (currentQuestion !== 4) return;
    
    const isWireCut = wire === 'left' ? isLeftCut : isRightCut;
    if (isWireCut) return;
    
    if (wire === 'left') {
      handleLeftWireCut();
    } else {
      handleRightWireCut();
    }
  }, [
    currentQuestion,
    isRightCut,
    isLeftCut,
    handleLeftWireCut,
    handleRightWireCut
  ]);

  return {
    handleWireClick
  };
};