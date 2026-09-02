import { s, type EnumSchema } from "../core/index.js";

export const Duration = {
  _5M: "5m",
  _1H: "1h",
  _6H: "6h",
  _24H: "24h",
} as const;
export type Duration = (typeof Duration)[keyof typeof Duration] | (string & {});

export const durationSchema: EnumSchema<Duration> = s.enumOf<Duration>(Duration);
