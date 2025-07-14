import type { GameProgress, WirePosition, WireCutState } from '../types/game.types';
import { StorageHelper } from '../../../utils/storageHelper';

export class GameStorage {
  // Storage keys - each data type is independent
  private static readonly STORAGE_KEYS = {
    GAME_PROGRESS: "gameProgress",
    WIRE_CUT_STATE: "wireCutState", 
    FINAL_TIME: "finalTime",
    FAILED_TIME: "failedTime"
  } as const;

  // ========== Game Progress Management ==========
  static getGameProgress(): GameProgress | null {
    return StorageHelper.get<GameProgress | null>(this.STORAGE_KEYS.GAME_PROGRESS, null);
  }

  static saveGameProgress(progress: GameProgress): void {
    StorageHelper.set(this.STORAGE_KEYS.GAME_PROGRESS, progress);
  }

  static updateGameProgress(updates: Partial<GameProgress>): void {
    const currentProgress = this.getGameProgress();
    const newProgress = {
      currentQuestion: 1,
      gameState: 'start' as const,
      startTime: new Date().toString(),
      ...currentProgress,
      ...updates,
    };
    this.saveGameProgress(newProgress);
  }

  static initializeBooleanFromGameState(stateKey: 'cleared' | 'failed'): boolean {
    const progress = this.getGameProgress();
    return progress?.gameState === stateKey;
  }

  static getStartTime(): string | null {
    const progress = this.getGameProgress();
    return progress?.startTime || null;
  }

  static setStartTime(time: string): void {
    this.updateGameProgress({ 
      startTime: time,
      currentQuestion: 1,
      gameState: 'playing'
    });
  }

  // ========== Wire Cut State Management ==========
  static getWireCutState(wire: WirePosition): boolean {
    const state = StorageHelper.get<WireCutState>(this.STORAGE_KEYS.WIRE_CUT_STATE, {
      isLeftCut: false,
      isRightCut: false
    });
    return wire === 'left' ? state.isLeftCut : state.isRightCut;
  }

  static setWireCutState(wire: WirePosition, isCut: boolean): void {
    const currentState = StorageHelper.get<WireCutState>(this.STORAGE_KEYS.WIRE_CUT_STATE, {
      isLeftCut: false,
      isRightCut: false
    });
    
    const newState = {
      ...currentState,
      [wire === 'left' ? 'isLeftCut' : 'isRightCut']: isCut
    };
    
    StorageHelper.set(this.STORAGE_KEYS.WIRE_CUT_STATE, newState);
  }

  static getWireCutStates(): WireCutState {
    return StorageHelper.get<WireCutState>(this.STORAGE_KEYS.WIRE_CUT_STATE, {
      isLeftCut: false,
      isRightCut: false
    });
  }


  // ========== Time Management ==========
  static getFinalTime(): number | null {
    return StorageHelper.get<number | null>(this.STORAGE_KEYS.FINAL_TIME, null);
  }

  static setFinalTime(time: number): void {
    StorageHelper.set(this.STORAGE_KEYS.FINAL_TIME, time);
  }

  static getFailedTime(): number | null {
    return StorageHelper.get<number | null>(this.STORAGE_KEYS.FAILED_TIME, null);
  }

  static setFailedTime(time: number): void {
    StorageHelper.set(this.STORAGE_KEYS.FAILED_TIME, time);
  }

  // ========== Utility Methods ==========
  static initializeFinalTime(): number | null {
    return this.getFinalTime();
  }

  static saveGameProgressWithCurrentQuestion(currentQuestion: number, gameState: 'cleared' | 'failed' | 'playing'): void {
    this.updateGameProgress({ currentQuestion, gameState });
  }

  // Deprecated methods - for compatibility during transition
  static initializeBooleanFromStorage(key: string): boolean {
    return StorageHelper.get<boolean>(key, false);
  }

}