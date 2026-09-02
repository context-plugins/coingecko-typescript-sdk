import { s, type Schema } from "../core/index.js";
import { gtScoreDetailsSchema, type GtScoreDetails } from "./gt-score-details.js";
import { holdersSchema, type Holders } from "./holders.js";
import { image6Schema, type Image6 } from "./image6.js";
import { isHoneypotSchema, type IsHoneypot } from "./unions/is-honeypot.js";

export type Attributes7 = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  imageUrl: string | null;
  image: Image6;
  bannerImageUrl: string | null;
  coingeckoCoinId: string | null;
  websites: string[];
  discordUrl: string | null;
  farcasterUrl: string | null;
  zoraUrl: string | null;
  telegramHandle: string | null;
  twitterHandle: string | null;
  description: string | null;
  gtScore: number;
  gtScoreDetails: GtScoreDetails;
  gtVerified: boolean;
  categories: string[];
  gtCategoryIds: string[];
  holders: Holders;
  mintAuthority: string | null;
  freezeAuthority: string | null;
  isHoneypot: IsHoneypot;
  developerAddress: string | null;
  developerHoldingPercentage: string | null;
};

export const attributes7Schema: Schema<Attributes7> = s.object<Attributes7>({
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.number(),
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
  gtScore: s.number(),
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
