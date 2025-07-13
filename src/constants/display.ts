export const DISPLAY_CONSTANTS = {
  // Timer display
  TIMER: {
    TOTAL_TIME: 600000,
    DIGIT_WIDTH_WITH_SPACING: 4,
    MILLISECONDS_PER_SECOND: 1000,
    SECONDS_PER_MINUTE: 60,
    CURSOR_BLINK_THRESHOLD: 440,
    POSITION: {
      X: 0,
      Y: 0,
      SPACING: 2,
      COLON_OFFSET: 8,
      LABEL_OFFSET: 3,
    },
  },

  // Input display
  INPUT: {
    LABEL_START_X: 27,
    LABEL_START_Y: 0,
    KATAKANA_START_X: 4,
    TEXT_SPACING: 4,
    CURSOR_WIDTH: 2,
    CURSOR_HEIGHT: 6,
    CURSOR_Y_OFFSET: 5,
  },

  // Question display
  QUESTION: {
    START_X: 0,
    START_Y: 6,
  },

  // Circle renderer
  CIRCLE: {
    RADIUS: 20,
    OUTER_BORDER_THICKNESS: 3,
    MIDDLE_RING_THICKNESS: 3,
    INNER_RING_THICKNESS: 3,
    BORDER_OFFSET: 0.5,
  },

  // Animation timings
  ANIMATION: {
    TIMER_UPDATE_INTERVAL: 10,
    EXPLOSION_DELAY: 500,
  },

  // Character conversion
  KANA_CONVERTER: {
    HIRAGANA_TO_KATAKANA_OFFSET: 0x60,
  },
} as const;
