import { s, type Schema } from "../core/index.js";

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
