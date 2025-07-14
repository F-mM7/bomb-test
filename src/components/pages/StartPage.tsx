import React, { useState } from "react";
import {
  startPageContainerStyle,
  titleStyle,
  contentBoxStyle,
  descriptionStyle,
  warningTextStyle,
  noteTextStyle,
  startButtonStyle,
  startButtonHoverStyle,
  timerWarningStyle,
} from "../../styles/components/startPage.styles";
import { GameStorage } from "../../features/game";
import "../../styles/global/startPage.css";

interface StartPageProps {
  onStart?: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleStart = () => {
    const time = new Date().toString();
    GameStorage.setStartTime(time);
    onStart?.();
  };

  const buttonStyle = {
    ...startButtonStyle,
    ...(isHovered ? startButtonHoverStyle : {}),
  };

  return (
    <div style={startPageContainerStyle}>
      <div style={contentBoxStyle}>
        <h1 style={titleStyle}>
          <span style={{ margin: "0 20px" }}>💣時限爆弾💣</span>
        </h1>

        <p style={descriptionStyle}>時限爆弾を解除しよう！</p>

        <p style={timerWarningStyle}>⏰ 制限時間は10分 ⏰</p>

        <p style={warningTextStyle}>
          最後に正しい線を切れば解除されるらしいが、
          <br />
          間違えると爆発するらしい……
        </p>

        <p style={warningTextStyle}>
          ⚠️ 爆弾だから、もちろん一度しか挑戦できないぞ！ ⚠️
        </p>

        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px",
          }}
        >
          <p style={noteTextStyle}>※ これは謎解きゲームです</p>
          <p style={noteTextStyle}>
            ※ ハックはお控えください。答えを見つけてしまったり、
            <br />
            複数回挑戦できてしまい、楽しさやスリルが損なわれてしまうと思います。
          </p>
        </div>

        <button
          onClick={handleStart}
          style={buttonStyle}
          className="start-page-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          🚨 START 🚨
        </button>
      </div>
    </div>
  );
};

export default StartPage;
