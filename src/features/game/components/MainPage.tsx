import React, { useEffect } from "react";
import { Device, TweetButton } from "../index";
import { containerStyle, bombBodyStyle } from "../styles";
import { useGameOrchestration } from "../hooks/useGameOrchestration";
import { useResponsiveSetup } from "../../../utils/useResponsiveSetup";
import { useKeyboardDetachment } from "../../keyboard/hooks/useKeyboardDetachment";
import "../styles/explosion.css";
import { WireLayer } from "../../wire-decoration";

const MainPage: React.FC = () => {
  const { containerRef } = useResponsiveSetup();
  const {
    remaining,
    gameState,
    bombState,
    currentQuestionData,
    wireHandler,
    answerHandler,
  } = useGameOrchestration();
  const { isDetaching } = useKeyboardDetachment(
    gameState.currentQuestion,
    bombState.isKeyboardAttached,
    bombState.setIsKeyboardAttached
  );

  // Timer expiration handling
  useEffect(() => {
    if (remaining <= 0 && !bombState.isCleared && !bombState.isFailed) {
      bombState.markAsFailed(remaining);
    }
  }, [remaining, bombState]);

  return (
    <div ref={containerRef} style={containerStyle}>
      <div
        style={bombBodyStyle}
        className={
          bombState.isFailed && !bombState.showExplosion ? "burned-bomb" : ""
        }
      >
        <WireLayer />
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
          isDetaching={isDetaching}
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
