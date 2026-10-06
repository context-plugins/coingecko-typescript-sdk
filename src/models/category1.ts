import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Category1 = {
  /** Category ID */
  id: string;
  /** Category name */
  name: string;
  /** Category market cap */
  marketCap: number;
  /** Category market cap change in 24 hours */
  marketCapChange24H: number;
  /** Category description */
  content: string;
  /** IDs of top 3 coins in the category */
  top3CoinsId: string[];
  /** Image URLs of top 3 coins in the category */
  top3Coins: string[];
  /** Category trading volume in 24 hours */
  volume24H: number;
  /** Category last updated timestamp */
  updatedAt: string;
};

export const category1Schema: Schema<Category1> = s.object<Category1>({
  id: s.string(),
  name: s.string(),
  marketCap: s.float64(),
  marketCapChange24H: s.float64(),
  content: s.string(),
  top3CoinsId: s.array(s.string()),
  top3Coins: s.array(s.string()),
  volume24H: s.float64(),
  updatedAt: s.string(),
  _keysMap: {
    marketCap: "market_cap",
    marketCapChange24H: "market_cap_change_24h",
    top3CoinsId: "top_3_coins_id",
    top3Coins: "top_3_coins",
    volume24H: "volume_24h",
    updatedAt: "updated_at",
  },
});
