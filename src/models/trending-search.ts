import { s, type Schema } from "../core/index.js";
import { category2Schema, type Category2 } from "./category2.js";
import { coin1Schema, type Coin1 } from "./coin1.js";
import { nft1Schema, type Nft1 } from "./nft1.js";

export type TrendingSearch = {
  coins: Coin1[];
  nfts: Nft1[];
  categories: Category2[];
};

export const trendingSearchSchema: Schema<TrendingSearch> = s.object<TrendingSearch>({
  coins: s.array(s.lazy(() => coin1Schema)),
  nfts: s.array(s.lazy(() => nft1Schema)),
  categories: s.array(s.lazy(() => category2Schema)),
});
