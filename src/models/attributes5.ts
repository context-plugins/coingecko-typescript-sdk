import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes5 = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  imageUrl: string | null;
  coingeckoCoinId: string | null;
  websites: string[];
  discordUrl: string | null;
  farcasterUrl: string | null;
  zoraUrl: string | null;
  telegramHandle: string | null;
  twitterHandle: string | null;
  description: string | null;
  gtScore: number | null;
  metadataUpdatedAt: string;
};

export const attributes5Schema: Schema<Attributes5> = s.object<Attributes5>({
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.number(),
  imageUrl: s.nullable(s.string()),
  coingeckoCoinId: s.nullable(s.string()),
  websites: s.array(s.string()),
  discordUrl: s.nullable(s.string()),
  farcasterUrl: s.nullable(s.string()),
  zoraUrl: s.nullable(s.string()),
  telegramHandle: s.nullable(s.string()),
  twitterHandle: s.nullable(s.string()),
  description: s.nullable(s.string()),
  gtScore: s.nullable(s.number()),
  metadataUpdatedAt: s.string(),
  _keysMap: {
    imageUrl: "image_url",
    coingeckoCoinId: "coingecko_coin_id",
    discordUrl: "discord_url",
    farcasterUrl: "farcaster_url",
    zoraUrl: "zora_url",
    telegramHandle: "telegram_handle",
    twitterHandle: "twitter_handle",
    gtScore: "gt_score",
    metadataUpdatedAt: "metadata_updated_at",
  },
});
