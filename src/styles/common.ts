import { scaleSize, BASE_SIZES } from "../utils/responsive";

// よく使用される共通スタイルパターン
export const commonPatterns = {
  // フレックスボックスによる縦方向センタリング
  flexCenterColumn: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },

  // 基本コンテナスタイル
  baseContainer: {
    padding: scaleSize(BASE_SIZES.KEYBOARD_PADDING),
    borderRadius: scaleSize(BASE_SIZES.KEYBOARD_BORDER_RADIUS),
    position: "relative" as const,
  },
};
