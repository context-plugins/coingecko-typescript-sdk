import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection market cap */
export type MarketCap = {
  nativeCurrency?: number;
  usd?: number;
};

export const marketCapSchema: Schema<MarketCap> = s.object<MarketCap>({
  nativeCurrency: s.optional(s.float64()),
  usd: s.optional(s.float64()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
