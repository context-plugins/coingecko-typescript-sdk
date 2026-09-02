import { s, type Schema } from "../core/index.js";
import { roi2Schema, type Roi2 } from "./roi2.js";
import { sparklineIn7DSchema, type SparklineIn7D } from "./sparkline-in7-d.js";

export type CoinsMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number | null;
  marketCap: number | null;
  marketCapRank: number | null;
  fullyDilutedValuation: number | null;
  totalVolume: number | null;
  high24H: number | null;
  low24H: number | null;
  priceChange24H: number | null;
  priceChangePercentage24H: number | null;
  marketCapChange24H: number | null;
  marketCapChangePercentage24H: number | null;
  circulatingSupply: number | null;
  totalSupply: number | null;
  maxSupply: number | null;
  ath: number | null;
  athChangePercentage: number | null;
  athDate: Date | null;
  atl: number | null;
  atlChangePercentage: number | null;
  atlDate: Date | null;
  roi: Roi2 | null;
  lastUpdated: Date;
  marketCapRankWithRehypothecated?: number | null;
  sparklineIn7D?: SparklineIn7D;
  priceChangePercentage1HInCurrency?: number | null;
  priceChangePercentage24HInCurrency?: number | null;
  priceChangePercentage7DInCurrency?: number | null;
  priceChangePercentage14DInCurrency?: number | null;
  priceChangePercentage30DInCurrency?: number | null;
  priceChangePercentage200DInCurrency?: number | null;
  priceChangePercentage1YInCurrency?: number | null;
};

export const coinsMarketSchema: Schema<CoinsMarket> = s.object<CoinsMarket>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  image: s.string(),
  currentPrice: s.nullable(s.number()),
  marketCap: s.nullable(s.number()),
  marketCapRank: s.nullable(s.number()),
  fullyDilutedValuation: s.nullable(s.number()),
  totalVolume: s.nullable(s.number()),
  high24H: s.nullable(s.number()),
  low24H: s.nullable(s.number()),
  priceChange24H: s.nullable(s.number()),
  priceChangePercentage24H: s.nullable(s.number()),
  marketCapChange24H: s.nullable(s.number()),
  marketCapChangePercentage24H: s.nullable(s.number()),
  circulatingSupply: s.nullable(s.number()),
  totalSupply: s.nullable(s.number()),
  maxSupply: s.nullable(s.number()),
  ath: s.nullable(s.number()),
  athChangePercentage: s.nullable(s.number()),
  athDate: s.nullable(s.dateTime()),
  atl: s.nullable(s.number()),
  atlChangePercentage: s.nullable(s.number()),
  atlDate: s.nullable(s.dateTime()),
  roi: s.nullable(s.lazy(() => roi2Schema)),
  lastUpdated: s.dateTime(),
  marketCapRankWithRehypothecated: s.optionalNullable(s.number()),
  sparklineIn7D: s.optional(s.lazy(() => sparklineIn7DSchema)),
  priceChangePercentage1HInCurrency: s.optionalNullable(s.number()),
  priceChangePercentage24HInCurrency: s.optionalNullable(s.number()),
  priceChangePercentage7DInCurrency: s.optionalNullable(s.number()),
  priceChangePercentage14DInCurrency: s.optionalNullable(s.number()),
  priceChangePercentage30DInCurrency: s.optionalNullable(s.number()),
  priceChangePercentage200DInCurrency: s.optionalNullable(s.number()),
  priceChangePercentage1YInCurrency: s.optionalNullable(s.number()),
  _keysMap: {
    currentPrice: "current_price",
    marketCap: "market_cap",
    marketCapRank: "market_cap_rank",
    fullyDilutedValuation: "fully_diluted_valuation",
    totalVolume: "total_volume",
    high24H: "high_24h",
    low24H: "low_24h",
    priceChange24H: "price_change_24h",
    priceChangePercentage24H: "price_change_percentage_24h",
    marketCapChange24H: "market_cap_change_24h",
    marketCapChangePercentage24H: "market_cap_change_percentage_24h",
    circulatingSupply: "circulating_supply",
    totalSupply: "total_supply",
    maxSupply: "max_supply",
    athChangePercentage: "ath_change_percentage",
    athDate: "ath_date",
    atlChangePercentage: "atl_change_percentage",
    atlDate: "atl_date",
    lastUpdated: "last_updated",
    marketCapRankWithRehypothecated: "market_cap_rank_with_rehypothecated",
    sparklineIn7D: "sparkline_in_7d",
    priceChangePercentage1HInCurrency: "price_change_percentage_1h_in_currency",
    priceChangePercentage24HInCurrency: "price_change_percentage_24h_in_currency",
    priceChangePercentage7DInCurrency: "price_change_percentage_7d_in_currency",
    priceChangePercentage14DInCurrency: "price_change_percentage_14d_in_currency",
    priceChangePercentage30DInCurrency: "price_change_percentage_30d_in_currency",
    priceChangePercentage200DInCurrency: "price_change_percentage_200d_in_currency",
    priceChangePercentage1YInCurrency: "price_change_percentage_1y_in_currency",
  },
});
