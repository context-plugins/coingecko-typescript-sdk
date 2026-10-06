import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection market cap 24 hours percentage change */
export type MarketCap24HPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const marketCap24HPercentageChangeSchema: Schema<MarketCap24HPercentageChange> =
  s.object<MarketCap24HPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
