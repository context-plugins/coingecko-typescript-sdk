import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GtScoreDetails = {
  pool?: number;
  transaction?: number;
  creation?: number;
  info?: number;
  holders?: number;
};

export const gtScoreDetailsSchema: Schema<GtScoreDetails> = s.object<GtScoreDetails>({
  pool: s.optional(s.number()),
  transaction: s.optional(s.number()),
  creation: s.optional(s.number()),
  info: s.optional(s.number()),
  holders: s.optional(s.number()),
});
