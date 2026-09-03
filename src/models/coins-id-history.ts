import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { communityDataSchema, type CommunityData } from "./community-data.js";
import { developerDataSchema, type DeveloperData } from "./developer-data.js";
import { imageSchema, type Image } from "./image.js";
import { marketDataSchema, type MarketData } from "./market-data.js";
import { publicInterestStatsSchema, type PublicInterestStats } from "./public-interest-stats.js";

export type CoinsIdHistory = {
  id: string;
  symbol: string;
  name: string;
  localization?: Record<string, string>;
  image: Image;
  marketData: MarketData;
  communityData: CommunityData;
  developerData: DeveloperData;
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
