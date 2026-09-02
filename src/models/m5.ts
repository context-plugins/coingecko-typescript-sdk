import { s, type Schema } from "../core/index.js";

export type M5 = {
  buys?: number;
  sells?: number;
  buyers?: number;
  sellers?: number;
};

export const m5Schema: Schema<M5> = s.object<M5>({
  buys: s.optional(s.number()),
  sells: s.optional(s.number()),
  buyers: s.optional(s.number()),
  sellers: s.optional(s.number()),
});
