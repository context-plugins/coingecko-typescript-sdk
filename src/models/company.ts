import { s, type Schema } from "../core/index.js";

export type Company = {
  name: string;
  symbol: string | null;
  country: string;
  totalHoldings: number;
  totalEntryValueUsd: number;
  totalCurrentValueUsd: number;
  percentageOfTotalSupply: number;
};

export const companySchema: Schema<Company> = s.object<Company>({
  name: s.string(),
  symbol: s.nullable(s.string()),
  country: s.string(),
  totalHoldings: s.number(),
  totalEntryValueUsd: s.number(),
  totalCurrentValueUsd: s.number(),
  percentageOfTotalSupply: s.number(),
  _keysMap: {
    totalHoldings: "total_holdings",
    totalEntryValueUsd: "total_entry_value_usd",
    totalCurrentValueUsd: "total_current_value_usd",
    percentageOfTotalSupply: "percentage_of_total_supply",
  },
});
