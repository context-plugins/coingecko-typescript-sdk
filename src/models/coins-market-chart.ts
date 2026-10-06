import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CoinsMarketChart = {
  /** Price data points as [timestamp, price] pairs */
  prices: number[][];
  /** Market cap data points as [timestamp, market_cap] pairs */
  marketCaps: number[][];
  /** Total volume data points as [timestamp, volume] pairs */
  totalVolumes: number[][];
};

export const coinsMarketChartSchema: Schema<CoinsMarketChart> = s.object<CoinsMarketChart>({
  prices: s.array(s.array(s.float64())),
  marketCaps: s.array(s.array(s.float64())),
  totalVolumes: s.array(s.array(s.float64())),
  _keysMap: {
    marketCaps: "market_caps",
    totalVolumes: "total_volumes",
  },
});
