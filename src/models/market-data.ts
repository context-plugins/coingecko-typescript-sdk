import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Market data at the given date */
export type MarketData = {
  /** Current price keyed by currency */
  currentPrice?: Record<string, number>;
  /** Market capitalization keyed by currency */
  marketCap?: Record<string, number>;
  /** Total trading volume keyed by currency */
  totalVolume?: Record<string, number>;
};

export const marketDataSchema: Schema<MarketData> = s.object<MarketData>({
  currentPrice: s.optional(s.record(s.string(), s.float64())),
  marketCap: s.optional(s.record(s.string(), s.float64())),
  totalVolume: s.optional(s.record(s.string(), s.float64())),
  _keysMap: {
    currentPrice: "current_price",
    marketCap: "market_cap",
    totalVolume: "total_volume",
  },
});
