import { s, type Schema } from "../core/index.js";
import { roiSchema, type Roi } from "./roi.js";

export type MarketData1 = {
  currentPrice?: Record<string, number>;
  totalValueLocked?: number | null;
  mcapToTvlRatio?: number | null;
  fdvToTvlRatio?: number | null;
  roi?: Roi | null;
  ath?: Record<string, number>;
  athChangePercentage?: Record<string, number>;
  athDate?: Record<string, string>;
  atl?: Record<string, number>;
  atlChangePercentage?: Record<string, number>;
  atlDate?: Record<string, string>;
  marketCap?: Record<string, number>;
  fullyDilutedValuation?: Record<string, number>;
  marketCapFdvRatio?: number;
  marketCapRank?: number | null;
  outstandingTokenValueUsd?: number | null;
  marketCapRankWithRehypothecated?: number | null;
  totalVolume?: Record<string, number>;
  high24H?: Record<string, number>;
  low24H?: Record<string, number>;
  priceChange24H?: number;
  priceChangePercentage24H?: number;
  priceChangePercentage7D?: number;
  priceChangePercentage14D?: number;
  priceChangePercentage30D?: number;
  priceChangePercentage60D?: number;
  priceChangePercentage200D?: number;
  priceChangePercentage1Y?: number;
  marketCapChange24H?: number;
  marketCapChangePercentage24H?: number;
  priceChange24HInCurrency?: Record<string, number>;
  priceChangePercentage1HInCurrency?: Record<string, number>;
  priceChangePercentage24HInCurrency?: Record<string, number>;
  priceChangePercentage7DInCurrency?: Record<string, number>;
  priceChangePercentage14DInCurrency?: Record<string, number>;
  priceChangePercentage30DInCurrency?: Record<string, number>;
  priceChangePercentage60DInCurrency?: Record<string, number>;
  priceChangePercentage200DInCurrency?: Record<string, number>;
  priceChangePercentage1YInCurrency?: Record<string, number>;
  marketCapChange24HInCurrency?: Record<string, number>;
  marketCapChangePercentage24HInCurrency?: Record<string, number>;
  totalSupply?: number;
  maxSupply?: number | null;
  maxSupplyInfinite?: boolean;
  circulatingSupply?: number;
  outstandingSupply?: number | null;
  lastUpdated?: string;
  sparkline7D?: number[];
};

export const marketData1Schema: Schema<MarketData1> = s.object<MarketData1>({
  currentPrice: s.optional(s.record(s.string(), s.number())),
  totalValueLocked: s.optionalNullable(s.number()),
  mcapToTvlRatio: s.optionalNullable(s.number()),
  fdvToTvlRatio: s.optionalNullable(s.number()),
  roi: s.optionalNullable(s.lazy(() => roiSchema)),
  ath: s.optional(s.record(s.string(), s.number())),
  athChangePercentage: s.optional(s.record(s.string(), s.number())),
  athDate: s.optional(s.record(s.string(), s.string())),
  atl: s.optional(s.record(s.string(), s.number())),
  atlChangePercentage: s.optional(s.record(s.string(), s.number())),
  atlDate: s.optional(s.record(s.string(), s.string())),
  marketCap: s.optional(s.record(s.string(), s.number())),
  fullyDilutedValuation: s.optional(s.record(s.string(), s.number())),
  marketCapFdvRatio: s.optional(s.number()),
  marketCapRank: s.optionalNullable(s.number()),
  outstandingTokenValueUsd: s.optionalNullable(s.number()),
  marketCapRankWithRehypothecated: s.optionalNullable(s.number()),
  totalVolume: s.optional(s.record(s.string(), s.number())),
  high24H: s.optional(s.record(s.string(), s.number())),
  low24H: s.optional(s.record(s.string(), s.number())),
  priceChange24H: s.optional(s.number()),
  priceChangePercentage24H: s.optional(s.number()),
  priceChangePercentage7D: s.optional(s.number()),
  priceChangePercentage14D: s.optional(s.number()),
  priceChangePercentage30D: s.optional(s.number()),
  priceChangePercentage60D: s.optional(s.number()),
  priceChangePercentage200D: s.optional(s.number()),
  priceChangePercentage1Y: s.optional(s.number()),
  marketCapChange24H: s.optional(s.number()),
  marketCapChangePercentage24H: s.optional(s.number()),
  priceChange24HInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage1HInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage24HInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage7DInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage14DInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage30DInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage60DInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage200DInCurrency: s.optional(s.record(s.string(), s.number())),
  priceChangePercentage1YInCurrency: s.optional(s.record(s.string(), s.number())),
  marketCapChange24HInCurrency: s.optional(s.record(s.string(), s.number())),
  marketCapChangePercentage24HInCurrency: s.optional(s.record(s.string(), s.number())),
  totalSupply: s.optional(s.number()),
  maxSupply: s.optionalNullable(s.number()),
  maxSupplyInfinite: s.optional(s.boolean()),
  circulatingSupply: s.optional(s.number()),
  outstandingSupply: s.optionalNullable(s.number()),
  lastUpdated: s.optional(s.string()),
  sparkline7D: s.optional(s.array(s.number())),
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
