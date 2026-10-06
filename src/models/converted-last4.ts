import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Derivative converted last price */
export type ConvertedLast4 = {
  btc?: string;
  eth?: string;
  usd?: string;
};

export const convertedLast4Schema: Schema<ConvertedLast4> = s.object<ConvertedLast4>({
  btc: s.optional(s.string()),
  eth: s.optional(s.string()),
  usd: s.optional(s.string()),
});
