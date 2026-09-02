import { s, type Schema } from "../core/index.js";

export type Market = {
  name?: string;
  identifier?: string;
  hasTradingIncentive?: boolean;
  logo?: string;
};

export const marketSchema: Schema<Market> = s.object<Market>({
  name: s.optional(s.string()),
  identifier: s.optional(s.string()),
  hasTradingIncentive: s.optional(s.boolean()),
  logo: s.optional(s.string()),
  _keysMap: {
    hasTradingIncentive: "has_trading_incentive",
  },
});
