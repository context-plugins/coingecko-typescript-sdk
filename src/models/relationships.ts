import { s, type Schema } from "../core/index.js";
import { baseTokenSchema, type BaseToken } from "./base-token.js";
import { dexSchema, type Dex } from "./dex.js";
import { quoteTokenSchema, type QuoteToken } from "./quote-token.js";

export type Relationships = {
  baseToken?: BaseToken;
  quoteToken?: QuoteToken;
  dex?: Dex;
};

export const relationshipsSchema: Schema<Relationships> = s.object<Relationships>({
  baseToken: s.optional(s.lazy(() => baseTokenSchema)),
  quoteToken: s.optional(s.lazy(() => quoteTokenSchema)),
  dex: s.optional(s.lazy(() => dexSchema)),
  _keysMap: {
    baseToken: "base_token",
    quoteToken: "quote_token",
  },
});
