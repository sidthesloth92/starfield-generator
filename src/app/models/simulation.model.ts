export type RecordingState = 'idle' | 'recording' | 'processing';

export type ControlKey = 
  | 'zoomRate'
  | 'rotationRate'
  | 'shootingStarSpeed'
  | 'nonStreakingStarSpeed'
  | 'baseStarSize';

export interface ControlMetadata {
  label: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  precision: number;
}
