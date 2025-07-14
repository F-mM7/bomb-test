import { useState, useCallback } from 'react';
import { GameStorage } from '../services/gameStorage';
import { useExplosionState } from './useExplosionState';

export const useGameCompletionState = () => {
  const explosionState = useExplosionState();
  
  const [isCleared, setIsCleared] = useState<boolean>(() => 
    GameStorage.initializeBooleanFromGameState('cleared')
  );
  const [isFailed, setIsFailed] = useState<boolean>(() => 
    GameStorage.initializeBooleanFromGameState('failed')
  );
  const [finalTime, setFinalTime] = useState<number | null>(() => 
    GameStorage.initializeFinalTime()
  );

  const markAsCleared = useCallback((remaining: number, onGameClear: () => void) => {
    setIsCleared(true);
    setFinalTime(remaining);
    GameStorage.setWireCutState('left', true);
    GameStorage.setFinalTime(remaining);
    GameStorage.saveGameProgressWithCurrentQuestion(4, 'cleared');
    
    onGameClear();
  }, []);

  const markAsFailed = useCallback((remaining: number) => {
    if (!isFailed) {
      explosionState.triggerExplosion(() => {
        setIsFailed(true);
        setFinalTime(remaining);
        
        const currentProgress = GameStorage.getGameProgress();
        const currentQuestion = currentProgress ? currentProgress.currentQuestion : 4;
        
        GameStorage.setFinalTime(remaining);
        GameStorage.saveGameProgressWithCurrentQuestion(currentQuestion, 'failed');
      });
    }
  }, [isFailed, explosionState]);

  return {
    isCleared,
    isFailed,
    finalTime,
    showExplosion: explosionState.showExplosion,
    markAsCleared,
    markAsFailed,
    isPaused: isCleared || isFailed,
    displayTime: finalTime,
  };
};