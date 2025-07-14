import { useMemo } from 'react';
import { useTimer } from '../features/timer';
import { useGameState } from '../features/game';
import { useBombState } from './useBombState';
import { useWireHandler } from '../features/wires';
import { useAnswerHandler } from './useAnswerHandler';
import { questionBitmaps } from '../data/questions';

export const useGameOrchestration = () => {
  const remaining = useTimer();
  const gameState = useGameState();
  const bombState = useBombState();

  const questions = useMemo(
    () =>
      questionBitmaps.map((bitmap) => ({
        id: bitmap.id,
        text: "",
        answer: bitmap.answer,
      })),
    []
  );

  const currentQuestionData = useMemo(
    () =>
      questions.find((question) => question.id === gameState.currentQuestion),
    [questions, gameState.currentQuestion]
  );

  const wireHandler = useWireHandler({
    currentQuestion: gameState.currentQuestion,
    isCleared: bombState.isCleared,
    isFailed: bombState.isFailed,
    isRightCut: bombState.isRightCut,
    isLeftCut: bombState.isLeftCut,
    remaining,
    cutWire: bombState.cutWire,
    markAsCleared: bombState.markAsCleared,
    markAsFailed: bombState.markAsFailed,
    onGameClear: gameState.clearGame,
  });

  const answerHandler = useAnswerHandler({
    currentQuestion: gameState.currentQuestion,
    currentQuestionData,
    input: bombState.input,
    isFailed: bombState.isFailed,
    showCorrectAnswer: bombState.showCorrectAnswer,
    hideCorrectAnswer: bombState.hideCorrectAnswer,
    clearInput: bombState.clearInput,
    onQuestionComplete: gameState.nextQuestion,
  });

  return {
    // Timer
    remaining,
    
    // Game state
    gameState,
    bombState,
    currentQuestionData,
    
    // Handlers
    wireHandler,
    answerHandler,
  };
};