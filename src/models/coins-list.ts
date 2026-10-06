import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CoinsList = {
  /** Coin ID */
  id: string;
  /** Coin symbol */
  symbol: string;
  /** Coin name */
  name: string;
  /** Asset platform and contract address */
  platforms?: Record<string, string | null>;
};

export const coinsListSchema: Schema<CoinsList> = s.object<CoinsList>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  platforms: s.optional(s.record(s.string(), s.nullable(s.string()))),
});
