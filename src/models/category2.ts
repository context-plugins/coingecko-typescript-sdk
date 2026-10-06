import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type Category2 = {
  /** Category ID */
  id: number;
  /** Category name */
  name: string;
  /** Top 3 coins image URLs in the category */
  top3CoinsImages: string[];
  /** Category market cap 1 hour change */
  marketCap1HChange: number;
  /** Category web slug */
  slug: string;
  /** Number of coins in the category */
  coinsCount: string;
  data: Data4;
};

export const category2Schema: Schema<Category2> = s.object<Category2>({
  id: s.int(),
  name: s.string(),
  top3CoinsImages: s.array(s.string()),
  marketCap1HChange: s.float64(),
  slug: s.string(),
  coinsCount: s.string(),
  data: data4Schema,
  _keysMap: {
    top3CoinsImages: "top_3_coins_images",
    marketCap1HChange: "market_cap_1h_change",
    coinsCount: "coins_count",
  },
});
