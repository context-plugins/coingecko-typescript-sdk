import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceChangePercentageSchema, type PriceChangePercentage } from "./price-change-percentage.js";
import { transactionsSchema, type Transactions } from "./transactions.js";
import { volumeUsdSchema, type VolumeUsd } from "./volume-usd.js";

export type Attributes12 = {
  /** Base token price in USD */
  baseTokenPriceUsd: string;
  /** Base token price in native currency */
  baseTokenPriceNativeCurrency: string | null;
  /** Quote token price in USD */
  quoteTokenPriceUsd: string;
  /** Quote token price in native currency */
  quoteTokenPriceNativeCurrency: string | null;
  /** Base token price in quote token */
  baseTokenPriceQuoteToken: string | null;
  /** Quote token price in base token */
  quoteTokenPriceBaseToken: string | null;
  /** Pool contract address */
  address: string;
  /** Pool name */
  name: string;
  /** Pool creation timestamp */
  poolCreatedAt: string;
  /** Fully diluted valuation in USD */
  fdvUsd: string | null;
  /** Market cap in USD */
  marketCapUsd: string | null;
  /** Price change percentage over various timeframes */
  priceChangePercentage: PriceChangePercentage;
  /** Transaction counts over various timeframes */
  transactions: Transactions;
  /** Volume in USD over various timeframes */
  volumeUsd: VolumeUsd;
  /** Total reserve in USD */
  reserveInUsd: string | null;
  /** Price of the queried token in USD, present when querying pools by token address */
  tokenPriceUsd?: string;
  /** GeckoTerminal community positive sentiment vote percentage */
  sentimentVotePositivePercentage?: number;
  /** GeckoTerminal community negative sentiment vote percentage */
  sentimentVoteNegativePercentage?: number;
  /** GeckoTerminal community suspicious reports count */
  communitySusReport?: number;
};

export const attributes12Schema: Schema<Attributes12> = s.object<Attributes12>({
  baseTokenPriceUsd: s.string(),
  baseTokenPriceNativeCurrency: s.nullable(s.string()),
  quoteTokenPriceUsd: s.string(),
  quoteTokenPriceNativeCurrency: s.nullable(s.string()),
  baseTokenPriceQuoteToken: s.nullable(s.string()),
  quoteTokenPriceBaseToken: s.nullable(s.string()),
  address: s.string(),
  name: s.string(),
  poolCreatedAt: s.string(),
  fdvUsd: s.nullable(s.string()),
  marketCapUsd: s.nullable(s.string()),
  priceChangePercentage: priceChangePercentageSchema,
  transactions: transactionsSchema,
  volumeUsd: volumeUsdSchema,
  reserveInUsd: s.nullable(s.string()),
  tokenPriceUsd: s.optional(s.string()),
  sentimentVotePositivePercentage: s.optional(s.float64()),
  sentimentVoteNegativePercentage: s.optional(s.float64()),
  communitySusReport: s.optional(s.int()),
  _keysMap: {
    baseTokenPriceUsd: "base_token_price_usd",
    baseTokenPriceNativeCurrency: "base_token_price_native_currency",
    quoteTokenPriceUsd: "quote_token_price_usd",
    quoteTokenPriceNativeCurrency: "quote_token_price_native_currency",
    baseTokenPriceQuoteToken: "base_token_price_quote_token",
    quoteTokenPriceBaseToken: "quote_token_price_base_token",
    poolCreatedAt: "pool_created_at",
    fdvUsd: "fdv_usd",
    marketCapUsd: "market_cap_usd",
    priceChangePercentage: "price_change_percentage",
    volumeUsd: "volume_usd",
    reserveInUsd: "reserve_in_usd",
    tokenPriceUsd: "token_price_usd",
    sentimentVotePositivePercentage: "sentiment_vote_positive_percentage",
    sentimentVoteNegativePercentage: "sentiment_vote_negative_percentage",
    communitySusReport: "community_sus_report",
  },
});
