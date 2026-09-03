import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Market1 = {
  name?: string;
  identifier?: string;
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
