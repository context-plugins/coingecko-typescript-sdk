import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roi2Schema, type Roi2 } from "./roi2.js";
import { sparklineIn7DSchema, type SparklineIn7D } from "./sparkline-in7-d.js";

export type CoinsMarket = {
  /** Coin ID */
  id: string;
  /** Coin symbol */
  symbol: string;
  /** Coin name */
  name: string;
  /** Coin image URL */
  image: string;
  /** Current price in target currency */
  currentPrice: number | null;
  /** Market cap in target currency */
  marketCap: number | null;
  /** Market cap rank */
  marketCapRank: number | null;
  /** Fully diluted valuation in target currency */
  fullyDilutedValuation: number | null;
  /** Total trading volume in target currency */
  totalVolume: number | null;
  /** 24-hour price high in target currency */
  high24H: number | null;
  /** 24-hour price low in target currency */
  low24H: number | null;
  /** 24-hour price change in target currency */
  priceChange24H: number | null;
  /** 24-hour price change percentage */
  priceChangePercentage24H: number | null;
  /** 24-hour market cap change in target currency */
  marketCapChange24H: number | null;
  /** 24-hour market cap change percentage */
  marketCapChangePercentage24H: number | null;
  /** Circulating supply */
  circulatingSupply: number | null;
  /** Total supply */
  totalSupply: number | null;
  /** Max supply */
  maxSupply: number | null;
  /** All-time high price in target currency */
  ath: number | null;
  /** All-time high change percentage */
  athChangePercentage: number | null;
  /** All-time high date */
  athDate: Date | null;
  /** All-time low price in target currency */
  atl: number | null;
  /** All-time low change percentage */
  atlChangePercentage: number | null;
  /** All-time low date */
  atlDate: Date | null;
  /** Return on investment data */
  roi: Roi2 | null;
  /** Last updated timestamp */
  lastUpdated: Date;
  /** Market cap rank including rehypothecated tokens */
  marketCapRankWithRehypothecated?: number | null;
  /** Sparkline price data for the last 7 days */
  sparklineIn7D?: SparklineIn7D;
  /** 1-hour price change percentage in target currency */
  priceChangePercentage1HInCurrency?: number | null;
  /** 24-hour price change percentage in target currency */
  priceChangePercentage24HInCurrency?: number | null;
  /** 7-day price change percentage in target currency */
  priceChangePercentage7DInCurrency?: number | null;
  /** 14-day price change percentage in target currency */
  priceChangePercentage14DInCurrency?: number | null;
  /** 30-day price change percentage in target currency */
  priceChangePercentage30DInCurrency?: number | null;
  /** 200-day price change percentage in target currency */
  priceChangePercentage200DInCurrency?: number | null;
  /** 1-year price change percentage in target currency */
  priceChangePercentage1YInCurrency?: number | null;
};

export const coinsMarketSchema: Schema<CoinsMarket> = s.object<CoinsMarket>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  image: s.string(),
  currentPrice: s.nullable(s.float64()),
  marketCap: s.nullable(s.float64()),
  marketCapRank: s.nullable(s.int()),
  fullyDilutedValuation: s.nullable(s.float64()),
  totalVolume: s.nullable(s.float64()),
  high24H: s.nullable(s.float64()),
  low24H: s.nullable(s.float64()),
  priceChange24H: s.nullable(s.float64()),
  priceChangePercentage24H: s.nullable(s.float64()),
  marketCapChange24H: s.nullable(s.float64()),
  marketCapChangePercentage24H: s.nullable(s.float64()),
  circulatingSupply: s.nullable(s.float64()),
  totalSupply: s.nullable(s.float64()),
  maxSupply: s.nullable(s.float64()),
  ath: s.nullable(s.float64()),
  athChangePercentage: s.nullable(s.float64()),
  athDate: s.nullable(s.dateTime()),
  atl: s.nullable(s.float64()),
  atlChangePercentage: s.nullable(s.float64()),
  atlDate: s.nullable(s.dateTime()),
  roi: s.nullable(s.lazy(() => roi2Schema)),
  lastUpdated: s.dateTime(),
  marketCapRankWithRehypothecated: s.optionalNullable(s.int()),
  sparklineIn7D: s.optional(s.lazy(() => sparklineIn7DSchema)),
  priceChangePercentage1HInCurrency: s.optionalNullable(s.float64()),
  priceChangePercentage24HInCurrency: s.optionalNullable(s.float64()),
  priceChangePercentage7DInCurrency: s.optionalNullable(s.float64()),
  priceChangePercentage14DInCurrency: s.optionalNullable(s.float64()),
  priceChangePercentage30DInCurrency: s.optionalNullable(s.float64()),
  priceChangePercentage200DInCurrency: s.optionalNullable(s.float64()),
  priceChangePercentage1YInCurrency: s.optionalNullable(s.float64()),
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
