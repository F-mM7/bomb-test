import type { GameProgress, WirePosition } from '../types/game.types';
import { StorageHelper } from '../../../utils/storageHelper';

export class GameStorage {
  private static readonly GAME_PROGRESS_KEY = "gameProgress";
  private static readonly FINAL_TIME_KEY = "finalTime";
  private static readonly WIRE_STATES_KEY = "wireStates";
  private static readonly IS_LEFT_CUT_KEY = "isLeftCut";
  private static readonly IS_RIGHT_CUT_KEY = "isRightCut";
  private static readonly FAILED_TIME_KEY = "failedTime";
  private static readonly STAGE_4_REACHED_KEY = "stage4Reached";

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
    return StorageHelper.get<number | null>(this.FINAL_TIME_KEY, null);
  }

  static initializeBooleanFromStorage(key: string): boolean {
    return StorageHelper.get<boolean>(key, false);
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
    return StorageHelper.get<Record<number, number[]>>(this.WIRE_STATES_KEY, {});
  }

  static saveWireStates(wireStates: Record<number, number[]>): void {
    StorageHelper.set(this.WIRE_STATES_KEY, wireStates);
  }

  static getWireCutState(wire: WirePosition): boolean {
    const key = wire === 'left' ? this.IS_LEFT_CUT_KEY : this.IS_RIGHT_CUT_KEY;
    return StorageHelper.get<boolean>(key, false);
  }

  static setWireCutState(wire: WirePosition, isCut: boolean): void {
    const key = wire === 'left' ? this.IS_LEFT_CUT_KEY : this.IS_RIGHT_CUT_KEY;
    StorageHelper.set(key, isCut);
  }

  static setFinalTime(time: number): void {
    StorageHelper.set(this.FINAL_TIME_KEY, time);
  }

  static getFailedTime(): number | null {
    return StorageHelper.get<number | null>(this.FAILED_TIME_KEY, null);
  }

  static setFailedTime(time: number): void {
    StorageHelper.set(this.FAILED_TIME_KEY, time);
  }

  static getStage4Reached(): boolean {
    return StorageHelper.get<boolean>(this.STAGE_4_REACHED_KEY, false);
  }

  static setStage4Reached(reached: boolean): void {
    StorageHelper.set(this.STAGE_4_REACHED_KEY, reached);
  }
}