import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roiSchema, type Roi } from "./roi.js";

/** Market data */
export type MarketData1 = {
  /** Current price in target currency */
  currentPrice?: Record<string, number>;
  /** Total value locked */
  totalValueLocked?: number | null;
  /** Market cap to TVL ratio */
  mcapToTvlRatio?: number | null;
  /** FDV to TVL ratio */
  fdvToTvlRatio?: number | null;
  /** Return on investment */
  roi?: Roi | null;
  /** All-time high in target currency */
  ath?: Record<string, number>;
  /** All-time high change percentage */
  athChangePercentage?: Record<string, number>;
  /** All-time high date */
  athDate?: Record<string, string>;
  /** All-time low in target currency */
  atl?: Record<string, number>;
  /** All-time low change percentage */
  atlChangePercentage?: Record<string, number>;
  /** All-time low date */
  atlDate?: Record<string, string>;
  /** Market cap in target currency */
  marketCap?: Record<string, number>;
  /** Fully diluted valuation in target currency */
  fullyDilutedValuation?: Record<string, number>;
  /** Market cap to FDV ratio */
  marketCapFdvRatio?: number;
  /** Market cap rank */
  marketCapRank?: number | null;
  /** Outstanding token value in USD */
  outstandingTokenValueUsd?: number | null;
  /** Market cap rank including rehypothecated tokens */
  marketCapRankWithRehypothecated?: number | null;
  /** Total trading volume in target currency */
  totalVolume?: Record<string, number>;
  /** 24h price high in target currency */
  high24H?: Record<string, number>;
  /** 24h price low in target currency */
  low24H?: Record<string, number>;
  /** 24h price change in target currency */
  priceChange24H?: number;
  /** 24h price change percentage */
  priceChangePercentage24H?: number;
  /** 7d price change percentage */
  priceChangePercentage7D?: number;
  /** 14d price change percentage */
  priceChangePercentage14D?: number;
  /** 30d price change percentage */
  priceChangePercentage30D?: number;
  /** 60d price change percentage */
  priceChangePercentage60D?: number;
  /** 200d price change percentage */
  priceChangePercentage200D?: number;
  /** 1y price change percentage */
  priceChangePercentage1Y?: number;
  /** 24h market cap change in target currency */
  marketCapChange24H?: number;
  /** 24h market cap change percentage */
  marketCapChangePercentage24H?: number;
  /** 24h price change in target currency */
  priceChange24HInCurrency?: Record<string, number>;
  /** 1h price change percentage per currency */
  priceChangePercentage1HInCurrency?: Record<string, number>;
  /** 24h price change percentage per currency */
  priceChangePercentage24HInCurrency?: Record<string, number>;
  /** 7d price change percentage per currency */
  priceChangePercentage7DInCurrency?: Record<string, number>;
  /** 14d price change percentage per currency */
  priceChangePercentage14DInCurrency?: Record<string, number>;
  /** 30d price change percentage per currency */
  priceChangePercentage30DInCurrency?: Record<string, number>;
  /** 60d price change percentage per currency */
  priceChangePercentage60DInCurrency?: Record<string, number>;
  /** 200d price change percentage per currency */
  priceChangePercentage200DInCurrency?: Record<string, number>;
  /** 1y price change percentage per currency */
  priceChangePercentage1YInCurrency?: Record<string, number>;
  /** 24h market cap change in target currency */
  marketCapChange24HInCurrency?: Record<string, number>;
  /** 24h market cap change percentage per currency */
  marketCapChangePercentage24HInCurrency?: Record<string, number>;
  /** Total supply */
  totalSupply?: number;
  /** Max supply */
  maxSupply?: number | null;
  /** Max supply infinite */
  maxSupplyInfinite?: boolean;
  /** Circulating supply */
  circulatingSupply?: number;
  /** Tokens outstanding in the market */
  outstandingSupply?: number | null;
  /** Market data last updated timestamp */
  lastUpdated?: string;
  /** Sparkline 7-day price data */
  sparkline7D?: number[];
};

export const marketData1Schema: Schema<MarketData1> = s.object<MarketData1>({
  currentPrice: s.optional(s.record(s.string(), s.float64())),
  totalValueLocked: s.optionalNullable(s.float64()),
  mcapToTvlRatio: s.optionalNullable(s.float64()),
  fdvToTvlRatio: s.optionalNullable(s.float64()),
  roi: s.optionalNullable(s.lazy(() => roiSchema)),
  ath: s.optional(s.record(s.string(), s.float64())),
  athChangePercentage: s.optional(s.record(s.string(), s.float64())),
  athDate: s.optional(s.record(s.string(), s.string())),
  atl: s.optional(s.record(s.string(), s.float64())),
  atlChangePercentage: s.optional(s.record(s.string(), s.float64())),
  atlDate: s.optional(s.record(s.string(), s.string())),
  marketCap: s.optional(s.record(s.string(), s.float64())),
  fullyDilutedValuation: s.optional(s.record(s.string(), s.float64())),
  marketCapFdvRatio: s.optional(s.float64()),
  marketCapRank: s.optionalNullable(s.int()),
  outstandingTokenValueUsd: s.optionalNullable(s.float64()),
  marketCapRankWithRehypothecated: s.optionalNullable(s.int()),
  totalVolume: s.optional(s.record(s.string(), s.float64())),
  high24H: s.optional(s.record(s.string(), s.float64())),
  low24H: s.optional(s.record(s.string(), s.float64())),
  priceChange24H: s.optional(s.float64()),
  priceChangePercentage24H: s.optional(s.float64()),
  priceChangePercentage7D: s.optional(s.float64()),
  priceChangePercentage14D: s.optional(s.float64()),
  priceChangePercentage30D: s.optional(s.float64()),
  priceChangePercentage60D: s.optional(s.float64()),
  priceChangePercentage200D: s.optional(s.float64()),
  priceChangePercentage1Y: s.optional(s.float64()),
  marketCapChange24H: s.optional(s.float64()),
  marketCapChangePercentage24H: s.optional(s.float64()),
  priceChange24HInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage1HInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage24HInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage7DInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage14DInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage30DInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage60DInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage200DInCurrency: s.optional(s.record(s.string(), s.float64())),
  priceChangePercentage1YInCurrency: s.optional(s.record(s.string(), s.float64())),
  marketCapChange24HInCurrency: s.optional(s.record(s.string(), s.float64())),
  marketCapChangePercentage24HInCurrency: s.optional(s.record(s.string(), s.float64())),
  totalSupply: s.optional(s.float64()),
  maxSupply: s.optionalNullable(s.float64()),
  maxSupplyInfinite: s.optional(s.boolean()),
  circulatingSupply: s.optional(s.float64()),
  outstandingSupply: s.optionalNullable(s.float64()),
  lastUpdated: s.optional(s.string()),
  sparkline7D: s.optional(s.array(s.float64())),
  _keysMap: {
    currentPrice: "current_price",
    totalValueLocked: "total_value_locked",
    mcapToTvlRatio: "mcap_to_tvl_ratio",
    fdvToTvlRatio: "fdv_to_tvl_ratio",
    athChangePercentage: "ath_change_percentage",
    athDate: "ath_date",
    atlChangePercentage: "atl_change_percentage",
    atlDate: "atl_date",
    marketCap: "market_cap",
    fullyDilutedValuation: "fully_diluted_valuation",
    marketCapFdvRatio: "market_cap_fdv_ratio",
    marketCapRank: "market_cap_rank",
    outstandingTokenValueUsd: "outstanding_token_value_usd",
    marketCapRankWithRehypothecated: "market_cap_rank_with_rehypothecated",
    totalVolume: "total_volume",
    high24H: "high_24h",
    low24H: "low_24h",
    priceChange24H: "price_change_24h",
    priceChangePercentage24H: "price_change_percentage_24h",
    priceChangePercentage7D: "price_change_percentage_7d",
    priceChangePercentage14D: "price_change_percentage_14d",
    priceChangePercentage30D: "price_change_percentage_30d",
    priceChangePercentage60D: "price_change_percentage_60d",
    priceChangePercentage200D: "price_change_percentage_200d",
    priceChangePercentage1Y: "price_change_percentage_1y",
    marketCapChange24H: "market_cap_change_24h",
    marketCapChangePercentage24H: "market_cap_change_percentage_24h",
    priceChange24HInCurrency: "price_change_24h_in_currency",
    priceChangePercentage1HInCurrency: "price_change_percentage_1h_in_currency",
    priceChangePercentage24HInCurrency: "price_change_percentage_24h_in_currency",
    priceChangePercentage7DInCurrency: "price_change_percentage_7d_in_currency",
    priceChangePercentage14DInCurrency: "price_change_percentage_14d_in_currency",
    priceChangePercentage30DInCurrency: "price_change_percentage_30d_in_currency",
    priceChangePercentage60DInCurrency: "price_change_percentage_60d_in_currency",
    priceChangePercentage200DInCurrency: "price_change_percentage_200d_in_currency",
    priceChangePercentage1YInCurrency: "price_change_percentage_1y_in_currency",
    marketCapChange24HInCurrency: "market_cap_change_24h_in_currency",
    marketCapChangePercentage24HInCurrency: "market_cap_change_percentage_24h_in_currency",
    totalSupply: "total_supply",
    maxSupply: "max_supply",
    maxSupplyInfinite: "max_supply_infinite",
    circulatingSupply: "circulating_supply",
    outstandingSupply: "outstanding_supply",
    lastUpdated: "last_updated",
    sparkline7D: "sparkline_7d",
  },
});
