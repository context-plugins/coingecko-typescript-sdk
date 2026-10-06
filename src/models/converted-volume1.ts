import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Ticker converted volume */
export type ConvertedVolume1 = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedVolume1Schema: Schema<ConvertedVolume1> = s.object<ConvertedVolume1>({
  btc: s.optional(s.float64()),
  eth: s.optional(s.float64()),
  usd: s.optional(s.float64()),
});
