import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedLast1Schema, type ConvertedLast1 } from "./converted-last1.js";
import { convertedVolume1Schema, type ConvertedVolume1 } from "./converted-volume1.js";
import { market1Schema, type Market1 } from "./market1.js";

export type Ticker1 = {
  base?: string;
  target?: string;
  market?: Market1;
  last?: number;
  volume?: number;
  convertedLast?: ConvertedLast1;
  convertedVolume?: ConvertedVolume1;
  trustScore?: string | null;
  bidAskSpreadPercentage?: number;
  timestamp?: string;
  lastTradedAt?: string;
  lastFetchAt?: string;
  isAnomaly?: boolean;
  isStale?: boolean;
  tradeUrl?: string;
  tokenInfoUrl?: string | null;
  coinId?: string;
  targetCoinId?: string;
  coinMcapUsd?: number;
};

export const ticker1Schema: Schema<Ticker1> = s.object<Ticker1>({
  base: s.optional(s.string()),
  target: s.optional(s.string()),
  market: s.optional(s.lazy(() => market1Schema)),
  last: s.optional(s.number()),
  volume: s.optional(s.number()),
  convertedLast: s.optional(s.lazy(() => convertedLast1Schema)),
  convertedVolume: s.optional(s.lazy(() => convertedVolume1Schema)),
  trustScore: s.optionalNullable(s.string()),
  bidAskSpreadPercentage: s.optional(s.number()),
  timestamp: s.optional(s.string()),
  lastTradedAt: s.optional(s.string()),
  lastFetchAt: s.optional(s.string()),
  isAnomaly: s.optional(s.boolean()),
  isStale: s.optional(s.boolean()),
  tradeUrl: s.optional(s.string()),
  tokenInfoUrl: s.optionalNullable(s.string()),
  coinId: s.optional(s.string()),
  targetCoinId: s.optional(s.string()),
  coinMcapUsd: s.optional(s.number()),
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
