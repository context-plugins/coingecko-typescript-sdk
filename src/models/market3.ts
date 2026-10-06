import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Exchange information */
export type Market3 = {
  /** Exchange name */
  name?: string;
  /** Exchange identifier */
  identifier?: string;
  /** Exchange trading incentive */
  hasTradingIncentive?: boolean;
};

export const market3Schema: Schema<Market3> = s.object<Market3>({
  name: s.optional(s.string()),
  identifier: s.optional(s.string()),
  hasTradingIncentive: s.optional(s.boolean()),
  _keysMap: {
    hasTradingIncentive: "has_trading_incentive",
  },
});
