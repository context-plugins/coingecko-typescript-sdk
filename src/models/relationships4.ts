import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseTokenSchema, type BaseToken } from "./base-token.js";
import { dexSchema, type Dex } from "./dex.js";
import { quoteTokenSchema, type QuoteToken } from "./quote-token.js";

export type Relationships4 = {
  baseToken?: BaseToken;
  quoteToken?: QuoteToken;
  dex?: Dex;
};

export const relationships4Schema: Schema<Relationships4> = s.object<Relationships4>({
  baseToken: s.optional(s.lazy(() => baseTokenSchema)),
  quoteToken: s.optional(s.lazy(() => quoteTokenSchema)),
  dex: s.optional(s.lazy(() => dexSchema)),
  _keysMap: {
    baseToken: "base_token",
    quoteToken: "quote_token",
  },
});
