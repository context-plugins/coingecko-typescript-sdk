import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { coinSchema, type Coin } from "./coin.js";
import { exchangeSchema, type Exchange } from "./exchange.js";
import { nftSchema, type Nft } from "./nft.js";

export type Search = {
  coins: Coin[];
  exchanges: Exchange[];
  icos: Record<string, unknown>[];
  categories: Category[];
  nfts: Nft[];
};

export const searchSchema: Schema<Search> = s.object<Search>({
  coins: s.array(s.lazy(() => coinSchema)),
  exchanges: s.array(s.lazy(() => exchangeSchema)),
  icos: s.array(s.record(s.string(), s.unknown())),
  categories: s.array(s.lazy(() => categorySchema)),
  nfts: s.array(s.lazy(() => nftSchema)),
});
