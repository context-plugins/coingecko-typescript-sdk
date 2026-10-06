import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedLastSchema, type ConvertedLast } from "./converted-last.js";
import { convertedVolumeSchema, type ConvertedVolume } from "./converted-volume.js";
import { marketSchema, type Market } from "./market.js";

export type Ticker = {
  /** Ticker base currency */
  base: string;
  /** Ticker target currency */
  target: string;
  /** Exchange information */
  market: Market;
  /** Last price */
  last: number;
  /** Trading volume */
  volume: number;
  /** Cost to move price up by 2% in USD */
  costToMoveUpUsd?: number;
  /** Cost to move price down by 2% in USD */
  costToMoveDownUsd?: number;
  /** Converted last price */
  convertedLast: ConvertedLast;
  /** Converted trading volume */
  convertedVolume: ConvertedVolume;
  /** Trust score */
  trustScore: string | null;
  /** Bid-ask spread percentage */
  bidAskSpreadPercentage: number;
  /** Ticker timestamp */
  timestamp: string;
  /** Last traded timestamp */
  lastTradedAt: string;
  /** Last fetch timestamp */
  lastFetchAt: string;
  /** Whether ticker is anomalous */
  isAnomaly: boolean;
  /** Whether ticker is stale */
  isStale: boolean;
  /** Trade URL */
  tradeUrl: string;
  /** Token info URL */
  tokenInfoUrl: string | null;
  /** Base currency coin ID */
  coinId: string;
  /** Target currency coin ID */
  targetCoinId: string;
  /** Coin market cap in USD */
  coinMcapUsd: number;
};

export const tickerSchema: Schema<Ticker> = s.object<Ticker>({
  base: s.string(),
  target: s.string(),
  market: marketSchema,
  last: s.float64(),
  volume: s.float64(),
  costToMoveUpUsd: s.optional(s.float64()),
  costToMoveDownUsd: s.optional(s.float64()),
  convertedLast: convertedLastSchema,
  convertedVolume: convertedVolumeSchema,
  trustScore: s.nullable(s.string()),
  bidAskSpreadPercentage: s.float64(),
  timestamp: s.string(),
  lastTradedAt: s.string(),
  lastFetchAt: s.string(),
  isAnomaly: s.boolean(),
  isStale: s.boolean(),
  tradeUrl: s.string(),
  tokenInfoUrl: s.nullable(s.string()),
  coinId: s.string(),
  targetCoinId: s.string(),
  coinMcapUsd: s.float64(),
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
