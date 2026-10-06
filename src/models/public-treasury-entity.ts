import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";

export type PublicTreasuryEntity = {
  /** Entity name */
  name: string;
  /** Entity ID */
  id: string;
  /** Entity type: company or government */
  type: string;
  /** Stock market ticker symbol */
  symbol: string | null;
  /** Country code */
  country: string;
  /** Official website URL */
  websiteUrl: string;
  /** Official Twitter handle */
  twitterScreenName: string;
  /** Total current value of all holdings in USD */
  totalTreasuryValueUsd: number;
  /** Unrealized profit and loss (current value minus total entry value) */
  unrealizedPnl: number;
  /** Market to net asset value ratio */
  mNav: number;
  /** Total asset value per share in USD */
  totalAssetValuePerShareUsd: number;
  /** List of cryptocurrency assets held by the entity */
  holdings: Holding[];
};

export const publicTreasuryEntitySchema: Schema<PublicTreasuryEntity> = s.object<PublicTreasuryEntity>({
  name: s.string(),
  id: s.string(),
  type: s.string(),
  symbol: s.nullable(s.string()),
  country: s.string(),
  websiteUrl: s.string(),
  twitterScreenName: s.string(),
  totalTreasuryValueUsd: s.float64(),
  unrealizedPnl: s.float64(),
  mNav: s.float64(),
  totalAssetValuePerShareUsd: s.float64(),
  holdings: s.array(s.lazy(() => holdingSchema)),
  _keysMap: {
    websiteUrl: "website_url",
    twitterScreenName: "twitter_screen_name",
    totalTreasuryValueUsd: "total_treasury_value_usd",
    unrealizedPnl: "unrealized_pnl",
    mNav: "m_nav",
    totalAssetValuePerShareUsd: "total_asset_value_per_share_usd",
  },
});
