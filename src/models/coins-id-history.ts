import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { communityDataSchema, type CommunityData } from "./community-data.js";
import { developerDataSchema, type DeveloperData } from "./developer-data.js";
import { imageSchema, type Image } from "./image.js";
import { marketDataSchema, type MarketData } from "./market-data.js";
import { publicInterestStatsSchema, type PublicInterestStats } from "./public-interest-stats.js";

export type CoinsIdHistory = {
  /** Coin ID */
  id: string;
  /** Coin symbol */
  symbol: string;
  /** Coin name */
  name: string;
  /** Localized coin names keyed by locale code */
  localization?: Record<string, string>;
  /** Coin image URLs */
  image: Image;
  /** Market data at the given date */
  marketData: MarketData;
  /** Community engagement data */
  communityData: CommunityData;
  /** Developer activity data */
  developerData: DeveloperData;
  /** Public interest statistics */
  publicInterestStats: PublicInterestStats;
};

export const coinsIdHistorySchema: Schema<CoinsIdHistory> = s.object<CoinsIdHistory>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  localization: s.optional(s.record(s.string(), s.string())),
  image: imageSchema,
  marketData: marketDataSchema,
  communityData: communityDataSchema,
  developerData: developerDataSchema,
  publicInterestStats: publicInterestStatsSchema,
  _keysMap: {
    marketData: "market_data",
    communityData: "community_data",
    developerData: "developer_data",
    publicInterestStats: "public_interest_stats",
  },
});
