import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes5 = {
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
  gtScore: number | null;
  /** Metadata last updated timestamp */
  metadataUpdatedAt: string;
};

export const attributes5Schema: Schema<Attributes5> = s.object<Attributes5>({
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.int(),
  imageUrl: s.nullable(s.string()),
  coingeckoCoinId: s.nullable(s.string()),
  websites: s.array(s.string()),
  discordUrl: s.nullable(s.string()),
  farcasterUrl: s.nullable(s.string()),
  zoraUrl: s.nullable(s.string()),
  telegramHandle: s.nullable(s.string()),
  twitterHandle: s.nullable(s.string()),
  description: s.nullable(s.string()),
  gtScore: s.nullable(s.float64()),
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
