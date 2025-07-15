// キーボード分離アニメーションのタイミング定数
export const KEYBOARD_DETACHMENT_ANIMATION = {
  MOVE_DURATION: 100,
  SETTLE_DURATION: 800,
  FADE_DURATION: 400,

  get TOTAL_DURATION() {
    return this.MOVE_DURATION + this.SETTLE_DURATION + this.FADE_DURATION;
  },
} as const;
