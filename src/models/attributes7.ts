import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gtScoreDetailsSchema, type GtScoreDetails } from "./gt-score-details.js";
import { holdersSchema, type Holders } from "./holders.js";
import { image6Schema, type Image6 } from "./image6.js";
import { isHoneypotSchema, type IsHoneypot } from "./unions/is-honeypot.js";

export type Attributes7 = {
  /** Token contract address */
  address: string;
  /** Token name */
  name: string;
  /** Token symbol */
  symbol: string;
  /** Token decimals */
  decimals: number;
  /** Token image URL */
  imageUrl: string | null;
  /** Token image URLs in different sizes */
  image: Image6;
  /** Token banner image URL */
  bannerImageUrl: string | null;
  /** CoinGecko coin ID */
  coingeckoCoinId: string | null;
  /** Token websites */
  websites: string[];
  /** Discord URL */
  discordUrl: string | null;
  /** Farcaster URL */
  farcasterUrl: string | null;
  /** Zora URL */
  zoraUrl: string | null;
  /** Telegram handle */
  telegramHandle: string | null;
  /** Twitter handle */
  twitterHandle: string | null;
  /** Token description */
  description: string | null;
  /** GeckoTerminal trust score */
  gtScore: number;
  /** GeckoTerminal trust score breakdown */
  gtScoreDetails: GtScoreDetails;
  /** Whether the token is verified on GeckoTerminal */
  gtVerified: boolean;
  /** Token categories */
  categories: string[];
  /** GeckoTerminal category IDs */
  gtCategoryIds: string[];
  /** Token holder information */
  holders: Holders;
  /** Mint authority status */
  mintAuthority: string | null;
  /** Freeze authority status */
  freezeAuthority: string | null;
  /** Whether the token is a honeypot (boolean or 'unknown') */
  isHoneypot: IsHoneypot;
  /** Developer wallet address */
  developerAddress: string | null;
  /** Developer holding as a percentage of total supply */
  developerHoldingPercentage: string | null;
};

export const attributes7Schema: Schema<Attributes7> = s.object<Attributes7>({
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.int(),
  imageUrl: s.nullable(s.string()),
  image: image6Schema,
  bannerImageUrl: s.nullable(s.string()),
  coingeckoCoinId: s.nullable(s.string()),
  websites: s.array(s.string()),
  discordUrl: s.nullable(s.string()),
  farcasterUrl: s.nullable(s.string()),
  zoraUrl: s.nullable(s.string()),
  telegramHandle: s.nullable(s.string()),
  twitterHandle: s.nullable(s.string()),
  description: s.nullable(s.string()),
  gtScore: s.float64(),
  gtScoreDetails: gtScoreDetailsSchema,
  gtVerified: s.boolean(),
  categories: s.array(s.string()),
  gtCategoryIds: s.array(s.string()),
  holders: holdersSchema,
  mintAuthority: s.nullable(s.string()),
  freezeAuthority: s.nullable(s.string()),
  isHoneypot: isHoneypotSchema,
  developerAddress: s.nullable(s.string()),
  developerHoldingPercentage: s.nullable(s.string()),
  _keysMap: {
    imageUrl: "image_url",
    bannerImageUrl: "banner_image_url",
    coingeckoCoinId: "coingecko_coin_id",
    discordUrl: "discord_url",
    farcasterUrl: "farcaster_url",
    zoraUrl: "zora_url",
    telegramHandle: "telegram_handle",
    twitterHandle: "twitter_handle",
    gtScore: "gt_score",
    gtScoreDetails: "gt_score_details",
    gtVerified: "gt_verified",
    gtCategoryIds: "gt_category_ids",
    mintAuthority: "mint_authority",
    freezeAuthority: "freeze_authority",
    isHoneypot: "is_honeypot",
    developerAddress: "developer_address",
    developerHoldingPercentage: "developer_holding_percentage",
  },
});
