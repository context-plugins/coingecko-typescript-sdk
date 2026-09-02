import { s, type Schema } from "../core/index.js";
import { contentSchema, type Content } from "./content.js";

export type Data2 = {
  price: number;
  priceBtc: string;
  priceChangePercentage24H: Record<string, number>;
  marketCap: string;
  marketCapBtc: string;
  totalVolume: string;
  totalVolumeBtc: string;
  sparkline: string;
  content: Content | null;
};

export const data2Schema: Schema<Data2> = s.object<Data2>({
  price: s.number(),
  priceBtc: s.string(),
  priceChangePercentage24H: s.record(s.string(), s.number()),
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
