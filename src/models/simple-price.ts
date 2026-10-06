import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SimplePrice = {
  /** Price in the target currency */
  usd?: number;
  /** Market capitalization in the target currency */
  usdMarketCap?: number;
  /** 24-hour trading volume in the target currency */
  usd24HVol?: number;
  /** 24-hour price change percentage in the target currency */
  usd24HChange?: number;
  /** Last updated timestamp in UNIX seconds */
  lastUpdatedAt?: number;
};

export const simplePriceSchema: Schema<SimplePrice> = s.object<SimplePrice>({
  usd: s.optional(s.float64()),
  usdMarketCap: s.optional(s.float64()),
  usd24HVol: s.optional(s.float64()),
  usd24HChange: s.optional(s.float64()),
  lastUpdatedAt: s.optional(s.float64()),
  _keysMap: {
    usdMarketCap: "usd_market_cap",
    usd24HVol: "usd_24h_vol",
    usd24HChange: "usd_24h_change",
    lastUpdatedAt: "last_updated_at",
  },
});
