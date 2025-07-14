import { useState } from 'react';
import { GameStorage } from '../features/game';

export const useKeyboardState = () => {
  const [isKeyboardAttached, setIsKeyboardAttached] = useState<boolean>(() => {
    // ステージ4に一度到達済みなら最初からキーボードを非表示
    return !GameStorage.getStage4Reached();
  });

  return {
    isKeyboardAttached,
    setIsKeyboardAttached,
  };
};