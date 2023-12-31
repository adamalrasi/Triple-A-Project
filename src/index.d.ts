export const rainbow: AnimationFn;
export const pulse: AnimationFn;
export const glitch: AnimationFn;
export const radar: AnimationFn;
export const neon: AnimationFn;
export const karaoke: AnimationFn;

export type AnimationFn = (text: string, speed?: number) => Animation;

export interface Animation {
  text: string[];
  lines: number;
  stopped: boolean;
  init: boolean;
  f: number;
  start(): void;
  stop(): void;
  replace(text: string): void;
  render(): void;
  frame(): string;
}
