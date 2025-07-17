# Bomb Test プロジェクト構造分析

## 1. プロジェクト概要
- **プロジェクト名**: bomb-test
- **フレームワーク**: React 19.1.0 + TypeScript 5.8.3
- **ビルドツール**: Vite 6.3.5
- **デプロイメント**: GitHub Pages (gh-pages)

## 2. ディレクトリ構造

```
/home/futa/bomb-test/
├── README.md
├── dist/                    # ビルド出力
├── eslint.config.js        # ESLint設定
├── index.html              # HTMLエントリーポイント
├── node_modules/           # 依存関係
├── package-lock.json
├── package.json            # プロジェクト設定
├── src/                    # ソースコード
│   ├── App.tsx            # メインアプリコンポーネント
│   ├── main.tsx           # アプリケーションエントリーポイント
│   ├── index.css          # グローバルスタイル
│   ├── vite-env.d.ts      # Vite型定義
│   │
│   ├── constants/         # 共通定数
│   │   ├── animations.css # アニメーションスタイル
│   │   ├── animations.ts  # アニメーション定数
│   │   ├── colors.ts      # カラー定数
│   │   └── zIndex.ts      # z-index定数
│   │
│   ├── features/          # 機能モジュール
│   │   ├── display/       # ディスプレイ機能
│   │   │   ├── components/
│   │   │   │   ├── Display.tsx
│   │   │   │   └── DisplayWithMount.tsx
│   │   │   ├── constants.ts
│   │   │   ├── index.ts
│   │   │   ├── renderers/
│   │   │   │   ├── CircleRenderer.ts
│   │   │   │   ├── InputRenderer.ts
│   │   │   │   ├── QuestionRenderer.ts
│   │   │   │   ├── StatusRenderer.ts
│   │   │   │   └── index.ts
│   │   │   ├── styles/
│   │   │   │   └── displayMount.styles.ts
│   │   │   ├── types/
│   │   │   │   └── display.types.ts
│   │   │   └── utils/
│   │   │       └── kanaConverter.ts
│   │   │
│   │   ├── game/          # ゲームコア機能
│   │   │   ├── components/
│   │   │   │   ├── Device.tsx
│   │   │   │   ├── MainPage.tsx
│   │   │   │   ├── StartPage.tsx
│   │   │   │   └── TweetButton.tsx
│   │   │   ├── data/
│   │   │   │   └── questions/
│   │   │   │       ├── index.ts
│   │   │   │       ├── question1.ts
│   │   │   │       ├── question2.ts
│   │   │   │       ├── question3.ts
│   │   │   │       └── question4.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useAnswerHandler.ts
│   │   │   │   ├── useBombState.ts
│   │   │   │   ├── useExplosionState.ts
│   │   │   │   ├── useGameCompletionState.ts
│   │   │   │   ├── useGameOrchestration.ts
│   │   │   │   ├── useGameState.ts
│   │   │   │   └── useInputState.ts
│   │   │   ├── index.ts
│   │   │   ├── services/
│   │   │   │   └── gameStorage.ts
│   │   │   ├── styles/
│   │   │   │   ├── explosion.css
│   │   │   │   ├── game.styles.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── startPage.css
│   │   │   │   └── startPage.styles.ts
│   │   │   └── types/
│   │   │       ├── game.types.ts
│   │   │       ├── hooks.types.ts
│   │   │       └── question.types.ts
│   │   │
│   │   ├── interactive-wires/  # インタラクティブワイヤー機能
│   │   │   ├── components/
│   │   │   │   ├── ExposedWires.tsx
│   │   │   │   ├── GameWire.tsx
│   │   │   │   ├── WireBorders.tsx
│   │   │   │   └── WireContainer.tsx
│   │   │   ├── constants.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useWireHandler.ts
│   │   │   │   └── useWireState.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   └── types/
│   │   │       └── wires.types.ts
│   │   │
│   │   ├── keyboard/      # キーボード機能
│   │   │   ├── components/
│   │   │   │   ├── ActionKeys.tsx
│   │   │   │   ├── KanaGrid.tsx
│   │   │   │   ├── Keyboard.tsx
│   │   │   │   ├── KeyboardButton.tsx
│   │   │   │   └── index.ts
│   │   │   ├── constants.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useKeyboardDetachment.ts
│   │   │   │   └── useKeyboardState.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   └── types/
│   │   │       └── keyboard.types.ts
│   │   │
│   │   ├── timer/         # タイマー機能
│   │   │   ├── TimerRenderer.ts
│   │   │   ├── constants.ts
│   │   │   ├── index.ts
│   │   │   ├── useTimer.ts
│   │   │   └── utils/
│   │   │       └── cursorUtils.ts
│   │   │
│   │   └── wire-decoration/  # 装飾的ワイヤー機能
│   │       ├── components/
│   │       │   ├── BasicWire.tsx
│   │       │   └── WireLayer.tsx
│   │       └── index.ts
│   │
│   ├── fonts/             # フォント定義
│   │   ├── digit.font.ts
│   │   ├── index.ts
│   │   └── katakana.font.ts
│   │
│   ├── styles/            # 共通スタイル
│   │   └── common.ts
│   │
│   ├── types/             # 共通型定義
│   │   └── font.types.ts
│   │
│   └── utils/             # ユーティリティ
│       ├── fontRenderer.ts
│       ├── responsive.ts
│       ├── storageHelper.ts
│       └── useResponsiveSetup.ts
│
├── tsconfig.app.json      # アプリケーション用TypeScript設定
├── tsconfig.json          # メインTypeScript設定
├── tsconfig.node.json     # Node.js用TypeScript設定
└── vite.config.ts         # Vite設定
```

## 3. 主要な依存関係

### 本番依存関係
- react: 19.1.0
- react-dom: 19.1.0

### 開発依存関係
- @eslint/js: 9.25.0
- @types/react: 19.1.7
- @types/react-dom: 19.1.2
- @vitejs/plugin-react-swc: 3.7.3
- eslint: 9.25.0
- eslint-plugin-react-hooks: 5.1.0
- eslint-plugin-react-refresh: 0.5.1
- gh-pages: 6.3.0
- globals: 15.19.1
- typescript: 5.8.3
- typescript-eslint: 8.22.1
- vite: 6.3.5

## 4. 利用可能なスクリプト

```json
{
  "dev": "vite",                          // 開発サーバー起動
  "build": "tsc -b && vite build",        // TypeScriptコンパイル + ビルド
  "lint": "eslint . --config eslint.config.js", // コード検査
  "preview": "vite preview",              // ビルド結果のプレビュー
  "deploy": "gh-pages -d dist"           // GitHub Pagesへのデプロイ
}
```

## 5. アプリケーションの構成

### エントリーポイント
- **main.tsx**: React 18のcreateRootを使用してアプリケーションをマウント
- **App.tsx**: ゲーム状態に応じてStartPageまたはMainPageを表示

### 機能モジュール（Features）

1. **display**: ディスプレイとレンダリング機能
   - 各種レンダラー（Circle、Input、Question、Status）
   - かな変換ユーティリティ

2. **game**: ゲームのコア機能
   - 8つの状態管理フック
   - 4つの質問データ
   - ゲームストレージサービス

3. **interactive-wires**: ワイヤー操作機能
   - ワイヤーの状態管理と操作ハンドリング

4. **keyboard**: キーボード入力機能
   - かなグリッドとアクションキー
   - キーボードの取り外し機能

5. **timer**: タイマー機能
   - カウントダウンタイマー
   - カーソル表示

6. **wire-decoration**: 装飾的なワイヤー表示

### アーキテクチャの特徴
- 機能ベースのモジュール構造
- カスタムフックによる状態管理（外部ライブラリ不使用）
- TypeScriptによる型安全性
- 明確な責任分離（components、hooks、types、utils、styles）

## 6. プロジェクトの概要
爆弾解除をテーマにしたインタラクティブなゲームアプリケーション。ユーザーは質問に答えたり、ワイヤーを操作したりしながら、制限時間内に爆弾を解除することが目的。