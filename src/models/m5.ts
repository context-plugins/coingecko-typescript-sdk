import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type M5 = {
  buys?: number;
  sells?: number;
  buyers?: number;
  sellers?: number;
};

export const m5Schema: Schema<M5> = s.object<M5>({
  buys: s.optional(s.int()),
  sells: s.optional(s.int()),
  buyers: s.optional(s.int()),
  sellers: s.optional(s.int()),
});
