import type { FC } from "react";
import KeyboardButton from "./KeyboardButton";
import { actionRowStyle, actionButtonStyle } from "../styles";
import { BASE_SIZES, scaleSize } from "../../../utils/responsive";

interface ActionKeysProps {
  onBackspace: () => void;
  onClear: () => void;
  onEnter?: () => void;
  disabled?: boolean;
}

const ActionKeys: FC<ActionKeysProps> = ({
  onBackspace,
  onClear,
  onEnter,
  disabled = false,
}) => {
  const actionButtons = [
    { label: "消去", onClick: onBackspace },
    { label: "全消", onClick: onClear },
    { label: "送信", onClick: disabled ? undefined : onEnter },
  ];

  const totalCols = BASE_SIZES.KEYBOARD_COLS; // 11
  const actionButtonWidth = 2; // 各アクションボタンの列数
  const usedCols = actionButtons.length * actionButtonWidth; // 6列使用
  const emptySpaceCount = totalCols - usedCols; // 5列の空スペース

  return (
    <div style={actionRowStyle}>
      {/* 左側の空スペース（透明要素） - 5列分 */}
      {Array(emptySpaceCount)
        .fill(null)
        .map((_, index) => (
          <div
            key={`empty-${index}`}
            style={{
              width: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_SIZE),
              height: scaleSize(BASE_SIZES.KEYBOARD_BUTTON_SIZE),
              visibility: "hidden",
            }}
          />
        ))}

      {/* アクションボタン（2列分の幅） */}
      {actionButtons.map(({ label, onClick }) => (
        <KeyboardButton
          key={label}
          content={label}
          onClick={onClick || (() => {})}
          style={{
            ...actionButtonStyle,
            gridColumn: "span 2", // 2列分の幅を指定
          }}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default ActionKeys;
