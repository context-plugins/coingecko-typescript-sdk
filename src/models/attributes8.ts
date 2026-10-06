import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes8 = {
  /** Base token contract address */
  baseTokenAddress?: string;
  /** Quote token contract address */
  quoteTokenAddress?: string;
  /** Quote token contract addresses, present for pools with more than 2 tokens */
  quoteTokenAddresses?: string[];
  /** GeckoTerminal community positive sentiment vote percentage */
  sentimentVotePositivePercentage?: number;
  /** GeckoTerminal community negative sentiment vote percentage */
  sentimentVoteNegativePercentage?: number;
  /** GeckoTerminal community suspicious reports count */
  communitySusReport?: number;
};

export const attributes8Schema: Schema<Attributes8> = s.object<Attributes8>({
  baseTokenAddress: s.optional(s.string()),
  quoteTokenAddress: s.optional(s.string()),
  quoteTokenAddresses: s.optional(s.array(s.string())),
  sentimentVotePositivePercentage: s.optional(s.float64()),
  sentimentVoteNegativePercentage: s.optional(s.float64()),
  communitySusReport: s.optional(s.int()),
  _keysMap: {
    baseTokenAddress: "base_token_address",
    quoteTokenAddress: "quote_token_address",
    quoteTokenAddresses: "quote_token_addresses",
    sentimentVotePositivePercentage: "sentiment_vote_positive_percentage",
    sentimentVoteNegativePercentage: "sentiment_vote_negative_percentage",
    communitySusReport: "community_sus_report",
  },
});
