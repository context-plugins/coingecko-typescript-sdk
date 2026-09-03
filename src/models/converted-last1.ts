import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConvertedLast1 = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedLast1Schema: Schema<ConvertedLast1> = s.object<ConvertedLast1>({
  btc: s.optional(s.number()),
  eth: s.optional(s.number()),
  usd: s.optional(s.number()),
});
