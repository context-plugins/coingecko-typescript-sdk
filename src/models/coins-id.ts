import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoriesDetailSchema, type CategoriesDetail } from "./categories-detail.js";
import { communityData1Schema, type CommunityData1 } from "./community-data1.js";
import { detailPlatforms1Schema, type DetailPlatforms1 } from "./detail-platforms1.js";
import { developerData1Schema, type DeveloperData1 } from "./developer-data1.js";
import { icoDataSchema, type IcoData } from "./ico-data.js";
import { image1Schema, type Image1 } from "./image1.js";
import { linksSchema, type Links } from "./links.js";
import { marketData1Schema, type MarketData1 } from "./market-data1.js";
import { statusUpdateSchema, type StatusUpdate } from "./status-update.js";
import { ticker1Schema, type Ticker1 } from "./ticker1.js";

export type CoinsId = {
  /** Coin ID */
  id: string;
  /** Coin symbol */
  symbol: string;
  /** Coin name */
  name: string;
  /** Coin web slug */
  webSlug: string;
  /** Coin asset platform ID */
  assetPlatformId: string | null;
  /** Coin asset platform and contract address */
  platforms: Record<string, string>;
  /** Detailed coin asset platform and contract address */
  detailPlatforms: Record<string, DetailPlatforms1>;
  /** Blockchain block time in minutes */
  blockTimeInMinutes: number;
  /** Blockchain hashing algorithm */
  hashingAlgorithm: string | null;
  /** Coin categories */
  categories: string[];
  /** Detailed coin categories */
  categoriesDetails?: CategoriesDetail[];
  /** Preview listing coin */
  previewListing: boolean;
  /** Public notice */
  publicNotice: string | null;
  /** Additional notices */
  additionalNotices: string[];
  /** Whether detailed supply breakdown data is available via /coins/supply_breakdown */
  hasSupplyBreakdown: boolean;
  /** Coin name localization */
  localization?: Record<string, string>;
  /** Coin description */
  description: Record<string, string>;
  /** Links */
  links: Links;
  /** Coin image URL */
  image: Image1;
  /** Country of origin */
  countryOrigin: string;
  /** Genesis date */
  genesisDate: string | null;
  /** Sentiment votes up percentage */
  sentimentVotesUpPercentage: number | null;
  /** Sentiment votes down percentage */
  sentimentVotesDownPercentage: number | null;
  /** ICO data */
  icoData?: IcoData | null;
  /** Number of users watching this coin in portfolio */
  watchlistPortfolioUsers: number;
  /** Market cap rank */
  marketCapRank: number | null;
  /** Market cap rank including rehypothecated tokens */
  marketCapRankWithRehypothecated: number | null;
  /** Market data */
  marketData?: MarketData1;
  /** Community data */
  communityData?: CommunityData1;
  /** Developer data */
  developerData?: DeveloperData1;
  /** Status updates */
  statusUpdates: StatusUpdate[];
  /** Last updated timestamp */
  lastUpdated: string;
  /** Tickers */
  tickers?: Ticker1[];
};

export const coinsIdSchema: Schema<CoinsId> = s.object<CoinsId>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  webSlug: s.string(),
  assetPlatformId: s.nullable(s.string()),
  platforms: s.record(s.string(), s.string()),
  detailPlatforms: s.record(
    s.string(),
    s.lazy(() => detailPlatforms1Schema),
  ),
  blockTimeInMinutes: s.float64(),
  hashingAlgorithm: s.nullable(s.string()),
  categories: s.array(s.string()),
  categoriesDetails: s.optional(s.array(s.lazy(() => categoriesDetailSchema))),
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
  sentimentVotesUpPercentage: s.nullable(s.float64()),
  sentimentVotesDownPercentage: s.nullable(s.float64()),
  icoData: s.optionalNullable(s.lazy(() => icoDataSchema)),
  watchlistPortfolioUsers: s.float64(),
  marketCapRank: s.nullable(s.int()),
  marketCapRankWithRehypothecated: s.nullable(s.int()),
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
    categoriesDetails: "categories_details",
    previewListing: "preview_listing",
    publicNotice: "public_notice",
    additionalNotices: "additional_notices",
    hasSupplyBreakdown: "has_supply_breakdown",
    countryOrigin: "country_origin",
    genesisDate: "genesis_date",
    sentimentVotesUpPercentage: "sentiment_votes_up_percentage",
    sentimentVotesDownPercentage: "sentiment_votes_down_percentage",
    icoData: "ico_data",
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
