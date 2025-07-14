import { COLORS, GRADIENTS, SHADOWS } from "../../../constants/colors";

export const startPageContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: "100vh",
  padding: "40px 20px",
  textAlign: "center" as const,
  background: GRADIENTS.background,
  color: COLORS.text,
};

export const titleStyle = {
  fontSize: "clamp(2rem, 8vw, 4rem)",
  fontWeight: "bold" as const,
  margin: "0 0 30px 0",
  color: COLORS.primary,
  textShadow: SHADOWS.text,
  textAlign: "center" as const,
  width: "100%",
  whiteSpace: "normal" as const,
  lineHeight: "1.2",
};

export const contentBoxStyle = {
  maxWidth: "600px",
  background: "rgba(0, 0, 0, 0.7)",
  borderRadius: "16px",
  padding: "clamp(20px, 5vw, 40px)",
  boxShadow: SHADOWS.contentBox,
  border: `1px solid rgba(255, 68, 68, 0.3)`,
  backdropFilter: "blur(10px)",
  width: "calc(100% - 40px)",
  boxSizing: "border-box" as const,
  margin: "0 auto",
};

export const descriptionStyle = {
  fontSize: "clamp(1rem, 3vw, 1.2rem)",
  lineHeight: "1.8",
  marginBottom: "16px",
  color: COLORS.textSecondary,
};

export const warningTextStyle = {
  fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
  lineHeight: "1.6",
  marginBottom: "12px",
  color: COLORS.warning,
  fontWeight: "500" as const,
};

export const noteTextStyle = {
  fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
  lineHeight: "1.5",
  marginBottom: "12px",
  color: COLORS.textMuted,
  fontStyle: "italic" as const,
};

export const startButtonStyle = {
  fontSize: "clamp(1.2rem, 4vw, 2rem)",
  fontWeight: "bold" as const,
  padding: "clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)",
  marginTop: "30px",
  background: GRADIENTS.button,
  color: COLORS.text,
  border: "none",
  borderRadius: "12px",
  cursor: "pointer" as const,
  boxShadow: SHADOWS.button,
  transition: "all 0.3s ease",
  textTransform: "uppercase" as const,
  letterSpacing: "2px",
};

export const startButtonHoverStyle = {
  transform: "translateY(-2px)",
  boxShadow: SHADOWS.buttonHover,
  background: GRADIENTS.buttonHover,
};

export const timerWarningStyle = {
  fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
  color: COLORS.timerWarning,
  fontWeight: "bold" as const,
  marginBottom: "16px",
  textShadow: SHADOWS.timer,
};
