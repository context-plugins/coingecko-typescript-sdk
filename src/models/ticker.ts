import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedLastSchema, type ConvertedLast } from "./converted-last.js";
import { convertedVolumeSchema, type ConvertedVolume } from "./converted-volume.js";
import { marketSchema, type Market } from "./market.js";

export type Ticker = {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  costToMoveUpUsd?: number;
  costToMoveDownUsd?: number;
  convertedLast: ConvertedLast;
  convertedVolume: ConvertedVolume;
  trustScore: string | null;
  bidAskSpreadPercentage: number;
  timestamp: string;
  lastTradedAt: string;
  lastFetchAt: string;
  isAnomaly: boolean;
  isStale: boolean;
  tradeUrl: string;
  tokenInfoUrl: string | null;
  coinId: string;
  targetCoinId: string;
  coinMcapUsd: number;
};

export const tickerSchema: Schema<Ticker> = s.object<Ticker>({
  base: s.string(),
  target: s.string(),
  market: marketSchema,
  last: s.number(),
  volume: s.number(),
  costToMoveUpUsd: s.optional(s.number()),
  costToMoveDownUsd: s.optional(s.number()),
  convertedLast: convertedLastSchema,
  convertedVolume: convertedVolumeSchema,
  trustScore: s.nullable(s.string()),
  bidAskSpreadPercentage: s.number(),
  timestamp: s.string(),
  lastTradedAt: s.string(),
  lastFetchAt: s.string(),
  isAnomaly: s.boolean(),
  isStale: s.boolean(),
  tradeUrl: s.string(),
  tokenInfoUrl: s.nullable(s.string()),
  coinId: s.string(),
  targetCoinId: s.string(),
  coinMcapUsd: s.number(),
  _keysMap: {
    costToMoveUpUsd: "cost_to_move_up_usd",
    costToMoveDownUsd: "cost_to_move_down_usd",
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
