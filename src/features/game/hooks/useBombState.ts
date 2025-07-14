import { useCallback } from 'react';
import { useWireState } from '../../wires';
import { useInputState } from './useInputState';
import { useGameCompletionState } from './useGameCompletionState';
import { useKeyboardState } from '../../keyboard/hooks/useKeyboardState';

export const useBombState = () => {
  const wireState = useWireState();
  const inputState = useInputState();
  const completionState = useGameCompletionState();
  const keyboardState = useKeyboardState();

  const updateInput = useCallback((value: string | ((prev: string) => string)) => {
    inputState.updateInput(value, !completionState.isFailed);
  }, [completionState.isFailed, inputState]);

  return {
    // Game completion state
    ...completionState,
    
    // Wire state
    isRightCut: wireState.isRightCut,
    isLeftCut: wireState.isLeftCut,
    cutWire: wireState.cutWire,
    
    // Input state
    showCorrect: inputState.showCorrect,
    input: inputState.input,
    showCorrectAnswer: inputState.showCorrectAnswer,
    hideCorrectAnswer: inputState.hideCorrectAnswer,
    clearInput: inputState.clearInput,
    updateInput,
    
    // Keyboard state
    ...keyboardState,
  };
};