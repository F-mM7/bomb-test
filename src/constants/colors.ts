export const COLORS = {
  primary: "#ff4444",
  primaryLight: "#ff5555",
  primaryDark: "#cc3333",
  warning: "#ffcc00",
  text: "#ffffff",
  textSecondary: "#e0e0e0",
  textMuted: "#888888",
  timerWarning: "#ff6666",
  black: "#000000",
  darkGray: "#1a1a1a",
  mediumGray: "#2a2a2a",
  pcbGreen: "#0d5d0d",
  inputRed: "#f00",
} as const;

export const GRADIENTS = {
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
  button: "linear-gradient(135deg, #ff4444 0%, #cc3333 50%, #ff4444 100%)",
  buttonHover: "linear-gradient(135deg, #ff5555 0%, #dd4444 50%, #ff5555 100%)",
  keyboard: "linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 50%, #1a1a1a 100%)",
  keyButton:
    "linear-gradient(to bottom, #f8f8f8 0%, #e8e8e8 50%, #d8d8d8 100%)",
  display: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #151515 100%)",
  exposedWires:
    "linear-gradient(145deg, #020202 0%, #080808 30%, #0f0f0f 70%, #050505 100%)",
  borderHorizontal:
    "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
  borderVertical:
    "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
} as const;

export const SHADOWS = {
  text: "0 0 20px rgba(255, 68, 68, 0.5)",
  textStrong: "0 0 30px rgba(255, 68, 68, 0.8)",
  button:
    "0 4px 16px rgba(255, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  buttonHover:
    "0 6px 20px rgba(255, 68, 68, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  contentBox:
    "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  timer: "0 0 10px rgba(255, 102, 102, 0.5)",
  keyboard:
    "0 4px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
  keyButton: "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",
  exposedWires:
    "inset 0 8px 16px rgba(0,0,0,0.98), inset 0 -3px 6px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.4)",
  pcb: "0 4px 8px rgba(0,0,0,0.6), inset 0 -2px 4px rgba(0,0,0,0.4)",
  screw: "inset 0 1px 2px rgba(0,0,0,0.4)",
  displayMount:
    "0 3px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
} as const;
