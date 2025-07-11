import { useState, useCallback } from 'react';
import { GameStorage } from '../services/gameStorage';
import type { GameState, GameProgress } from '../types/game/game.types';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const progress = GameStorage.getGameProgress();
    return progress?.gameState || 'start';
  });

  const [currentQuestion, setCurrentQuestion] = useState<number>(() => {
    const progress = GameStorage.getGameProgress();
    return progress?.currentQuestion || 1;
  });

  const saveProgress = useCallback((state: GameState, question: number) => {
    const progress: GameProgress = {
      currentQuestion: question,
      gameState: state,
      startTime: GameStorage.getStartTime() || new Date().toString()
    };
    GameStorage.saveGameProgress(progress);
    setGameState(state);
    setCurrentQuestion(question);
  }, []);

  const startGame = useCallback(() => {
    const startTime = new Date().toString();
    GameStorage.setStartTime(startTime);
    saveProgress('playing', 1);
  }, [saveProgress]);

  const nextQuestion = useCallback(() => {
    const next = currentQuestion + 1;
    saveProgress('playing', next);
  }, [currentQuestion, saveProgress]);

  const clearGame = useCallback(() => {
    saveProgress('cleared', currentQuestion);
  }, [currentQuestion, saveProgress]);

  const failGame = useCallback(() => {
    saveProgress('failed', currentQuestion);
  }, [currentQuestion, saveProgress]);

  return {
    gameState,
    currentQuestion,
    startGame,
    nextQuestion,
    clearGame,
    failGame,
    saveProgress
  };
};