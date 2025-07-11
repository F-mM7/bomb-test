import React, { useEffect, useMemo } from "react";
import Device from "../game/Device";
import { containerStyle, bombBodyStyle } from "../../styles";
import { useTimer } from "../../hooks/useTimer";
import { useGameState } from "../../hooks/useGameState";
import { useBombState } from "../../hooks/useBombState";
import { useWireHandler } from "../../hooks/useWireHandler";
import { useAnswerHandler } from "../../hooks/useAnswerHandler";
import { questionBitmaps } from "../../data/questions";
import "../../styles/global/explosion.css";

const MainPage: React.FC = () => {
  const remaining = useTimer();
  const gameState = useGameState();
  const bombState = useBombState();
  const questions = useMemo(() => questionBitmaps.map(bitmap => ({
    id: bitmap.id,
    text: "",
    answer: bitmap.answer
  })), []);
  
  const currentQuestionData = useMemo(() => 
    questions.find(question => question.id === gameState.currentQuestion), 
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
    onGameClear: gameState.clearGame
  });

  const answerHandler = useAnswerHandler({
    currentQuestion: gameState.currentQuestion,
    currentQuestionData,
    input: bombState.input,
    isFailed: bombState.isFailed,
    showCorrectAnswer: bombState.showCorrectAnswer,
    hideCorrectAnswer: bombState.hideCorrectAnswer,
    clearInput: bombState.clearInput,
    onQuestionComplete: gameState.nextQuestion
  });

  useEffect(() => {
    if (gameState.currentQuestion === 4) {
      bombState.setIsKeyboardAttached(false);
    }
    if (remaining <= 0 && !bombState.isCleared && !bombState.isFailed) {
      bombState.markAsFailed(remaining);
    }
  }, [gameState.currentQuestion, remaining, bombState]);

  return (
    <div style={containerStyle}>
      <div style={bombBodyStyle} className={bombState.isFailed && !bombState.showExplosion ? 'burned-bomb' : ''}>
        <Device
          isKeyboardAttached={bombState.isKeyboardAttached}
          input={bombState.input}
          remaining={bombState.displayTime ?? remaining}
          setInput={bombState.updateInput}
          onWireClick={wireHandler.handleWireClick}
          onSubmit={answerHandler.handleSubmit}
          currentQuestion={currentQuestionData}
          showCorrect={bombState.showCorrect}
          isCleared={bombState.isCleared}
          isPaused={bombState.isPaused}
          isRightCut={bombState.isRightCut}
          isLeftCut={bombState.isLeftCut}
          isFailed={bombState.isFailed}
        />
      </div>
      
      {bombState.showExplosion && <div className="explosion-overlay" />}
    </div>
  );
};

export default MainPage;
