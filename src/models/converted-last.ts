import { s, type Schema } from "../core/index.js";

export type ConvertedLast = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedLastSchema: Schema<ConvertedLast> = s.object<ConvertedLast>({
  btc: s.optional(s.number()),
  eth: s.optional(s.number()),
  usd: s.optional(s.number()),
});
