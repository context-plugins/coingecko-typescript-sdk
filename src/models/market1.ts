import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Ticker exchange */
export type Market1 = {
  /** Exchange name */
  name?: string;
  /** Exchange identifier */
  identifier?: string;
  /** Exchange trading incentive */
  hasTradingIncentive?: boolean;
};

export const market1Schema: Schema<Market1> = s.object<Market1>({
  name: s.optional(s.string()),
  identifier: s.optional(s.string()),
  hasTradingIncentive: s.optional(s.boolean()),
  _keysMap: {
    hasTradingIncentive: "has_trading_incentive",
  },
});
