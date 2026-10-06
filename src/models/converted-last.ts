import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Converted last price */
export type ConvertedLast = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedLastSchema: Schema<ConvertedLast> = s.object<ConvertedLast>({
  btc: s.optional(s.float64()),
  eth: s.optional(s.float64()),
  usd: s.optional(s.float64()),
});
