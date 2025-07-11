import { useState, useCallback } from 'react';
import { useWireState } from './useWireState';
import { useExplosionState } from './useExplosionState';
import { useInputState } from './useInputState';
import { GameStorage } from '../services/gameStorage';

export const useBombState = () => {
  const wireState = useWireState();
  const explosionState = useExplosionState();
  const inputState = useInputState();
  
  const [isCleared, setIsCleared] = useState<boolean>(() => GameStorage.initializeBooleanFromGameState('cleared'));
  const [isFailed, setIsFailed] = useState<boolean>(() => GameStorage.initializeBooleanFromGameState('failed'));
  const [finalTime, setFinalTime] = useState<number | null>(() => GameStorage.initializeFinalTime());
  const [isKeyboardAttached, setIsKeyboardAttached] = useState<boolean>(true);
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

  const updateInput = useCallback((value: string | ((prev: string) => string)) => {
    inputState.updateInput(value, !isFailed);
  }, [isFailed, inputState]);

  return {
    isCleared,
    isFailed,
    finalTime,
    isRightCut: wireState.isRightCut,
    isLeftCut: wireState.isLeftCut,
    showExplosion: explosionState.showExplosion,
    showCorrect: inputState.showCorrect,
    input: inputState.input,
    isKeyboardAttached,
    markAsCleared,
    markAsFailed,
    cutWire: wireState.cutWire,
    showCorrectAnswer: inputState.showCorrectAnswer,
    hideCorrectAnswer: inputState.hideCorrectAnswer,
    clearInput: inputState.clearInput,
    updateInput,
    setIsKeyboardAttached,
    isPaused: isCleared || isFailed,
    displayTime: finalTime
  };
};