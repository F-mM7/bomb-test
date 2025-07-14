export const DISPLAY_CONSTANTS = {
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

  // Animation timings (non-timer related)
  ANIMATION: {
    EXPLOSION_DELAY: 500,
  },

  // Character conversion
  KANA_CONVERTER: {
    HIRAGANA_TO_KATAKANA_OFFSET: 0x60,
  },
} as const;
