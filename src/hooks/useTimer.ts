import { useState, useEffect } from "react";
import { TOTAL_TIME } from "../constants/layout";
import { DISPLAY_CONSTANTS } from "../constants/display";
import { GameStorage } from "../services/gameStorage";

export const useTimer = () => {
  const [remaining, setRemaining] = useState<number>(TOTAL_TIME);

  useEffect(() => {
    const startTime = GameStorage.getStartTime();
    if (!startTime) return;
    
    const gameProgress = GameStorage.getGameProgress();
    if (gameProgress && (gameProgress.gameState === 'failed' || gameProgress.gameState === 'cleared')) {
      const finalTime = GameStorage.initializeFinalTime();
      if (finalTime) {
        setRemaining(finalTime);
        return;
      }
    }
    
    const startTimeMs = new Date(startTime).getTime();

    const updateRemaining = () => {
      const currentTimeMs = Date.now();
      const elapsedTimeMs = currentTimeMs - startTimeMs;
      const remainingTime = TOTAL_TIME - elapsedTimeMs;
      setRemaining(remainingTime > 0 ? remainingTime : 0);
    };

    updateRemaining();
    const timerId = setInterval(updateRemaining, DISPLAY_CONSTANTS.ANIMATION.TIMER_UPDATE_INTERVAL);
    return () => clearInterval(timerId);
  }, []);

  return remaining;
};