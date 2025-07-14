import { useState, useEffect } from 'react';
import { GameStorage } from '../features/game';

export const useKeyboardDetachment = (currentQuestion: number, isKeyboardAttached: boolean, setIsKeyboardAttached: (attached: boolean) => void) => {
  const [isDetaching, setIsDetaching] = useState(false);

  useEffect(() => {
    if (currentQuestion === 4 && isKeyboardAttached) {
      setIsDetaching(true);
      GameStorage.setStage4Reached(true);
      
      const timer = setTimeout(() => {
        setIsKeyboardAttached(false);
        setIsDetaching(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentQuestion, isKeyboardAttached, setIsKeyboardAttached]);

  return { isDetaching };
};