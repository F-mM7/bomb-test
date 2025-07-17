# CLAUDE.md - Bomb Test プロジェクト

## プロジェクト概要

このプロジェクトは爆弾解除をテーマにしたインタラクティブなゲームアプリケーションです。
- **フレームワーク**: React 19.1.0 + TypeScript 5.8.3
- **ビルドツール**: Vite 6.3.5
- **デプロイ**: GitHub Pages

## ゲームの流れ

1. **スタート画面** (`StartPage`): ゲーム開始
2. **メインゲーム** (`MainPage`): 
   - 4つの質問に答える
   - 制限時間内に正解する
   - ワイヤーを操作して爆弾を解除
3. **結果**: 成功/失敗でツイート共有が可能

## 主要機能

### 1. Display (ディスプレイ機能)
- 質問、入力、ステータス、サークル表示
- カタカナ変換機能

### 2. Game (ゲームコア機能)
- 8つの状態管理フック
- 4つの質問データ
- ローカルストレージでの進行状況保存

### 3. Interactive Wires (ワイヤー操作)
- 3本のワイヤーをクリックして操作
- 正しい順序でワイヤーを切断

### 4. Keyboard (キーボード入力)
- カタカナ入力グリッド
- アクションキー（決定、削除、スキップ）
- キーボード取り外し機能

### 5. Timer (タイマー)
- 5分のカウントダウンタイマー
- カーソル点滅エフェクト

### 6. Wire Decoration (装飾ワイヤー)
- 背景の装飾的なワイヤー表示

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # ビルド
npm run lint     # ESLint実行
npm run preview  # ビルドプレビュー
npm run deploy   # GitHub Pagesへデプロイ
```

## 不要コードの調査・修正結果（2025-07-17）

### ✅ 完了した修正

#### 1. デッドコードの削除
- `useGameState.ts:42-44` - `failGame`関数を削除
- `font.types.ts:2` - `SmallKana`型を削除

#### 2. 不要なReactインポートの除去
- 11ファイルでReactインポートを最適化
- `import React from "react"` → `import type { FC, CSSProperties } from "react"`
- バンドルサイズの削減とパフォーマンス向上

#### 3. 未使用のエクスポート整理
- `BasicWireProps` (wire-decoration/index.ts) - 削除
- `BasicWire`コンポーネント - エクスポート削除（内部使用のみ）

#### 4. TODO項目の解決
- `TweetButton.tsx:26` - 実際のゲームURL（https://f-mm7.github.io/bomb-test/）に更新

#### 5. 重複コードのリファクタリング
新しい共通ヘルパーファイルを作成：
- `src/features/game/hooks/useGameStorage.ts` - GameStorage状態管理の共通化
- `src/utils/fontRenderHelper.ts` - フォントレンダリング処理の抽象化
- `src/styles/buttonStyles.ts` - ボタンスタイルの統一化
- `src/features/game/utils/gameStateHelper.ts` - ゲーム状態チェックの共通化

### 🔧 改善されたコード品質

1. **バンドルサイズの削減**: 不要なReactインポートを削除
2. **型安全性の向上**: より厳密な型定義
3. **保守性の向上**: 重複コードの共通化
4. **一貫性の向上**: 統一されたパターンの使用

## プロジェクト構造

詳細な構造は `.claude/PROJECT_STRUCTURE.md` を参照してください。

## 注意事項

- このプロジェクトはゲームアプリケーションであり、セキュリティ上の問題はありません
- ローカルストレージを使用してゲーム進行状況を保存しています
- レスポンシブデザインに対応（モバイル/デスクトップ）