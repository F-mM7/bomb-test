export const TOTAL_TIME = 600000;

export const LAYOUT = {
  CONTAINER_WIDTH: 640,
  CONTAINER_PADDING: 12,
  CONTAINER_BORDER_RADIUS: 4,
  
  BUTTON_SIZE: 50,
  BUTTON_GAP: 6,
  
  KEYBOARD_ROWS: 5,
  KEYBOARD_COLUMNS: 10,
  
  // Scale constraints
  MIN_SCALE: 0.5,
  MAX_SCALE: 1.2,
  SCALE_RATIO: 0.9, // Use 90% of available space
  
  get KEYBOARD_CONTENT_HEIGHT() {
    return (this.KEYBOARD_ROWS * this.BUTTON_SIZE) + 
           ((this.KEYBOARD_ROWS - 1) * this.BUTTON_GAP);
  },
  
  get KEYBOARD_TOTAL_HEIGHT() {
    return this.KEYBOARD_CONTENT_HEIGHT + (this.CONTAINER_PADDING * 2);
  },
  
  get EXPOSED_WIRES_CONTENT_HEIGHT() {
    return this.KEYBOARD_CONTENT_HEIGHT;
  },
  
  get EXPOSED_WIRES_CONTENT_WIDTH() {
    return 396;
  }
} as const;