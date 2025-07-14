import { DISPLAY_CONSTANTS } from "../constants";

const SMALL_LETTER_MAP: Readonly<Record<string, string>> = {
  'ぁ': 'ァ', 'ぃ': 'ィ', 'ぅ': 'ゥ', 'ぇ': 'ェ', 'ぉ': 'ォ',
  'ゃ': 'ャ', 'ゅ': 'ュ', 'ょ': 'ョ', 'っ': 'ッ'
};

export const toKatakana = (hiraganaString: string): string => {
  return hiraganaString.replace(/[\u3041-\u3096]/g, (hiraganaChar) => {
    if (SMALL_LETTER_MAP[hiraganaChar]) {
      return SMALL_LETTER_MAP[hiraganaChar];
    }
    
    const charCode = hiraganaChar.charCodeAt(0);
    return String.fromCharCode(charCode + DISPLAY_CONSTANTS.KANA_CONVERTER.HIRAGANA_TO_KATAKANA_OFFSET);
  });
};