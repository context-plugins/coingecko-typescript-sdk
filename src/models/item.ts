import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";

export type Item = {
  /** Coin ID */
  id: string;
  /** Coin internal ID */
  coinId: number;
  /** Coin name */
  name: string;
  /** Coin symbol */
  symbol: string;
  /** Coin market cap rank */
  marketCapRank: number;
  /** Coin thumb image URL */
  thumb: string;
  /** Coin small image URL */
  small: string;
  /** Coin large image URL */
  large: string;
  /** Coin web slug */
  slug: string;
  /** Coin price in BTC */
  priceBtc: number;
  /** Coin trending rank (0-based) */
  score: number;
  data: Data2;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  id: s.string(),
  coinId: s.int(),
  name: s.string(),
  symbol: s.string(),
  marketCapRank: s.int(),
  thumb: s.string(),
  small: s.string(),
  large: s.string(),
  slug: s.string(),
  priceBtc: s.float64(),
  score: s.int(),
  data: data2Schema,
  _keysMap: {
    coinId: "coin_id",
    marketCapRank: "market_cap_rank",
    priceBtc: "price_btc",
  },
});
