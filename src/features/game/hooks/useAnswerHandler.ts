import { useCallback } from 'react';
import type { UseAnswerHandlerProps } from '../types/hooks.types';

export const useAnswerHandler = ({
  currentQuestion,
  currentQuestionData,
  input,
  isFailed,
  showCorrectAnswer,
  hideCorrectAnswer,
  clearInput,
  onQuestionComplete
}: UseAnswerHandlerProps) => {
  
  const handleSubmit = useCallback(() => {
    if (isFailed) return; // 失敗時は操作無効
    
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
    isFailed,
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