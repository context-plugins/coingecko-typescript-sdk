import { s, type Schema } from "../core/index.js";

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
