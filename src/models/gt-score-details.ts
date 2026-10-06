import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** GeckoTerminal trust score breakdown */
export type GtScoreDetails = {
  pool?: number;
  transaction?: number;
  creation?: number;
  info?: number;
  holders?: number;
};

export const gtScoreDetailsSchema: Schema<GtScoreDetails> = s.object<GtScoreDetails>({
  pool: s.optional(s.float64()),
  transaction: s.optional(s.float64()),
  creation: s.optional(s.float64()),
  info: s.optional(s.float64()),
  holders: s.optional(s.float64()),
});
