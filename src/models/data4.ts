import { s, type Schema } from "../core/index.js";

export type Data4 = {
  marketCap: number;
  marketCapBtc: number;
  totalVolume: number;
  totalVolumeBtc: number;
  marketCapChangePercentage24H: Record<string, number>;
  sparkline: string;
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  marketCap: s.number(),
  marketCapBtc: s.number(),
  totalVolume: s.number(),
  totalVolumeBtc: s.number(),
  marketCapChangePercentage24H: s.record(s.string(), s.number()),
  sparkline: s.string(),
  _keysMap: {
    marketCap: "market_cap",
    marketCapBtc: "market_cap_btc",
    totalVolume: "total_volume",
    totalVolumeBtc: "total_volume_btc",
    marketCapChangePercentage24H: "market_cap_change_percentage_24h",
  },
});
