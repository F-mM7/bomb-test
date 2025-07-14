import { useState, useCallback } from 'react';

export const useInputState = () => {
  const [input, setInput] = useState<string>("");
  const [showCorrect, setShowCorrect] = useState<boolean>(false);
  
  const updateInput = useCallback((value: string | ((prev: string) => string), canUpdate: boolean = true) => {
    if (!canUpdate) return;
    
    if (typeof value === 'function') {
      setInput(prev => value(prev));
    } else {
      setInput(value);
    }
  }, []);
  
  const clearInput = useCallback(() => {
    setInput("");
  }, []);
  
  const showCorrectAnswer = useCallback(() => {
    setShowCorrect(true);
  }, []);
  
  const hideCorrectAnswer = useCallback(() => {
    setShowCorrect(false);
  }, []);
  
  return {
    input,
    showCorrect,
    updateInput,
    clearInput,
    showCorrectAnswer,
    hideCorrectAnswer
  };
};