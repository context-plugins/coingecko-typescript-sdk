import { s, type Schema } from "../core/index.js";
import { baseSchema, type Base } from "./base.js";
import { quoteSchema, type Quote } from "./quote.js";

export type Meta = {
  base?: Base;
  quote?: Quote;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  base: s.optional(s.lazy(() => baseSchema)),
  quote: s.optional(s.lazy(() => quoteSchema)),
});
