import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicInterestStats = {
  alexaRank?: number | null;
  bingMatches?: number | null;
};

export const publicInterestStatsSchema: Schema<PublicInterestStats> = s.object<PublicInterestStats>({
  alexaRank: s.optionalNullable(s.number()),
  bingMatches: s.optionalNullable(s.number()),
  _keysMap: {
    alexaRank: "alexa_rank",
    bingMatches: "bing_matches",
  },
});
