export const containerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: "100vh",
  padding: "20px",
  gap: "16px",
};

export const bombBodyStyle = {
  borderRadius: "12px",
  padding: "30px",
  background: "linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 50%, #4a4a4a 100%)",
  width: "720px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)",
  textAlign: "center" as const,
  position: "relative" as const,
  overflow: "visible" as const,
};