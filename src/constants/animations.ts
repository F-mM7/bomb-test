// キーボード分離アニメーションのタイミング定数
export const KEYBOARD_DETACHMENT_ANIMATION = {
  MOVE_DURATION: 300,
  SETTLE_DURATION: 500,
  FADE_DURATION: 500,

  get TOTAL_DURATION() {
    return this.MOVE_DURATION + this.SETTLE_DURATION + this.FADE_DURATION;
  },
} as const;
