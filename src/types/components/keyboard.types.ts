import type { MarkType } from '../data/font.types';

export interface KeyboardProps {
  setInput: (value: string | ((prev: string) => string)) => void;
  onEnter?: () => void;
  disabled?: boolean;
}

export interface KeyboardButtonProps {
  content: string;
  onClick: () => void;
  style: React.CSSProperties;
  disabled?: boolean;
}

export interface MarkMapping {
  mark: MarkType;
  map: Record<string, string>;
}