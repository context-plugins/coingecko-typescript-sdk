import { s, type Schema } from "../core/index.js";

export type MarketCap = {
  nativeCurrency?: number;
  usd?: number;
};

export const marketCapSchema: Schema<MarketCap> = s.object<MarketCap>({
  nativeCurrency: s.optional(s.number()),
  usd: s.optional(s.number()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
