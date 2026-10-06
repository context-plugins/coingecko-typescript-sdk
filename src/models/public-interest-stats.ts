import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Public interest statistics */
export type PublicInterestStats = {
  /** Alexa rank */
  alexaRank?: number | null;
  /** Bing search matches */
  bingMatches?: number | null;
};

export const publicInterestStatsSchema: Schema<PublicInterestStats> = s.object<PublicInterestStats>({
  alexaRank: s.optionalNullable(s.float64()),
  bingMatches: s.optionalNullable(s.float64()),
  _keysMap: {
    alexaRank: "alexa_rank",
    bingMatches: "bing_matches",
  },
});
