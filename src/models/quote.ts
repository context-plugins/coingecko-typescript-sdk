import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quote = {
  name?: string;
  symbol?: string;
  coingeckoCoinId?: string | null;
  address?: string;
};

export const quoteSchema: Schema<Quote> = s.object<Quote>({
  name: s.optional(s.string()),
  symbol: s.optional(s.string()),
  coingeckoCoinId: s.optionalNullable(s.string()),
  address: s.optional(s.string()),
  _keysMap: {
    coingeckoCoinId: "coingecko_coin_id",
  },
});
