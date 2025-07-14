import React from "react";
import SvgWire from "./SvgWire";
import { scaleSize, BASE_SIZES } from "../../../utils/responsive";
import { Z_INDEX } from "../../../styles/constants/zIndex";

// ワイヤー生成関数
type WireSide = "top" | "left" | "right" | "bottom";

interface WireConfig {
  side: WireSide;
  startPos: number; // 0-1の範囲で辺上の位置を指定
  endPos: number; // 0-1の範囲で辺上の位置を指定
  color: string;
  detour?: number; // 迂回の深さ（省略時は自動計算）
}

const generateWirePath = (config: WireConfig): string => {
  const { side, startPos, endPos, detour } = config;

  // ビューボックス範囲 (920x1000)
  const deviceBounds = {
    left: 120,
    right: 800,
    top: 110,
    bottom: 890,
  };

  const defaultDetour = 80;
  const actualDetour = detour ?? defaultDetour;

  let startX: number, startY: number, endX: number, endY: number;
  let control1X: number,
    control1Y: number,
    control2X: number,
    control2Y: number;

  switch (side) {
    case "top":
      startX =
        deviceBounds.left + (deviceBounds.right - deviceBounds.left) * startPos;
      endX =
        deviceBounds.left + (deviceBounds.right - deviceBounds.left) * endPos;
      startY = endY = deviceBounds.top;
      control1X = startX;
      control1Y = deviceBounds.top - actualDetour;
      control2X = endX;
      control2Y = deviceBounds.top - actualDetour;
      break;

    case "bottom":
      startX =
        deviceBounds.left + (deviceBounds.right - deviceBounds.left) * startPos;
      endX =
        deviceBounds.left + (deviceBounds.right - deviceBounds.left) * endPos;
      startY = endY = deviceBounds.bottom;
      control1X = startX;
      control1Y = deviceBounds.bottom + actualDetour;
      control2X = endX;
      control2Y = deviceBounds.bottom + actualDetour;
      break;

    case "left":
      startY =
        deviceBounds.top + (deviceBounds.bottom - deviceBounds.top) * startPos;
      endY =
        deviceBounds.top + (deviceBounds.bottom - deviceBounds.top) * endPos;
      startX = endX = deviceBounds.left;
      control1X = deviceBounds.left - actualDetour;
      control1Y = startY;
      control2X = deviceBounds.left - actualDetour;
      control2Y = endY;
      break;

    case "right":
      startY =
        deviceBounds.top + (deviceBounds.bottom - deviceBounds.top) * startPos;
      endY =
        deviceBounds.top + (deviceBounds.bottom - deviceBounds.top) * endPos;
      startX = endX = deviceBounds.right;
      control1X = deviceBounds.right + actualDetour;
      control1Y = startY;
      control2X = deviceBounds.right + actualDetour;
      control2Y = endY;
      break;
  }

  return `M ${startX} ${startY} C ${control1X} ${control1Y} ${control2X} ${control2Y} ${endX} ${endY}`;
};

const WireLayer: React.FC = () => {
  // ワイヤー設定配列
  const wireConfigs: WireConfig[] = [
    { side: "top", startPos: 0.1, endPos: 0.6, color: "#0ff", detour: 50 },
    { side: "top", startPos: 0.7, endPos: 0.95, color: "#f0f", detour: 125 },
    { side: "left", startPos: 0.15, endPos: 0.35, color: "#ff0", detour: 120 },
    { side: "left", startPos: 0.25, endPos: 0.65, color: "#fff", detour: 80 },
    { side: "left", startPos: 0.55, endPos: 0.85, color: "#8f8", detour: 110 },
    { side: "right", startPos: 0.2, endPos: 0.45, color: "#f88", detour: 60 },
    { side: "right", startPos: 0.5, endPos: 0.55, color: "#80f", detour: 130 },
    { side: "right", startPos: 0.65, endPos: 0.9, color: "#8ff", detour: 110 },
    { side: "bottom", startPos: 0.25, endPos: 0.75, color: "#aaf", detour: 65 },
    {
      side: "bottom",
      startPos: 0.125,
      endPos: 0.375,
      color: "#8fa",
      detour: 50,
    },
  ];

  return (
    <svg
      viewBox="0 0 920 1000"
      style={{
        position: "absolute",
        top: scaleSize(-BASE_SIZES.WIRE_LAYER_OFFSET),
        left: scaleSize(-BASE_SIZES.WIRE_LAYER_OFFSET),
        width: `calc(100% + ${scaleSize(BASE_SIZES.WIRE_LAYER_OVERFLOW)})`,
        height: `calc(100% + ${scaleSize(BASE_SIZES.WIRE_LAYER_OVERFLOW)})`,
        pointerEvents: "none",
        zIndex: Z_INDEX.WIRE_LAYER,
      }}
    >
      {wireConfigs.map((config, index) => (
        <SvgWire
          key={index}
          d={generateWirePath(config)}
          stroke={config.color}
        />
      ))}
    </svg>
  );
};

export default WireLayer;
