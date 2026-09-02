import { s, type Schema } from "../core/index.js";

export type Coin = {
  id: string;
  name: string;
  apiSymbol: string;
  symbol: string;
  marketCapRank: number | null;
  thumb: string;
  large: string;
};

export const coinSchema: Schema<Coin> = s.object<Coin>({
  id: s.string(),
  name: s.string(),
  apiSymbol: s.string(),
  symbol: s.string(),
  marketCapRank: s.nullable(s.number()),
  thumb: s.string(),
  large: s.string(),
  _keysMap: {
    apiSymbol: "api_symbol",
    marketCapRank: "market_cap_rank",
  },
});
