import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Coin = {
  /** Coin ID */
  id: string;
  /** Coin name */
  name: string;
  /** Coin API symbol */
  apiSymbol: string;
  /** Coin symbol */
  symbol: string;
  /** Coin market cap rank */
  marketCapRank: number | null;
  /** Coin thumb image URL */
  thumb: string;
  /** Coin large image URL */
  large: string;
};

export const coinSchema: Schema<Coin> = s.object<Coin>({
  id: s.string(),
  name: s.string(),
  apiSymbol: s.string(),
  symbol: s.string(),
  marketCapRank: s.nullable(s.int()),
  thumb: s.string(),
  large: s.string(),
  _keysMap: {
    apiSymbol: "api_symbol",
    marketCapRank: "market_cap_rank",
  },
});
