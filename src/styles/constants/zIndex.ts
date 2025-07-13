export const Z_INDEX = {
  // 基本レイヤー（0-10）
  WIRE_LAYER: 0,
  DEVICE_BASE: 1,
  WIRE_CONTAINER: 10,

  // 特殊エフェクト（1000-1999）
  BURNED_MASK: 1000,
  EXPLOSION_OVERLAY: 1001,
  FAILURE_MESSAGE: 1002,

  // 最優先UI（2000-）
  TWEET_BUTTON: 2000,
} as const;

// CSS custom propertiesとして使用するための値を生成
export const Z_INDEX_CSS_VARS = Object.entries(Z_INDEX).reduce((acc, [key, value]) => {
  const cssVarName = `--z-${key.toLowerCase().replace(/_/g, '-')}`;
  acc[cssVarName] = value.toString();
  return acc;
}, {} as Record<string, string>);
