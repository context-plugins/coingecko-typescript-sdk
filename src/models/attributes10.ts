import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceChangePercentage1Schema, type PriceChangePercentage1 } from "./price-change-percentage1.js";
import { transactions1Schema, type Transactions1 } from "./transactions1.js";
import { volumeUsd2Schema, type VolumeUsd2 } from "./volume-usd2.js";

export type Attributes10 = {
  baseTokenPriceUsd?: string;
  baseTokenPriceNativeCurrency?: string;
  quoteTokenPriceUsd?: string;
  quoteTokenPriceNativeCurrency?: string;
  baseTokenPriceQuoteToken?: string;
  quoteTokenPriceBaseToken?: string;
  address?: string;
  name?: string;
  poolCreatedAt?: string;
  fdvUsd?: string | null;
  marketCapUsd?: string | null;
  priceChangePercentage?: PriceChangePercentage1;
  transactions?: Transactions1;
  volumeUsd?: VolumeUsd2;
  reserveInUsd?: string;
};

export const attributes10Schema: Schema<Attributes10> = s.object<Attributes10>({
  baseTokenPriceUsd: s.optional(s.string()),
  baseTokenPriceNativeCurrency: s.optional(s.string()),
  quoteTokenPriceUsd: s.optional(s.string()),
  quoteTokenPriceNativeCurrency: s.optional(s.string()),
  baseTokenPriceQuoteToken: s.optional(s.string()),
  quoteTokenPriceBaseToken: s.optional(s.string()),
  address: s.optional(s.string()),
  name: s.optional(s.string()),
  poolCreatedAt: s.optional(s.string()),
  fdvUsd: s.optionalNullable(s.string()),
  marketCapUsd: s.optionalNullable(s.string()),
  priceChangePercentage: s.optional(s.lazy(() => priceChangePercentage1Schema)),
  transactions: s.optional(s.lazy(() => transactions1Schema)),
  volumeUsd: s.optional(s.lazy(() => volumeUsd2Schema)),
  reserveInUsd: s.optional(s.string()),
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
