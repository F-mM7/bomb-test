import { useState, useCallback } from 'react';
import { GameStorage } from '../services/gameStorage';
import type { GameProgress } from '../types/game.types';

/**
 * GameStorageを使用した状態管理の共通フック
 */
export const useGameStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    const progress = GameStorage.getGameProgress();
    return (progress as unknown as Record<string, unknown>)?.[key] as T ?? initialValue;
  });

  const updateState = useCallback((newValue: T) => {
    setState(newValue);
    const progress = GameStorage.getGameProgress() || {
      currentQuestion: 1,
      gameState: 'start' as const,
      startTime: new Date().toString()
    } as GameProgress;
    GameStorage.saveGameProgress({
      ...progress,
      [key]: newValue,
    });
  }, [key]);

  return [state, updateState] as const;
};