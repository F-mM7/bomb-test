export const containerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: "100vh",
  padding: "10px",
  gap: "16px",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box" as const,
};

export const bombBodyStyle = {
  borderRadius: "12px",
  padding: "clamp(15px, 3vw, 30px)",
  background: "linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 50%, #4a4a4a 100%)",
  width: "min(720px, 95vw)",
  maxWidth: "100%",
  boxShadow:
    "0 8px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)",
  textAlign: "center" as const,
  position: "relative" as const,
  overflow: "visible" as const,
  boxSizing: "border-box" as const,
};
