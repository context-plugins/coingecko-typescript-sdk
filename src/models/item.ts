import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";

export type Item = {
  id: string;
  coinId: number;
  name: string;
  symbol: string;
  marketCapRank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  priceBtc: number;
  score: number;
  data: Data2;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  id: s.string(),
  coinId: s.number(),
  name: s.string(),
  symbol: s.string(),
  marketCapRank: s.number(),
  thumb: s.string(),
  small: s.string(),
  large: s.string(),
  slug: s.string(),
  priceBtc: s.number(),
  score: s.number(),
  data: data2Schema,
  _keysMap: {
    coinId: "coin_id",
    marketCapRank: "market_cap_rank",
    priceBtc: "price_btc",
  },
});
