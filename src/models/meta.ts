import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
