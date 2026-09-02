import { s, type Schema } from "../core/index.js";

export type MarketCap24HPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const marketCap24HPercentageChangeSchema: Schema<MarketCap24HPercentageChange> =
  s.object<MarketCap24HPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
