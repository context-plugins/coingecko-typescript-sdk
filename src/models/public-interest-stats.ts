import { s, type Schema } from "../core/index.js";

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
