import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Timeframe = {
  Day: "day",
  Hour: "hour",
  Minute: "minute",
} as const;
export type Timeframe = (typeof Timeframe)[keyof typeof Timeframe] | (string & {});

export const timeframeSchema: EnumSchema<Timeframe> = s.enumOf<Timeframe>(Timeframe);
