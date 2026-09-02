import { s, type Schema } from "../core/index.js";

export type ConvertedVolume1 = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedVolume1Schema: Schema<ConvertedVolume1> = s.object<ConvertedVolume1>({
  btc: s.optional(s.number()),
  eth: s.optional(s.number()),
  usd: s.optional(s.number()),
});
