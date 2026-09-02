import { s, type Schema } from "../core/index.js";
import { data5Schema, type Data5 } from "./data5.js";

export type QuoteToken = {
  data?: Data5;
};

export const quoteTokenSchema: Schema<QuoteToken> = s.object<QuoteToken>({
  data: s.optional(s.lazy(() => data5Schema)),
});
