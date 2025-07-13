import React, { useEffect, useMemo, useRef } from "react";
import Device from "../game/Device";
import TweetButton from "../game/TweetButton";
import { containerStyle, bombBodyStyle } from "../../styles";
import { useTimer } from "../../hooks/useTimer";
import { useGameState } from "../../hooks/useGameState";
import { useBombState } from "../../hooks/useBombState";
import { useWireHandler } from "../../hooks/useWireHandler";
import { useAnswerHandler } from "../../hooks/useAnswerHandler";
import { questionBitmaps } from "../../data/questions";
import {
  calculateGlobalScale,
  setGlobalScale,
  setZIndexVariables,
  BASE_SIZES,
} from "../../utils/responsive";
import "../../styles/global/explosion.css";

const MainPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // グローバルスケール計算とセット
  useEffect(() => {
    // z-index CSS変数を初期化時に注入
    setZIndexVariables();

    const updateScale = () => {
      if (!containerRef.current) return;

      // 利用可能なスペースを計算
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      // スケールを計算してグローバルに設定
      const scale = calculateGlobalScale(containerWidth, containerHeight);

      setGlobalScale(scale, containerRef.current);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (gameState.currentQuestion === 4) {
      bombState.setIsKeyboardAttached(false);
    }
    if (remaining <= 0 && !bombState.isCleared && !bombState.isFailed) {
      bombState.markAsFailed(remaining);
    }
  }, [gameState.currentQuestion, remaining, bombState]);

  return (
    <div ref={containerRef} style={containerStyle}>
      <div
        style={bombBodyStyle}
        className={
          bombState.isFailed && !bombState.showExplosion ? "burned-bomb" : ""
        }
      >
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

      <TweetButton
        isCleared={bombState.isCleared || false}
        isFailed={bombState.isFailed || false}
        remaining={bombState.displayTime ?? remaining}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default MainPage;
