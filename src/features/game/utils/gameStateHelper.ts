import type { GameState } from '../types/game.types';

/**
 * ゲーム状態のチェックヘルパー関数
 */
export const gameStateHelper = {
  /**
   * ゲームが失敗状態かどうかチェック
   */
  isFailed: (gameState: GameState): boolean => gameState === 'failed',

  /**
   * ゲームがクリア状態かどうかチェック
   */
  isCleared: (gameState: GameState): boolean => gameState === 'cleared',

  /**
   * ゲームが進行中かどうかチェック
   */
  isPlaying: (gameState: GameState): boolean => gameState === 'playing',

  /**
   * ゲームが開始前かどうかチェック
   */
  isStart: (gameState: GameState): boolean => gameState === 'start',

  /**
   * ゲームが終了状態かどうかチェック（失敗またはクリア）
   */
  isFinished: (gameState: GameState): boolean => 
    gameState === 'failed' || gameState === 'cleared',

  /**
   * アクションが実行可能かどうかチェック（失敗していない且つ進行中）
   */
  canPerformAction: (gameState: GameState): boolean => 
    !gameStateHelper.isFailed(gameState) && gameStateHelper.isPlaying(gameState),
};