import { s, type EnumSchema } from "../core/index.js";

export const Timeframe = {
  Day: "day",
  Hour: "hour",
  Minute: "minute",
} as const;
export type Timeframe = (typeof Timeframe)[keyof typeof Timeframe] | (string & {});

export const timeframeSchema: EnumSchema<Timeframe> = s.enumOf<Timeframe>(Timeframe);
