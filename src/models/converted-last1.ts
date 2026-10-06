import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Ticker converted last price */
export type ConvertedLast1 = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedLast1Schema: Schema<ConvertedLast1> = s.object<ConvertedLast1>({
  btc: s.optional(s.float64()),
  eth: s.optional(s.float64()),
  usd: s.optional(s.float64()),
});
