import { useState } from 'react';
import { GameStorage } from '../features/game';

export const useKeyboardState = () => {
  const [isKeyboardAttached, setIsKeyboardAttached] = useState<boolean>(() => {
    // ステージ4以降なら最初からキーボードを非表示
    const progress = GameStorage.getGameProgress();
    return !progress || progress.currentQuestion < 4;
  });

  return {
    isKeyboardAttached,
    setIsKeyboardAttached,
  };
};