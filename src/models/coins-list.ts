import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CoinsList = {
  id: string;
  symbol: string;
  name: string;
  platforms?: Record<string, string | null>;
};

export const coinsListSchema: Schema<CoinsList> = s.object<CoinsList>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  platforms: s.optional(s.record(s.string(), s.nullable(s.string()))),
});
