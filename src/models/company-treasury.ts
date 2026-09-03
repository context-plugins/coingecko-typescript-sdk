import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type CompanyTreasury = {
  totalHoldings: number;
  totalValueUsd: number;
  marketCapDominance: number;
  companies: Company[];
};

export const companyTreasurySchema: Schema<CompanyTreasury> = s.object<CompanyTreasury>({
  totalHoldings: s.number(),
  totalValueUsd: s.number(),
  marketCapDominance: s.number(),
  companies: s.array(s.lazy(() => companySchema)),
  _keysMap: {
    totalHoldings: "total_holdings",
    totalValueUsd: "total_value_usd",
    marketCapDominance: "market_cap_dominance",
  },
});
