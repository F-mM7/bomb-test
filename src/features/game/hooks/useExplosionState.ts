import { useState, useCallback } from 'react';
import { DISPLAY_CONSTANTS } from '../../display/constants';

export const useExplosionState = () => {
  const [showExplosion, setShowExplosion] = useState<boolean>(false);
  
  const triggerExplosion = useCallback((onComplete: () => void) => {
    setShowExplosion(true);
    
    setTimeout(() => {
      setShowExplosion(false);
      onComplete();
    }, DISPLAY_CONSTANTS.ANIMATION.EXPLOSION_DELAY);
  }, []);
  
  return {
    showExplosion,
    triggerExplosion
  };
};