import { s, type Schema } from "../core/index.js";
import { governmentSchema, type Government } from "./government.js";

export type GovernmentTreasury = {
  totalHoldings: number;
  totalValueUsd: number;
  marketCapDominance: number;
  governments: Government[];
};

export const governmentTreasurySchema: Schema<GovernmentTreasury> = s.object<GovernmentTreasury>({
  totalHoldings: s.number(),
  totalValueUsd: s.number(),
  marketCapDominance: s.number(),
  governments: s.array(s.lazy(() => governmentSchema)),
  _keysMap: {
    totalHoldings: "total_holdings",
    totalValueUsd: "total_value_usd",
    marketCapDominance: "market_cap_dominance",
  },
});
