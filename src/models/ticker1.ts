import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedLast1Schema, type ConvertedLast1 } from "./converted-last1.js";
import { convertedVolume1Schema, type ConvertedVolume1 } from "./converted-volume1.js";
import { market1Schema, type Market1 } from "./market1.js";

export type Ticker1 = {
  /** Ticker base currency */
  base?: string;
  /** Ticker target currency */
  target?: string;
  /** Ticker exchange */
  market?: Market1;
  /** Ticker last price */
  last?: number;
  /** Ticker volume */
  volume?: number;
  /** Ticker converted last price */
  convertedLast?: ConvertedLast1;
  /** Ticker converted volume */
  convertedVolume?: ConvertedVolume1;
  /** Ticker trust score */
  trustScore?: string | null;
  /** Ticker bid-ask spread percentage */
  bidAskSpreadPercentage?: number;
  /** Ticker timestamp */
  timestamp?: string;
  /** Ticker last traded timestamp */
  lastTradedAt?: string;
  /** Ticker last fetch timestamp */
  lastFetchAt?: string;
  /** Ticker anomaly */
  isAnomaly?: boolean;
  /** Ticker stale */
  isStale?: boolean;
  /** Ticker trade URL */
  tradeUrl?: string;
  /** Ticker token info URL */
  tokenInfoUrl?: string | null;
  /** Ticker base currency coin ID */
  coinId?: string;
  /** Ticker target currency coin ID */
  targetCoinId?: string;
  /** Market cap in USD */
  coinMcapUsd?: number;
};

export const ticker1Schema: Schema<Ticker1> = s.object<Ticker1>({
  base: s.optional(s.string()),
  target: s.optional(s.string()),
  market: s.optional(s.lazy(() => market1Schema)),
  last: s.optional(s.float64()),
  volume: s.optional(s.float64()),
  convertedLast: s.optional(s.lazy(() => convertedLast1Schema)),
  convertedVolume: s.optional(s.lazy(() => convertedVolume1Schema)),
  trustScore: s.optionalNullable(s.string()),
  bidAskSpreadPercentage: s.optional(s.float64()),
  timestamp: s.optional(s.string()),
  lastTradedAt: s.optional(s.string()),
  lastFetchAt: s.optional(s.string()),
  isAnomaly: s.optional(s.boolean()),
  isStale: s.optional(s.boolean()),
  tradeUrl: s.optional(s.string()),
  tokenInfoUrl: s.optionalNullable(s.string()),
  coinId: s.optional(s.string()),
  targetCoinId: s.optional(s.string()),
  coinMcapUsd: s.optional(s.float64()),
  _keysMap: {
    convertedLast: "converted_last",
    convertedVolume: "converted_volume",
    trustScore: "trust_score",
    bidAskSpreadPercentage: "bid_ask_spread_percentage",
    lastTradedAt: "last_traded_at",
    lastFetchAt: "last_fetch_at",
    isAnomaly: "is_anomaly",
    isStale: "is_stale",
    tradeUrl: "trade_url",
    tokenInfoUrl: "token_info_url",
    coinId: "coin_id",
    targetCoinId: "target_coin_id",
    coinMcapUsd: "coin_mcap_usd",
  },
});
