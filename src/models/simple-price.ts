import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SimplePrice = {
  usd?: number;
  usdMarketCap?: number;
  usd24HVol?: number;
  usd24HChange?: number;
  lastUpdatedAt?: number;
};

export const simplePriceSchema: Schema<SimplePrice> = s.object<SimplePrice>({
  usd: s.optional(s.number()),
  usdMarketCap: s.optional(s.number()),
  usd24HVol: s.optional(s.number()),
  usd24HChange: s.optional(s.number()),
  lastUpdatedAt: s.optional(s.number()),
  _keysMap: {
    usdMarketCap: "usd_market_cap",
    usd24HVol: "usd_24h_vol",
    usd24HChange: "usd_24h_change",
    lastUpdatedAt: "last_updated_at",
  },
});
