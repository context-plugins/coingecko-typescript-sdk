import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedLastSchema, type ConvertedLast } from "./converted-last.js";
import { convertedVolumeSchema, type ConvertedVolume } from "./converted-volume.js";
import { market3Schema, type Market3 } from "./market3.js";

export type Ticker3 = {
  /** Ticker base currency */
  base?: string;
  /** Ticker target currency */
  target?: string;
  /** Exchange information */
  market?: Market3;
  /** Last price */
  last?: number;
  /** Trading volume */
  volume?: number;
  /** Converted last price */
  convertedLast?: ConvertedLast;
  /** Converted trading volume */
  convertedVolume?: ConvertedVolume;
  /** Trust score */
  trustScore?: string | null;
  /** Bid-ask spread percentage */
  bidAskSpreadPercentage?: number;
  /** Ticker timestamp */
  timestamp?: string;
  /** Last traded timestamp */
  lastTradedAt?: string;
  /** Last fetch timestamp */
  lastFetchAt?: string;
  /** Whether ticker is anomalous */
  isAnomaly?: boolean;
  /** Whether ticker is stale */
  isStale?: boolean;
  /** Trade URL */
  tradeUrl?: string;
  /** Token info URL */
  tokenInfoUrl?: string | null;
  /** Base currency coin ID */
  coinId?: string;
  /** Target currency coin ID */
  targetCoinId?: string;
  /** Coin market cap in USD */
  coinMcapUsd?: number;
};

export const ticker3Schema: Schema<Ticker3> = s.object<Ticker3>({
  base: s.optional(s.string()),
  target: s.optional(s.string()),
  market: s.optional(s.lazy(() => market3Schema)),
  last: s.optional(s.float64()),
  volume: s.optional(s.float64()),
  convertedLast: s.optional(s.lazy(() => convertedLastSchema)),
  convertedVolume: s.optional(s.lazy(() => convertedVolumeSchema)),
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
