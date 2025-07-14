import { useState, useEffect } from 'react';
import { KEYBOARD_DETACHMENT_ANIMATION } from '../../../constants/animations';

export const useKeyboardDetachment = (currentQuestion: number, isKeyboardAttached: boolean, setIsKeyboardAttached: (attached: boolean) => void) => {
  const [isDetaching, setIsDetaching] = useState(false);

  useEffect(() => {
    if (currentQuestion === 4 && isKeyboardAttached) {
      setIsDetaching(true);
      
      const timer = setTimeout(() => {
        setIsKeyboardAttached(false);
        setIsDetaching(false);
      }, KEYBOARD_DETACHMENT_ANIMATION.TOTAL_DURATION);
      
      return () => clearTimeout(timer);
    }
  }, [currentQuestion, isKeyboardAttached, setIsKeyboardAttached]);

  return { isDetaching };
};