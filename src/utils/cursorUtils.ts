import { DISPLAY_CONSTANTS } from "../constants/display";

export function shouldShowCursor(
  isPaused: boolean,
  remaining: number
): boolean {
  if (isPaused) {
    return true;
  }
  
  const { WARNING_TIME_THRESHOLD } = DISPLAY_CONSTANTS.TIMER;
  const { CURSOR_BLINK_THRESHOLD, MILLISECONDS_PER_SECOND } = DISPLAY_CONSTANTS.TIMER;
  
  return (
    remaining >= WARNING_TIME_THRESHOLD ||
    remaining <= 0 ||
    remaining % MILLISECONDS_PER_SECOND >= CURSOR_BLINK_THRESHOLD
  );
}