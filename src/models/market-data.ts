import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarketData = {
  currentPrice?: Record<string, number>;
  marketCap?: Record<string, number>;
  totalVolume?: Record<string, number>;
};

export const marketDataSchema: Schema<MarketData> = s.object<MarketData>({
  currentPrice: s.optional(s.record(s.string(), s.number())),
  marketCap: s.optional(s.record(s.string(), s.number())),
  totalVolume: s.optional(s.record(s.string(), s.number())),
  _keysMap: {
    currentPrice: "current_price",
    marketCap: "market_cap",
    totalVolume: "total_volume",
  },
});
