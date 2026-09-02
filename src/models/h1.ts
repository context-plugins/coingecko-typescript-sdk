import { s, type Schema } from "../core/index.js";

export type H1 = {
  buys?: number;
  sells?: number;
  buyers?: number;
  sellers?: number;
};

export const h1Schema: Schema<H1> = s.object<H1>({
  buys: s.optional(s.number()),
  sells: s.optional(s.number()),
  buyers: s.optional(s.number()),
  sellers: s.optional(s.number()),
});
