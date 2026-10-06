import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type CompanyTreasury = {
  /** Total crypto holdings */
  totalHoldings: number;
  /** Total crypto holdings value in USD */
  totalValueUsd: number;
  /** Market cap dominance percentage */
  marketCapDominance: number;
  /** List of companies holding crypto */
  companies: Company[];
};

export const companyTreasurySchema: Schema<CompanyTreasury> = s.object<CompanyTreasury>({
  totalHoldings: s.float64(),
  totalValueUsd: s.float64(),
  marketCapDominance: s.float64(),
  companies: s.array(s.lazy(() => companySchema)),
  _keysMap: {
    totalHoldings: "total_holdings",
    totalValueUsd: "total_value_usd",
    marketCapDominance: "market_cap_dominance",
  },
});
