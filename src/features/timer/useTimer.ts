import { useState, useEffect } from "react";
import { TIMER_CONSTANTS } from "./constants";
import { GameStorage } from "../../services/gameStorage";

export const useTimer = () => {
  const [remaining, setRemaining] = useState<number>(TIMER_CONSTANTS.TOTAL_TIME);

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
      const remainingTime = TIMER_CONSTANTS.TOTAL_TIME - elapsedTimeMs;
      setRemaining(remainingTime > 0 ? remainingTime : 0);
    };

    updateRemaining();
    const timerId = setInterval(updateRemaining, TIMER_CONSTANTS.UPDATE_INTERVAL);
    return () => clearInterval(timerId);
  }, []);

  return remaining;
};