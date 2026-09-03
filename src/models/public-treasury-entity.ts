import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingSchema, type Holding } from "./holding.js";

export type PublicTreasuryEntity = {
  name: string;
  id: string;
  type: string;
  symbol: string | null;
  country: string;
  websiteUrl: string;
  twitterScreenName: string;
  totalTreasuryValueUsd: number;
  unrealizedPnl: number;
  mNav: number;
  totalAssetValuePerShareUsd: number;
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
  totalTreasuryValueUsd: s.number(),
  unrealizedPnl: s.number(),
  mNav: s.number(),
  totalAssetValuePerShareUsd: s.number(),
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
