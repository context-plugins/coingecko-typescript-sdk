import { s, type EnumSchema } from "../core/index.js";

export const Interval = {
  Hourly: "hourly",
  Daily: "daily",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);
