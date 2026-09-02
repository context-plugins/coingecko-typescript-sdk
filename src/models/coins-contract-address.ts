import { s, type Schema } from "../core/index.js";
import { communityData1Schema, type CommunityData1 } from "./community-data1.js";
import { detailPlatformsSchema, type DetailPlatforms } from "./detail-platforms.js";
import { developerData1Schema, type DeveloperData1 } from "./developer-data1.js";
import { image1Schema, type Image1 } from "./image1.js";
import { linksSchema, type Links } from "./links.js";
import { marketData1Schema, type MarketData1 } from "./market-data1.js";
import { statusUpdateSchema, type StatusUpdate } from "./status-update.js";
import { ticker1Schema, type Ticker1 } from "./ticker1.js";

export type CoinsContractAddress = {
  id: string;
  symbol: string;
  name: string;
  webSlug: string;
  assetPlatformId: string | null;
  platforms: Record<string, string>;
  detailPlatforms: Record<string, DetailPlatforms>;
  blockTimeInMinutes: number;
  hashingAlgorithm: string | null;
  categories: string[];
  previewListing: boolean;
  publicNotice: string | null;
  additionalNotices: string[];
  hasSupplyBreakdown: boolean;
  localization?: Record<string, string>;
  description: Record<string, string>;
  links: Links;
  image: Image1;
  countryOrigin: string;
  genesisDate: string | null;
  contractAddress: string;
  sentimentVotesUpPercentage: number | null;
  sentimentVotesDownPercentage: number | null;
  watchlistPortfolioUsers: number;
  marketCapRank: number | null;
  marketCapRankWithRehypothecated: number | null;
  marketData?: MarketData1;
  communityData?: CommunityData1;
  developerData?: DeveloperData1;
  statusUpdates: StatusUpdate[];
  lastUpdated: string;
  tickers?: Ticker1[];
};

export const coinsContractAddressSchema: Schema<CoinsContractAddress> = s.object<CoinsContractAddress>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  webSlug: s.string(),
  assetPlatformId: s.nullable(s.string()),
  platforms: s.record(s.string(), s.string()),
  detailPlatforms: s.record(
    s.string(),
    s.lazy(() => detailPlatformsSchema),
  ),
  blockTimeInMinutes: s.number(),
  hashingAlgorithm: s.nullable(s.string()),
  categories: s.array(s.string()),
  previewListing: s.boolean(),
  publicNotice: s.nullable(s.string()),
  additionalNotices: s.array(s.string()),
  hasSupplyBreakdown: s.boolean(),
  localization: s.optional(s.record(s.string(), s.string())),
  description: s.record(s.string(), s.string()),
  links: linksSchema,
  image: image1Schema,
  countryOrigin: s.string(),
  genesisDate: s.nullable(s.string()),
  contractAddress: s.string(),
  sentimentVotesUpPercentage: s.nullable(s.number()),
  sentimentVotesDownPercentage: s.nullable(s.number()),
  watchlistPortfolioUsers: s.number(),
  marketCapRank: s.nullable(s.number()),
  marketCapRankWithRehypothecated: s.nullable(s.number()),
  marketData: s.optional(s.lazy(() => marketData1Schema)),
  communityData: s.optional(s.lazy(() => communityData1Schema)),
  developerData: s.optional(s.lazy(() => developerData1Schema)),
  statusUpdates: s.array(s.lazy(() => statusUpdateSchema)),
  lastUpdated: s.string(),
  tickers: s.optional(s.array(s.lazy(() => ticker1Schema))),
  _keysMap: {
    webSlug: "web_slug",
    assetPlatformId: "asset_platform_id",
    detailPlatforms: "detail_platforms",
    blockTimeInMinutes: "block_time_in_minutes",
    hashingAlgorithm: "hashing_algorithm",
    previewListing: "preview_listing",
    publicNotice: "public_notice",
    additionalNotices: "additional_notices",
    hasSupplyBreakdown: "has_supply_breakdown",
    countryOrigin: "country_origin",
    genesisDate: "genesis_date",
    contractAddress: "contract_address",
    sentimentVotesUpPercentage: "sentiment_votes_up_percentage",
    sentimentVotesDownPercentage: "sentiment_votes_down_percentage",
    watchlistPortfolioUsers: "watchlist_portfolio_users",
    marketCapRank: "market_cap_rank",
    marketCapRankWithRehypothecated: "market_cap_rank_with_rehypothecated",
    marketData: "market_data",
    communityData: "community_data",
    developerData: "developer_data",
    statusUpdates: "status_updates",
    lastUpdated: "last_updated",
  },
});
