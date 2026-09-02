import { s, type Schema } from "../core/index.js";

export type Roi2 = {
  times?: number;
  currency?: string;
  percentage?: number;
};

export const roi2Schema: Schema<Roi2> = s.object<Roi2>({
  times: s.optional(s.number()),
  currency: s.optional(s.string()),
  percentage: s.optional(s.number()),
});
