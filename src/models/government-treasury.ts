import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { governmentSchema, type Government } from "./government.js";

export type GovernmentTreasury = {
  /** Total crypto holdings */
  totalHoldings: number;
  /** Total crypto holdings value in USD */
  totalValueUsd: number;
  /** Market cap dominance percentage */
  marketCapDominance: number;
  /** List of governments holding crypto */
  governments: Government[];
};

export const governmentTreasurySchema: Schema<GovernmentTreasury> = s.object<GovernmentTreasury>({
  totalHoldings: s.float64(),
  totalValueUsd: s.float64(),
  marketCapDominance: s.float64(),
  governments: s.array(s.lazy(() => governmentSchema)),
  _keysMap: {
    totalHoldings: "total_holdings",
    totalValueUsd: "total_value_usd",
    marketCapDominance: "market_cap_dominance",
  },
});
