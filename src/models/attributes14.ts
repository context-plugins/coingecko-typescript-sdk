import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceChangePercentageSchema, type PriceChangePercentage } from "./price-change-percentage.js";
import { transactionsSchema, type Transactions } from "./transactions.js";
import { volumeUsdSchema, type VolumeUsd } from "./volume-usd.js";

export type Attributes14 = {
  baseTokenPriceUsd: string;
  baseTokenPriceNativeCurrency: string | null;
  quoteTokenPriceUsd: string;
  quoteTokenPriceNativeCurrency: string | null;
  baseTokenPriceQuoteToken: string | null;
  quoteTokenPriceBaseToken: string | null;
  address: string;
  name: string;
  poolCreatedAt: string;
  fdvUsd: string | null;
  marketCapUsd: string | null;
  priceChangePercentage: PriceChangePercentage;
  transactions: Transactions;
  volumeUsd: VolumeUsd;
  reserveInUsd: string | null;
};

export const attributes14Schema: Schema<Attributes14> = s.object<Attributes14>({
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
  },
});
