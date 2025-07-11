import { COLORS, GRADIENTS, SHADOWS } from '../constants/colors';

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
  fontSize: "4rem",
  fontWeight: "bold" as const,
  margin: "0 0 30px 0",
  color: COLORS.primary,
  textShadow: SHADOWS.text,
  textAlign: "center" as const,
  width: "100%",
  whiteSpace: "nowrap" as const,
  lineHeight: "1",
};

export const contentBoxStyle = {
  maxWidth: "600px",
  background: "rgba(0, 0, 0, 0.7)",
  borderRadius: "16px",
  padding: "40px",
  boxShadow: SHADOWS.contentBox,
  border: `1px solid rgba(255, 68, 68, 0.3)`,
  backdropFilter: "blur(10px)",
  width: "100%",
  boxSizing: "border-box" as const,
  margin: "0 auto",
};

export const descriptionStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.8",
  marginBottom: "16px",
  color: COLORS.textSecondary,
};

export const warningTextStyle = {
  fontSize: "1rem",
  lineHeight: "1.6",
  marginBottom: "12px",
  color: COLORS.warning,
  fontWeight: "500" as const,
};

export const noteTextStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.5",
  marginBottom: "12px",
  color: COLORS.textMuted,
  fontStyle: "italic" as const,
};

export const startButtonStyle = {
  fontSize: "2rem",
  fontWeight: "bold" as const,
  padding: "16px 48px",
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
  fontSize: "1.1rem",
  color: COLORS.timerWarning,
  fontWeight: "bold" as const,
  marginBottom: "16px",
  textShadow: SHADOWS.timer,
};
