import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CoinsMarketChart = {
  prices: number[][];
  marketCaps: number[][];
  totalVolumes: number[][];
};

export const coinsMarketChartSchema: Schema<CoinsMarketChart> = s.object<CoinsMarketChart>({
  prices: s.array(s.array(s.number())),
  marketCaps: s.array(s.array(s.number())),
  totalVolumes: s.array(s.array(s.number())),
  _keysMap: {
    marketCaps: "market_caps",
    totalVolumes: "total_volumes",
  },
});
