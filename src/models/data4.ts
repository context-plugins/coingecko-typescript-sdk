import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data4 = {
  /** Category market cap */
  marketCap: number;
  /** Category market cap in BTC */
  marketCapBtc: number;
  /** Category total volume */
  totalVolume: number;
  /** Category total volume in BTC */
  totalVolumeBtc: number;
  /** Category market cap change percentage in 24 hours by currency */
  marketCapChangePercentage24H: Record<string, number>;
  /** Category sparkline image URL */
  sparkline: string;
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  marketCap: s.float64(),
  marketCapBtc: s.float64(),
  totalVolume: s.float64(),
  totalVolumeBtc: s.float64(),
  marketCapChangePercentage24H: s.record(s.string(), s.float64()),
  sparkline: s.string(),
  _keysMap: {
    marketCap: "market_cap",
    marketCapBtc: "market_cap_btc",
    totalVolume: "total_volume",
    totalVolumeBtc: "total_volume_btc",
    marketCapChangePercentage24H: "market_cap_change_percentage_24h",
  },
});
