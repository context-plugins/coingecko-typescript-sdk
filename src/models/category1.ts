import { s, type Schema } from "../core/index.js";

export type Category1 = {
  id: string;
  name: string;
  marketCap: number;
  marketCapChange24H: number;
  content: string;
  top3CoinsId: string[];
  top3Coins: string[];
  volume24H: number;
  updatedAt: string;
};

export const category1Schema: Schema<Category1> = s.object<Category1>({
  id: s.string(),
  name: s.string(),
  marketCap: s.number(),
  marketCapChange24H: s.number(),
  content: s.string(),
  top3CoinsId: s.array(s.string()),
  top3Coins: s.array(s.string()),
  volume24H: s.number(),
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
