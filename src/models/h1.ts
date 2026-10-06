import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type H1 = {
  buys?: number;
  sells?: number;
  buyers?: number;
  sellers?: number;
};

export const h1Schema: Schema<H1> = s.object<H1>({
  buys: s.optional(s.int()),
  sells: s.optional(s.int()),
  buyers: s.optional(s.int()),
  sellers: s.optional(s.int()),
});
