import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseTokenSchema, type BaseToken } from "./base-token.js";
import { dexSchema, type Dex } from "./dex.js";
import { networkSchema, type Network } from "./network.js";
import { quoteTokenSchema, type QuoteToken } from "./quote-token.js";

/** Related resources */
export type Relationships6 = {
  baseToken?: BaseToken;
  quoteToken?: QuoteToken;
  network?: Network;
  dex?: Dex;
};

export const relationships6Schema: Schema<Relationships6> = s.object<Relationships6>({
  baseToken: s.optional(s.lazy(() => baseTokenSchema)),
  quoteToken: s.optional(s.lazy(() => quoteTokenSchema)),
  network: s.optional(s.lazy(() => networkSchema)),
  dex: s.optional(s.lazy(() => dexSchema)),
  _keysMap: {
    baseToken: "base_token",
    quoteToken: "quote_token",
  },
});
