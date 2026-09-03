import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type Category2 = {
  id: number;
  name: string;
  top3CoinsImages: string[];
  marketCap1HChange: number;
  slug: string;
  coinsCount: string;
  data: Data4;
};

export const category2Schema: Schema<Category2> = s.object<Category2>({
  id: s.number(),
  name: s.string(),
  top3CoinsImages: s.array(s.string()),
  marketCap1HChange: s.number(),
  slug: s.string(),
  coinsCount: s.string(),
  data: data4Schema,
  _keysMap: {
    top3CoinsImages: "top_3_coins_images",
    marketCap1HChange: "market_cap_1h_change",
    coinsCount: "coins_count",
  },
});
