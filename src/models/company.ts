import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Company = {
  /** Company name */
  name: string;
  /** Company ticker symbol */
  symbol: string | null;
  /** Country code */
  country: string;
  /** Total crypto holdings */
  totalHoldings: number;
  /** Total entry value in USD */
  totalEntryValueUsd: number;
  /** Total current value of crypto holdings in USD */
  totalCurrentValueUsd: number;
  /** Percentage of total crypto supply */
  percentageOfTotalSupply: number;
};

export const companySchema: Schema<Company> = s.object<Company>({
  name: s.string(),
  symbol: s.nullable(s.string()),
  country: s.string(),
  totalHoldings: s.float64(),
  totalEntryValueUsd: s.float64(),
  totalCurrentValueUsd: s.float64(),
  percentageOfTotalSupply: s.float64(),
  _keysMap: {
    totalHoldings: "total_holdings",
    totalEntryValueUsd: "total_entry_value_usd",
    totalCurrentValueUsd: "total_current_value_usd",
    percentageOfTotalSupply: "percentage_of_total_supply",
  },
});
