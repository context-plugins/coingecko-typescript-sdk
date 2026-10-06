import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./content.js";

export type Data2 = {
  /** Coin price in USD */
  price: number;
  /** Coin price in BTC */
  priceBtc: string;
  /** Coin price change percentage in 24 hours by currency */
  priceChangePercentage24H: Record<string, number>;
  /** Coin market cap in USD */
  marketCap: string;
  /** Coin market cap in BTC */
  marketCapBtc: string;
  /** Coin total volume in USD */
  totalVolume: string;
  /** Coin total volume in BTC */
  totalVolumeBtc: string;
  /** Coin sparkline image URL */
  sparkline: string;
  content: Content | null;
};

export const data2Schema: Schema<Data2> = s.object<Data2>({
  price: s.float64(),
  priceBtc: s.string(),
  priceChangePercentage24H: s.record(s.string(), s.float64()),
  marketCap: s.string(),
  marketCapBtc: s.string(),
  totalVolume: s.string(),
  totalVolumeBtc: s.string(),
  sparkline: s.string(),
  content: s.nullable(s.lazy(() => contentSchema)),
  _keysMap: {
    priceBtc: "price_btc",
    priceChangePercentage24H: "price_change_percentage_24h",
    marketCap: "market_cap",
    marketCapBtc: "market_cap_btc",
    totalVolume: "total_volume",
    totalVolumeBtc: "total_volume_btc",
  },
});
