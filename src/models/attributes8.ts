import { s, type Schema } from "../core/index.js";

export type Attributes8 = {
  baseTokenAddress?: string;
  quoteTokenAddress?: string;
  quoteTokenAddresses?: string[];
  sentimentVotePositivePercentage?: number;
  sentimentVoteNegativePercentage?: number;
  communitySusReport?: number;
};

export const attributes8Schema: Schema<Attributes8> = s.object<Attributes8>({
  baseTokenAddress: s.optional(s.string()),
  quoteTokenAddress: s.optional(s.string()),
  quoteTokenAddresses: s.optional(s.array(s.string())),
  sentimentVotePositivePercentage: s.optional(s.number()),
  sentimentVoteNegativePercentage: s.optional(s.number()),
  communitySusReport: s.optional(s.number()),
  _keysMap: {
    baseTokenAddress: "base_token_address",
    quoteTokenAddress: "quote_token_address",
    quoteTokenAddresses: "quote_token_addresses",
    sentimentVotePositivePercentage: "sentiment_vote_positive_percentage",
    sentimentVoteNegativePercentage: "sentiment_vote_negative_percentage",
    communitySusReport: "community_sus_report",
  },
});
