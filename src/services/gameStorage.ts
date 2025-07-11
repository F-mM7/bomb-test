import type { GameProgress, WirePosition } from '../types/game/game.types';
import { StorageHelper } from '../utils/storageHelper';

export class GameStorage {
  private static readonly GAME_PROGRESS_KEY = "gameProgress";
  private static readonly FINAL_TIME_KEY = "finalTime";
  private static readonly WIRE_STATES_KEY = "wireStates";
  private static readonly IS_LEFT_CUT_KEY = "isLeftCut";
  private static readonly IS_RIGHT_CUT_KEY = "isRightCut";
  private static readonly FAILED_TIME_KEY = "failedTime";

  static getGameProgress(): GameProgress | null {
    return StorageHelper.get<GameProgress | null>(this.GAME_PROGRESS_KEY, null);
  }

  static saveGameProgress(progress: GameProgress): void {
    StorageHelper.set(this.GAME_PROGRESS_KEY, progress);
  }

  static initializeBooleanFromGameState(stateKey: 'cleared' | 'failed'): boolean {
    const progress = this.getGameProgress();
    return progress?.gameState === stateKey ? true : false;
  }

  static initializeFinalTime(): number | null {
    const finalTime = localStorage.getItem(this.FINAL_TIME_KEY);
    return finalTime ? parseInt(finalTime) : null;
  }

  static initializeBooleanFromStorage(key: string): boolean {
    return localStorage.getItem(key) === "true";
  }

  static saveGameProgressWithCurrentQuestion(currentQuestion: number, gameState: 'cleared' | 'failed' | 'playing'): void {
    const currentProgress = this.getGameProgress();
    const progress = {
      currentQuestion,
      gameState,
      startTime: currentProgress?.startTime || new Date().toString()
    };
    this.saveGameProgress(progress);
  }

  static getStartTime(): string | null {
    const progress = this.getGameProgress();
    return progress?.startTime || null;
  }

  static setStartTime(time: string): void {
    const currentProgress = this.getGameProgress();
    const progress = {
      currentQuestion: 1,
      gameState: 'playing' as const,
      startTime: time,
      ...currentProgress
    };
    this.saveGameProgress(progress);
  }

  static getWireStates(): Record<number, number[]> {
    try {
      const saved = localStorage.getItem(this.WIRE_STATES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  }

  static saveWireStates(wireStates: Record<number, number[]>): void {
    localStorage.setItem(this.WIRE_STATES_KEY, JSON.stringify(wireStates));
  }

  static getWireCutState(wire: WirePosition): boolean {
    const key = wire === 'left' ? this.IS_LEFT_CUT_KEY : this.IS_RIGHT_CUT_KEY;
    return localStorage.getItem(key) === "true";
  }

  static setWireCutState(wire: WirePosition, isCut: boolean): void {
    const key = wire === 'left' ? this.IS_LEFT_CUT_KEY : this.IS_RIGHT_CUT_KEY;
    localStorage.setItem(key, isCut.toString());
  }

  static setFinalTime(time: number): void {
    localStorage.setItem(this.FINAL_TIME_KEY, time.toString());
  }

  static getFailedTime(): number | null {
    const failedTime = localStorage.getItem(this.FAILED_TIME_KEY);
    return failedTime ? parseInt(failedTime) : null;
  }

  static setFailedTime(time: number): void {
    localStorage.setItem(this.FAILED_TIME_KEY, time.toString());
  }
}