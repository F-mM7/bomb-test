import React, { useState } from "react";
import { Z_INDEX } from "../../../styles/constants/zIndex";

interface TweetButtonProps {
  isCleared: boolean;
  isFailed: boolean;
  remaining: number;
  style?: React.CSSProperties;
}

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TweetButton: React.FC<TweetButtonProps> = ({
  isCleared,
  isFailed,
  remaining,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTweet = () => {
    const gameUrl = "https://example.com"; // TODO: 実際のゲームURLに置き換える
    const remainingSeconds = Math.floor(remaining / 1000);
    const resultText = isCleared
      ? `${remainingSeconds}秒残して時限爆弾の解除に成功した！\n${gameUrl}`
      : `時限爆弾が爆発してしまった...\n${gameUrl}`;

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      resultText
    )}`;

    window.open(tweetUrl, "_blank");
  };

  if (!isCleared && !isFailed) {
    return null;
  }

  return (
    <button
      onClick={handleTweet}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
        transform: `${style?.transform || ""} scale(${
          isHovered ? 1.05 : 1
        })`.trim(),
        zIndex: Z_INDEX.TWEET_BUTTON,
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "none",
        borderRadius: `calc(16px * var(--global-scale, 1))`,
        padding: `calc(20px * var(--global-scale, 1)) calc(40px * var(--global-scale, 1))`,
        fontSize: `calc(14px * var(--global-scale, 1))`,
        fontWeight: "700",
        cursor: "pointer",
        boxShadow: isHovered
          ? "0 12px 32px rgba(102, 126, 234, 0.4), 0 4px 16px rgba(102, 126, 234, 0.2)"
          : "0 8px 24px rgba(245, 87, 108, 0.3), 0 3px 12px rgba(245, 87, 108, 0.15)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        display: "flex",
        alignItems: "center",
        gap: `calc(12px * var(--global-scale, 1))`,
        background: isHovered
          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        outline: "none",
      }}
    >
      <XIcon />
      結果をポスト
    </button>
  );
};

export default TweetButton;
