import { useCallback } from 'react';
import type { UseAnswerHandlerProps } from '../types/hooks.types';
import { gameStateHelper } from '../utils/gameStateHelper';

export const useAnswerHandler = ({
  currentQuestion,
  currentQuestionData,
  input,
  gameState,
  showCorrectAnswer,
  hideCorrectAnswer,
  clearInput,
  onQuestionComplete
}: UseAnswerHandlerProps) => {
  
  const handleSubmit = useCallback(() => {
    if (!gameStateHelper.canPerformAction(gameState)) return;
    
    if (currentQuestionData && input.trim() === currentQuestionData.answer) {
      showCorrectAnswer();
      setTimeout(() => {
        if (currentQuestion < 4) {
          onQuestionComplete();
          clearInput();
          hideCorrectAnswer();
        }
      }, 500);
    }
  }, [
    gameState,
    currentQuestionData,
    input,
    currentQuestion,
    showCorrectAnswer,
    hideCorrectAnswer,
    clearInput,
    onQuestionComplete
  ]);

  return {
    handleSubmit
  };
};