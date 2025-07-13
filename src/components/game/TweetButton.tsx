import React, { useState } from "react";
import { scaleSize } from "../../utils/responsive";
import { Z_INDEX } from "../../styles/constants/zIndex";

interface TweetButtonProps {
  isCleared: boolean;
  isFailed: boolean;
  remaining: number;
  style?: React.CSSProperties;
}

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TweetButton: React.FC<TweetButtonProps> = ({ isCleared, isFailed, remaining, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTweet = () => {
    const baseText = "爆弾解除ゲームをプレイしました！";
    const resultText = isCleared 
      ? `クリア！残り時間: ${remaining}秒` 
      : "失敗...";
    const hashtags = "爆弾解除ゲーム,ブラウザゲーム";
    
    const tweetText = `${baseText} ${resultText}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&hashtags=${encodeURIComponent(hashtags)}`;
    
    window.open(tweetUrl, '_blank');
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
        transform: `${style?.transform || ''} scale(${isHovered ? 1.05 : 1})`.trim(),
        zIndex: Z_INDEX.TWEET_BUTTON,
        backgroundColor: '#ffffff',
        color: '#000000',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: scaleSize(12),
        padding: `${scaleSize(12)}px ${scaleSize(20)}px`,
        fontSize: scaleSize(14),
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: isHovered 
          ? '0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)' 
          : '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: scaleSize(8),
        background: isHovered 
          ? '#f8f9fa' 
          : '#ffffff',
        outline: 'none',
      }}
    >
      <XIcon />
      結果をポスト
    </button>
  );
};

export default TweetButton;