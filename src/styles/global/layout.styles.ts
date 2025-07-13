import { scaleSize, BASE_SIZES } from "../../utils/responsive";

export const containerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: "100vh",
  padding: scaleSize(BASE_SIZES.GLOBAL_CONTAINER_PADDING),
  gap: scaleSize(BASE_SIZES.SPACING_LG),
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box" as const,
};

export const bombBodyStyle = {
  borderRadius: scaleSize(BASE_SIZES.SPACING_MD),
  padding: scaleSize(BASE_SIZES.BOMB_BODY_PADDING),
  background: "linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 50%, #4a4a4a 100%)",
  width: scaleSize(BASE_SIZES.BOMB_BODY_WIDTH),
  boxShadow:
    "0 8px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)",
  textAlign: "center" as const,
  position: "relative" as const,
  overflow: "visible" as const,
  boxSizing: "border-box" as const,
};
