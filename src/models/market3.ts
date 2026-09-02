import { s, type Schema } from "../core/index.js";

export type Market3 = {
  name?: string;
  identifier?: string;
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
